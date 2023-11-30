import pymongo
from bson import ObjectId  # Import ObjectId from bson
from fastapi.encoders import jsonable_encoder
import json

def connect_to_mongodb():
    # Replace with your MongoDB connection string
    mongo_uri = "mongodb+srv://patthadon:Pattadon55.@expensetracker.tuzmdfx.mongodb.net/?retryWrites=true&w=majority"
    client = pymongo.MongoClient(mongo_uri)

    # Specify the database name
    database_name = "nixzaga" 

    # Access the database
    db = client[database_name]
    # print(data)
    return client, db

def convert_to_json(doc):
    """Recursively convert MongoDB documents to JSON-serializable format."""
    for key, value in doc.items():
        if isinstance(value, ObjectId):
            doc[key] = str(value)
        elif isinstance(value, dict):
            doc[key] = convert_to_json(value)
    return doc