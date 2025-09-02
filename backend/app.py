# /backend/app.py

import os
import smtplib
import ssl
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Charger les variables d'environnement (pour le test local)
load_dotenv()

# Initialiser l'application Flask et autoriser les requêtes de toutes origines
app = Flask(__name__)
CORS(app)

def create_confirmation_html(name):
    """Génère le HTML pour l'email de confirmation de marque avec un design amélioré."""
    # URL de notre site (à adapter si nécessaire)
    website_url = "https://yonyalabs.com" 
    
    return f"""
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            /* Style de base */
            body {{
                margin: 0;
                padding: 0;
                background-color: #f5f5f7;
                font-family: 'Poppins', Arial, sans-serif;
            }}
            .container {{
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 25px rgba(0,0,0,0.05);
                border: 1px solid #e5e7eb;
            }}
            /* En-tête */
            .header {{
                background-color: #0B132B; /* Notre bleu marine */
                color: #ffffff;
                padding: 30px;
                text-align: center;
            }}
            .header h1 {{
                margin: 0;
                font-size: 28px;
                font-weight: bold;
                letter-spacing: 1px;
            }}
            .header .logo-labs {{
                color: #1CC5B7; /* Notre turquoise */
                font-weight: 500;
            }}
            /* Contenu */
            .content {{
                padding: 35px 40px;
                color: #374151; /* Gris foncé pour le texte */
                line-height: 1.7;
                font-size: 16px;
            }}
            .content h2 {{
                color: #0B132B;
                font-size: 22px;
                margin-top: 0;
            }}
            .content p {{
                margin-bottom: 20px;
            }}
            /* Bouton d'appel à l'action (CTA) */
            .cta-button {{
                display: inline-block;
                background-color: #1CC5B7;
                color: #ffffff;
                padding: 14px 28px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                margin-top: 10px;
                transition: background-color 0.2s;
            }}
            /* Pied de page */
            .footer {{
                text-align: center;
                padding: 25px;
                font-size: 12px;
                color: #9ca3af; /* Gris clair */
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>YonYa<span class="logo-labs">Labs</span></h1>
            </div>
            <div class="content">
                <h2>Bonjour {name},</h2>
                <p>Nous vous confirmons la bonne réception de votre message et nous vous remercions de l'intérêt que vous portez à nos services.</p>
                <p>Votre projet nous enthousiasme déjà ! Un membre de notre équipe reviendra personnellement vers vous sous 24 heures pour en discuter plus en détail.</p>
                <p>En attendant, n'hésitez pas à explorer nos réalisations :</p>
                <a href="{website_url}" class="cta-button" style="color: #ffffff;">Découvrir nos projets</a>
            </div>
        </div>
        <div class="footer">
            <p>&copy; {2025} YonYa Labs. Tous droits réservés.</p>
        </div>
    </body>
    </html>
    """

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    """Gère la soumission du formulaire et envoie les emails."""
    try:
        # Lire les données JSON de la requête
        data = request.get_json()
        if not data:
            return jsonify({'error': 'Requête invalide, JSON manquant'}), 400

        name = data.get('name')
        email_client = data.get('email')
        message_content = data.get('message')

        # Récupérer les variables d'environnement
        sender_email = os.environ.get('EMAIL_USER')
        sender_password = os.environ.get('EMAIL_PASSWORD')
        recipient_email = os.environ.get('TO_EMAIL')

        # Valider les données
        if not all([name, email_client, message_content, sender_email, sender_password, recipient_email]):
            return jsonify({'error': 'Données manquantes ou configuration serveur incomplète'}), 400

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

        return jsonify({'message': 'Emails envoyés avec succès'}), 200

    except Exception as e:
        # En cas d'erreur, l'enregistrer et renvoyer une réponse d'erreur
        print(f"Erreur serveur: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Permet de lancer le serveur en local pour des tests
    app.run(debug=True, port=5001)