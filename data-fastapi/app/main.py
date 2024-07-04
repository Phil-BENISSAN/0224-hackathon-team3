import uvicorn
from fastapi import FastAPI, Response
import pandas as pd
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    title : str
    idea  : str
    
    
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
    #