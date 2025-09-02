# /api/contact.py

from http.server import BaseHTTPRequestHandler
import json
import os
import smtplib
import ssl
from email.message import EmailMessage

# --- Notre template d'email de confirmation (inchangé) ---
def create_confirmation_html(name):
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
                .footer {{ background-color: #f5f5f7; padding: 20px; text-align: center; font-size: 12px; color: #888888; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header"><h1>YonYa<span class="logo-labs">Labs</span></h1></div>
                <div class="content">
                    <h2>Bonjour {name},</h2>
                    <p>Nous avons bien reçu votre message et nous vous remercions de l'intérêt que vous portez à nos services.</p>
                    <p>Ceci est une confirmation que votre demande est entre de bonnes mains. Nous nous engageons à revenir vers vous personnellement sous 24 heures.</p>
                    <br>
                    <p>Cordialement,</p><p><strong>L'équipe YonYa Labs</strong></p>
                </div>
                <div class="footer"><p>&copy; 2024 YonYa Labs. Tous droits réservés.</p></div>
            </div>
        </body>
    </html>
    """

class handler(BaseHTTPRequestHandler):
    
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)

        name = data.get('name')
        email_client = data.get('email')
        message_content = data.get('message')

        # Récupération des secrets depuis les variables d'environnement de Vercel
        sender_email = os.environ.get('EMAIL_USER')
        sender_password = os.environ.get('EMAIL_PASSWORD')
        recipient_email = os.environ.get('TO_EMAIL')

        if not all([name, email_client, message_content, sender_email, sender_password, recipient_email]):
            self.send_response(400)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Données manquantes ou configuration serveur incomplète'}).encode())
            return

        try:
            # 1. Email de notification pour nous
            msg_to_us = EmailMessage()
            msg_to_us['Subject'] = f"Nouveau message de {name}"
            msg_to_us['From'] = sender_email
            msg_to_us['To'] = recipient_email
            html_to_us = f'<strong>Nom:</strong> {name}<br><strong>Email:</strong> {email_client}<br><strong>Message:</strong><br>{message_content}'
            msg_to_us.set_content(html_to_us, subtype='html')

            # 2. Email de confirmation pour le client
            msg_to_client = EmailMessage()
            msg_to_client['Subject'] = "Nous avons bien reçu votre message !"
            msg_to_client['From'] = sender_email
            msg_to_client['To'] = email_client
            html_to_client = create_confirmation_html(name)
            msg_to_client.set_content(html_to_client, subtype='html')
            
            # Connexion et envoi des emails
            context = ssl.create_default_context()
            with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
                smtp.login(sender_email, sender_password)
                smtp.send_message(msg_to_us)
                smtp.send_message(msg_to_client)

            # Envoi de la réponse de succès
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'message': 'Emails envoyés avec succès'}).encode())

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())
        return

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({'status': 'API en ligne'}).encode())
        return