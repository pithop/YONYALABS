import os
import smtplib
import ssl
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
# On configure CORS de manière plus sécurisée pour la production à venir
CORS(app, resources={r"/api/*": {"origins": ["https://yonyalabs.com", "http://localhost:3000"]}})

# Notre fonction pour créer le template HTML reste INCHANGÉE
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
            <div class="header">
                <h1>YonYa<span class="logo-labs">Labs</span></h1>
            </div>
            <div class="content">
                <h2>Bonjour {name},</h2>
                <p>Nous avons bien reçu votre message et nous vous remercions de l'intérêt que vous portez à nos services.</p>
                <p>Ceci est une confirmation que votre demande est entre de bonnes mains. Nous nous engageons à revenir vers vous personnellement sous 24 heures.</p>
                <br>
                <p>Cordialement,</p>
                <p><strong>L'équipe YonYa Labs</strong></p>
            </div>
            <div class="footer">
                <p>&copy; 2024 YonYa Labs. Tous droits réservés.</p>
            </div>
        </div>
    </body>
    </html>
    """

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    email_client = data.get('email')
    message_content = data.get('message')

    if not all([name, email_client, message_content]):
        return jsonify({'error': 'Données manquantes'}), 400

    email_user = os.environ.get('EMAIL_USER')
    email_password = os.environ.get('EMAIL_PASSWORD')
    email_receiver = os.environ.get('TO_EMAIL')

    # 1. Préparer l'email qui nous est envoyé (notification)
    msg_to_us = EmailMessage()
    msg_to_us['Subject'] = f"Nouveau message de {name} via yonyalabs.com"
    msg_to_us['From'] = email_user
    msg_to_us['To'] = email_receiver
    html_to_us = f'<strong>Nom:</strong> {name}<br><strong>Email:</strong> {email_client}<br><strong>Message:</strong><br>{message_content.replace(chr(10), "<br>")}'
    msg_to_us.set_content(html_to_us, subtype='html')

    # 2. Préparer l'email de confirmation design pour le client
    msg_to_client = EmailMessage()
    msg_to_client['Subject'] = "Nous avons bien reçu votre message !"
    msg_to_client['From'] = email_user
    msg_to_client['To'] = email_client
    html_to_client = create_confirmation_html(name)
    msg_to_client.set_content(html_to_client, subtype='html')

    # Envoyer les emails via le serveur SMTP de Gmail
    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
            smtp.login(email_user, email_password)
            smtp.send_message(msg_to_us)
            smtp.send_message(msg_to_client)
        return jsonify({'message': 'Emails envoyés avec succès'}), 200
    except Exception as e:
        print(f"Erreur lors de l'envoi de l'email: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)