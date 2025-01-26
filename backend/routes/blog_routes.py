from sanic import Blueprint
from sanic.response import json
from models import blog
from database import db

blog_bp = Blueprint('blog_routes')

@blog_bp.route("/blog", methods=["POST"])
async def create_blog(request):
    try:
        if not request.json:
            return json({"error": "No JSON data provided"}, status=400)
        blog_data = request.json
        if not all(key in blog_data for key in ["title", "content", "pets_pet_id", "users_users_id"]):
            return json({"error": "Eksik blog bilgileri"}, status=400)
        
        query = blog.insert().values(
            title=blog_data["title"],
            content=blog_data["content"],
            pets_pet_id=blog_data["pets_pet_id"],
            users_users_id=blog_data["users_users_id"]
        )
        await db.execute(query)
        return json({"message": "Blog başarıyla oluşturuldu"}, status=201)
    except Exception as e:
        return json({"error": str(e)}, status=400)
