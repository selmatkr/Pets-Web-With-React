from sanic import Blueprint
from sanic.response import json
from models import users
from utils import hash_password, verify_password
from database import db

user_bp = Blueprint('user_routes')

@user_bp.route("/register", methods=["POST"])
async def register(request):
    try:
        if not request.json:
            return json({"error": "No JSON data provided"}, status=400)
        user_data = request.json
        if not all(key in user_data for key in ["user_name", "user_email", "password", "phone_num", "contact_id_name"]):
            return json({"error": "Eksik alanlar var"}, status=400)
        
        hashed_password = hash_password(user_data["password"])
        query = users.insert().values(
            user_name=user_data["user_name"],
            user_email=user_data["user_email"],
            password_hash=hashed_password,
            phone_num=user_data["phone_num"],
            contact_id_name=user_data["contact_id_name"]
        )
        await db.execute(query)
        return json({"message": "Kullanıcı başarıyla kaydedildi"}, status=201)
    except Exception as e:
        return json({"error": str(e)}, status=400)
