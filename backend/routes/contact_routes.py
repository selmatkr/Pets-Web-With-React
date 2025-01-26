from sanic import Blueprint
from sanic.response import json
from models import contact
from database import db

contact_bp = Blueprint('contact_routes')

@contact_bp.route("/contact", methods=["POST"])
async def add_contact(request):
    try:
        if not request.json:
            return json({"error": "No JSON data provided"}, status=400)
        contact_data = request.json
        if not all(key in contact_data for key in ["id_name", "email", "phone_num"]):
            return json({"error": "Eksik iletişim bilgileri"}, status=400)
        
        query = contact.insert().values(**contact_data)
        await db.execute(query)
        return json({"message": "İletişim bilgileri eklendi"}, status=201)
    except Exception as e:
        return json({"error": str(e)}, status=400)

@contact_bp.route("/contact/<id_name>", methods=["GET"])
async def get_contact(request, id_name):
    try:
        query = contact.select().where(contact.c.id_name == id_name)
        result = await db.fetch_one(query)
        return json(dict(result))
    except Exception as e:
        return json({"error": str(e)}, status=400)
