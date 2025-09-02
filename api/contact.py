# /api/contact.py
from http.server import BaseHTTPRequestHandler
import json
import os
import smtplib
import ssl
from email.message import EmailMessage

def create_confirmation_html(name):
    return f"""
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {{
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                .container {{
                    background-color: #f9f9f9;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 20px;
                }}
                h2 {{
                    color: #0066cc;
                }}
                .footer {{
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    font-size: 0.9em;
                    color: #666;
                }}
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Bonjour {name},</h2>
                <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
                <p>Notre équipe examine attentivement chaque demande et nous vous répondrons dans les plus brefs délais.</p>
                <p>Si votre demande est urgente, n'hésitez pas à nous recontacter.</p>
                <div class="footer">
                    <p>Cordialement,<br>L'équipe YonyaLabs</p>
                </div>
            </div>
        </body>
    </html>
    """

class handler(BaseHTTPRequestHandler):
    
    def do_OPTIONS(self):
        """Gère les requêtes OPTIONS pour CORS"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        return
    
    def do_POST(self):
        """Gère les requêtes POST pour l'envoi d'emails"""
        try:
            # Lecture des données
            content_length = int(self.headers.get('Content-Length', 0))
            if content_length == 0:
                self.send_error_response(400, 'Aucune donnée reçue')
                return
                
            post_data = self.rfile.read(content_length)
            
            # Parse JSON
            try:
                data = json.loads(post_data.decode('utf-8'))
            except json.JSONDecodeError as e:
                self.send_error_response(400, f'JSON invalide: {str(e)}')
                return
            
            # Extraction des données
            name = data.get('name', '').strip()
            email_client = data.get('email', '').strip()
            message_content = data.get('message', '').strip()
            
            # Récupération des variables d'environnement
            sender_email = os.environ.get('EMAIL_USER')
            sender_password = os.environ.get('EMAIL_PASSWORD')
            recipient_email = os.environ.get('TO_EMAIL')
            
            # Validation des données
            if not name or not email_client or not message_content:
                self.send_error_response(400, 'Nom, email et message sont requis')
                return
                
            if not sender_email or not sender_password or not recipient_email:
                print(f"Config manquante - EMAIL_USER: {bool(sender_email)}, EMAIL_PASSWORD: {bool(sender_password)}, TO_EMAIL: {bool(recipient_email)}")
                self.send_error_response(500, 'Configuration email incomplète sur le serveur')
                return
            
            # Validation basique de l'email
            if '@' not in email_client or '.' not in email_client:
                self.send_error_response(400, 'Email invalide')
                return
            
            # Préparation des emails
            try:
                # Email pour nous
                msg_to_us = EmailMessage()
                msg_to_us['Subject'] = f'Nouveau message de {name}'
                msg_to_us['From'] = sender_email
                msg_to_us['To'] = recipient_email
                msg_to_us.set_content(
                    f"Nouveau message reçu via le formulaire de contact:\n\n"
                    f"Nom: {name}\n"
                    f"Email: {email_client}\n"
                    f"Message:\n{message_content}"
                )
                
                # Email de confirmation pour le client
                msg_to_client = EmailMessage()
                msg_to_client['Subject'] = 'Confirmation de réception - YonyaLabs'
                msg_to_client['From'] = sender_email
                msg_to_client['To'] = email_client
                
                # Version texte
                msg_to_client.set_content(
                    f"Bonjour {name},\n\n"
                    f"Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.\n"
                    f"Notre équipe examine attentivement chaque demande et nous vous répondrons dans les plus brefs délais.\n\n"
                    f"Cordialement,\nL'équipe YonyaLabs"
                )
                
                # Version HTML
                msg_to_client.add_alternative(create_confirmation_html(name), subtype='html')
                
            except Exception as e:
                self.send_error_response(500, f'Erreur lors de la préparation des emails: {str(e)}')
                return
            
            # Envoi des emails
            try:
                context = ssl.create_default_context()
                with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
                    smtp.login(sender_email, sender_password)
                    smtp.send_message(msg_to_us)
                    smtp.send_message(msg_to_client)
                
                # Succès
                self.send_success_response({'message': 'Emails envoyés avec succès'})
                
            except smtplib.SMTPAuthenticationError:
                self.send_error_response(500, 'Erreur d\'authentification email. Vérifiez les identifiants.')
            except smtplib.SMTPException as e:
                self.send_error_response(500, f'Erreur SMTP: {str(e)}')
            except Exception as e:
                self.send_error_response(500, f'Erreur lors de l\'envoi: {str(e)}')
                
        except Exception as e:
            print(f"Erreur non gérée: {str(e)}")
            self.send_error_response(500, f'Erreur serveur inattendue: {str(e)}')
    
    def send_success_response(self, data):
        """Envoie une réponse de succès avec CORS"""
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))
    
    def send_error_response(self, code, message):
        """Envoie une réponse d'erreur avec CORS"""
        self.send_response(code)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        error_data = {'error': message, 'status': code}
        self.wfile.write(json.dumps(error_data).encode('utf-8'))