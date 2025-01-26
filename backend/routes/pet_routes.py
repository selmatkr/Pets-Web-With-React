from sanic import Blueprint
from sanic.response import json
from models import pets
from database import db

pet_bp = Blueprint('pet_routes')

@pet_bp.route("/pets", methods=["POST"])
async def add_pet(request):
    try:
        if not request.json:
            return json({"error": "No JSON data provided"}, status=400)
        pet_data = request.json
        if not all(key in pet_data for key in ["pet_name", "pet_age", "pet_gender", "pet_weight", "pet_description"]):
            return json({"error": "Eksik pet bilgileri"}, status=400)
        
        query = pets.insert().values(
            pet_name=pet_data["pet_name"],
            pet_age=pet_data["pet_age"],
            pet_gender=pet_data["pet_gender"],
            pet_weight=pet_data["pet_weight"],
            pet_description=pet_data["pet_description"]
        )
        await db.execute(query)
        return json({"message": "Pet başarıyla eklendi"}, status=201)
    except Exception as e:
        return json({"error": str(e)}, status=400)

@pet_bp.route("/pets/<pet_id>", methods=["GET"])
async def get_pet(request, pet_id):
    try:
        query = pets.select().where(pets.c.pet_id == int(pet_id))
        result = await db.fetch_one(query)
        return json(dict(result))
    except Exception as e:
        return json({"error": str(e)}, status=400)

@pet_bp.route("/pets/<pet_id>", methods=["PUT"])
async def update_pet(request, pet_id):
    try:
        if not request.json:
            return json({"error": "No JSON data provided"}, status=400)
        pet_data = request.json
        query = pets.update().where(pets.c.pet_id == int(pet_id)).values(**pet_data)
        await db.execute(query)
        return json({"message": "Pet bilgileri güncellendi"})
    except Exception as e:
        return json({"error": str(e)}, status=400)
