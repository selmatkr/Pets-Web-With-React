from sanic import Blueprint
from sanic.response import json
from models import sterilization
from database import db

sterilization_bp = Blueprint('sterilization_routes')

@sterilization_bp.route("/sterilization", methods=["POST"])
async def add_sterilization(request):
    try:
        if not request.json:
            return json({"error": "No JSON data provided"}, status=400)
        steril_data = request.json
        required_fields = [ "animal_type", "animal_age", 
                         "animal_gender", "animal_weight", "vet_name", 
                         "vet_contact", "vet_address"]
        
        if not all(key in steril_data for key in required_fields):
            return json({"error": "Eksik sterilizasyon bilgileri"}, status=400)
        
        query = sterilization.insert().values(**steril_data)
        await db.execute(query)
        return json({"message": "Sterilizasyon kaydı oluşturuldu"}, status=201)
    except Exception as e:
        return json({"error": str(e)}, status=400)

@sterilization_bp.route("/sterilization/<sterilization_id>", methods=["GET"])
async def get_sterilization(request, sterilization_id):
    try:
        query = sterilization.select().where(
            sterilization.c.sterilization_id == int(sterilization_id)
        )
        result = await db.fetch_one(query)
        return json(dict(result))
    except Exception as e:
        return json({"error": str(e)}, status=400)
