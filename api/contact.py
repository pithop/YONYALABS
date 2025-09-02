import json
import os
import smtplib
import ssl
from email.message import EmailMessage

def create_confirmation_html(name):
    """Génère le HTML pour l'email de confirmation"""
    return f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #2c3e50;">Bonjour {name},</h2>
                <p>Nous avons bien reçu votre message et nous vous remercions de votre confiance.</p>
                <p>Notre équipe reviendra vers vous dans les plus brefs délais.</p>
                <br>
                <p>Cordialement,<br>L'équipe YonyaLabs</p>
            </div>
        </body>
    </html>
    """

def handler(request, response):
    """
    Fonction handler pour Vercel Serverless Functions
    request: objet de requête Vercel
    response: objet de réponse Vercel
    """
    
    # Configurer CORS
    response.headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }
    
    # Gérer les requêtes OPTIONS (preflight CORS)
    if request.method == 'OPTIONS':
        response.status_code = 200
        return response.send('')
    
    # Vérifier que c'est bien une requête POST
    if request.method != 'POST':
        response.status_code = 405
        return response.send(json.dumps({'error': 'Method not allowed'}))
    
    try:
        # Parser le body de la requête
        data = request.body
        
        # Extraire les données
        name = data.get('name')
        email_client = data.get('email')
        message_content = data.get('message')
        
        # Récupérer les variables d'environnement
        sender_email = os.environ.get('EMAIL_USER')
        sender_password = os.environ.get('EMAIL_PASSWORD')
        recipient_email = os.environ.get('TO_EMAIL')
        
        # Vérifier que toutes les données nécessaires sont présentes
        if not all([name, email_client, message_content, sender_email, sender_password, recipient_email]):
            response.status_code = 400
            return response.send(json.dumps({
                'error': 'Données manquantes ou variables d\'environnement non configurées'
            }))
        
        # Configurer le contexte SSL
        context = ssl.create_default_context()
        
        # Se connecter au serveur SMTP de Gmail
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
            smtp.login(sender_email, sender_password)
            
            # 1. Email de notification pour vous
            notification_msg = EmailMessage()
            notification_msg['Subject'] = f'Nouveau message de {name}'
            notification_msg['From'] = sender_email
            notification_msg['To'] = recipient_email
            notification_msg.set_content(f"""
Nouveau message reçu via le formulaire de contact:

Nom: {name}
Email: {email_client}
Message:
{message_content}
            """)
            smtp.send_message(notification_msg)
            
            # 2. Email de confirmation pour le client
            confirmation_msg = EmailMessage()
            confirmation_msg['Subject'] = 'Confirmation de réception - YonyaLabs'
            confirmation_msg['From'] = sender_email
            confirmation_msg['To'] = email_client
            confirmation_msg.add_alternative(create_confirmation_html(name), subtype='html')
            smtp.send_message(confirmation_msg)
        
        # Succès
        response.status_code = 200
        return response.send(json.dumps({
            'success': True,
            'message': 'Emails envoyés avec succès'
        }))
        
    except Exception as e:
        print(f"Erreur dans la fonction contact: {str(e)}")
        response.status_code = 500
        return response.send(json.dumps({
            'error': f'Erreur serveur: {str(e)}'
        }))