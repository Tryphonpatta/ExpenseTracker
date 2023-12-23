from fastapi import FastAPI,BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from db import connect_to_mongodb, convert_to_json
import pymongo
import json
from fastapi.responses import JSONResponse
from pydantic import BaseModel


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Expense(BaseModel):
    date : str
    food : int
    travel : int
    etc : int
    

@app.get("/income/{date}")
async def root():
    client, database = connect_to_mongodb()
    collection_name = "month_income"
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

@app.get("/expense/{month}")
async def root(month):
    client, database = connect_to_mongodb()
    collection_name = "nixzaga"
    collection = database[collection_name]
    result = collection.find({"date": {"$regex" :month + '$'}})
    result_json = [convert_to_json(i) for i in result]
    client.close()
    return result_json

@app.get("/getexpense/{date}")
async def root(date):
    client, database = connect_to_mongodb()
    collection_name = "nixzaga"
    collection = database[collection_name]
    result = collection.find({"date":date})
    # print(result)
    data = []
    for doc in result :
        data.append(doc)
    # print(data[0])
    result_json = [convert_to_json(i) for i in data]
    client.close()
    if not result_json:
        temp = Expense(date=date,food=0,travel=0,etc=0)
        temp_json = json.dumps(temp.json(), indent=2)
        await post_expense(temp)
        return temp_json
    return result_json[0]

@app.post("/addexpense")
async def post_expense(expense: Expense):
    client, database = connect_to_mongodb()
    collection_name = "nixzaga"
    collection = database[collection_name]
    result = collection.insert_one(expense.__dict__)
    return JSONResponse(content={"message": "Expense added successfully"})

@app.post("/fixexpense/")
async def post_fixexpense(expense: Expense):
    client, database = connect_to_mongodb()
    collection_name = "nixzaga"
    collection = database[collection_name]
    update_data_dict = expense.dict(exclude_unset=True)
    
    result = collection.update_one({"date": expense.date},{"$set" : update_data_dict})
    print(update_data_dict)
    return JSONResponse(content={"message": "Expense added successfully"})