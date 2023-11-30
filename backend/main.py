from fastapi import FastAPI,BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from db import connect_to_mongodb, convert_to_json
import pymongo
import json
from fastapi.responses import JSONResponse

app = FastAPI()


@app.get("/")
async def root():
    client, database = connect_to_mongodb()
    collection_name = "nixzaga"
    collection = database[collection_name]
    result = collection.find()
    # print(result)
    data = []
    for doc in result :
        data.append(doc)
    # print(data[0])
    result_json = [convert_to_json(i) for i in data]
    client.close()
    return result_json