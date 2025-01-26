from sanic import Blueprint
from sanic.response import json
from models import donations
from database import db

donation_bp = Blueprint('donation_routes')

@donation_bp.route('/donation', methods=["POST"])

async def add_donation(request):
    try:
        if not request.json:
            return json({"error":"No JSON data provided"}, status=400)
        
        donations_data = request.json
       
        if not all(key in donations_data for key in ["pet_id","user_id","amount","notes"]):
            return json({'error': 'Missing donation information'}, status=400)
            
        query = donations.insert().values(**donations_data)
        await db.execute(query)
        return json ({"message": "Bağışınız başarılı bir şekilde eklendi."}, status=201)    
          
    except Exception as e:
        return json({"error": str(e)}, status=400)   

@donation_bp.route("/donation/<pet_id>", methods=["GET"])
async def get_donations(request ,pet_id):
     
    try:
        query= donations.select().where(donations.c.pet_id == pet_id)
        result = await db.fetch_one(query)
        return json (dict(result))
    
    except Exception as e:
        return json({"error": str(e)}, status=400)


@donation_bp.route("/donation/user/<user_id>", methods=["GET"])
async def get_user_donations(request, user_id):
    try:

        query= donations.select().where(donations.c.user_id == user_id)
        result = await db.fetch_one(query)
        return json (dict(result))
    
    except Exception as e:
        return json ({"error": str(e)}, status=400)
     
    


