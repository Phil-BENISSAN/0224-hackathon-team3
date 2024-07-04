import uvicorn
from fastapi import FastAPI, Response
import pandas as pd

import fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel


app = FastAPI()

class Item(BaseModel):
    title : str
    idea  : str
    
    



# -------------------------------------------------   CONFIGURATION CORS   ------------------------------------------------------

origins = [
    "http://localhost:8080",
    # Vous pouvez ajouter d'autres origines si nécessaire
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
def fn_fast_api():

# -------  INSERER VOTRE CODE ICI -----------------
    
    return "Bienvenue sur l'API Hackathon IncludiFi !!!!"

# ---------------- FIN DE TON CODE ----------------
#__________________________________________________


@app.get('/personnages')
def fn_fast_api():
    df_personnages = pd.read_csv("df_personnages.csv")
    
    dict_from_df = df_personnages.to_dict('records')
# -------  INSERER VOTRE CODE ICI -----------------
    
    return dict_from_df


# ---------------- FIN DE TON CODE ----------------
#__________________________________________________



@app.post("/ideas/")
async def create_item(item: Item):
    return {"item": item}

#------------------------------------------------------


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')

