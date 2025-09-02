from http.server import BaseHTTPRequestHandler
import json
import os
import smtplib
import ssl
from email.message import EmailMessage

def create_confirmation_html(name):
    """Génère le HTML pour l'email de confirmation de marque."""
    return f"""
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                body {{ font-family: 'Poppins', Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f7; }}
                .container {{ max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }}
                .header {{ background-color: #0B132B; color: #ffffff; padding: 30px; text-align: center; }}
                .header h1 {{ margin: 0; font-size: 24px; font-weight: bold; }}
                .header .logo-labs {{ color: #1CC5B7; font-weight: 500; }}
                .content {{ padding: 30px; color: #333333; line-height: 1.6; }}
                .content h2 {{ color: #0B132B; font-size: 20px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header"><h1>YonYa<span class="logo-labs">Labs</span></h1></div>
                <div class="content">
                    <h2>Bonjour {name},</h2>
                    <p>Nous avons bien reçu votre message et nous vous remercions de l'intérêt que vous portez à nos services.</p>
                    <p>Ceci est une confirmation que votre demande est entre de bonnes mains. Nous nous engageons à revenir vers vous personnellement sous 24 heures.</p>
                </div>
            </div>
        </body>
    </html>
    """

class handler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        """Gère les requêtes CORS preflight."""
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        """Gère la soumission du formulaire de contact."""
        try:
            # Lire et parser les données JSON de la requête
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)

            name = data.get('name')
            email_client = data.get('email')
            message_content = data.get('message')

            # Récupérer les variables d'environnement
            sender_email = os.environ.get('EMAIL_USER')
            sender_password = os.environ.get('EMAIL_PASSWORD')
            recipient_email = os.environ.get('TO_EMAIL')

            # Valider les données
            if not all([name, email_client, message_content, sender_email, sender_password, recipient_email]):
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Données manquantes ou configuration serveur incomplète'}).encode())
                return

            # Connexion au serveur SMTP de Gmail
            context = ssl.create_default_context()
            with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
                smtp.login(sender_email, sender_password)
                
                # 1. Préparer l'email de notification pour nous
                msg_to_us = EmailMessage()
                msg_to_us['Subject'] = f"Nouveau message de {name} via yonyalabs.com"
                msg_to_us['From'] = sender_email
                msg_to_us['To'] = recipient_email
                msg_to_us.set_content(f'Nom: {name}\nEmail: {email_client}\n\nMessage:\n{message_content}')
                smtp.send_message(msg_to_us)
                
                # 2. Préparer l'email de confirmation pour le client
                msg_to_client = EmailMessage()
                msg_to_client['Subject'] = "Nous avons bien reçu votre message !"
                msg_to_client['From'] = f"L'équipe YonYa Labs <{sender_email}>"
                msg_to_client['To'] = email_client
                msg_to_client.add_alternative(create_confirmation_html(name), subtype='html')
                smtp.send_message(msg_to_client)

            # Envoyer une réponse de succès
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'message': 'Emails envoyés avec succès'}).encode())

        except Exception as e:
            # Envoyer une réponse d'erreur en cas de problème
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())