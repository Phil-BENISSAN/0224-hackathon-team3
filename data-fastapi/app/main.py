import uvicorn
from fastapi import FastAPI, Response
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    title : str
    idea  : str
     
store_ideas = []

df = pd.read_csv("app/ideas_box.csv")
store_ideas = df.to_dict('records')
  
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

# Root 
@app.get('/')
def home():

# -------  INSERER VOTRE CODE ICI -----------------
    
    return "Bienvenue sur l'API Hackathon IncludiFi !!!!"

# ---------------- FIN DE TON CODE ----------------
#__________________________________________________

# Pour recuperation des donnees sur les personnes celebres
@app.get('/personnages')

def get_personnages():
    
    df_personnages = pd.read_csv("app/df_personnes_celebres.csv")

    dict_from_df = df_personnages.to_dict('records')
    
# -------  INSERER VOTRE CODE ICI -----------------
    
    return dict_from_df


# ---------------- FIN DE TON CODE ----------------
#__________________________________________________

# Pour remplir la boite à idees
@app.post("/ideas")
async def create_item(item: Item):
    global store_ideas    
    # df = pd.read_csv("app/ideas_box.csv")
    
    # store_ideas = df.to_dict('records')
    
    store_ideas.append(item)    
        
    # df_out = pd.DataFrame(store_ideas)
    # df.to_csv("app/ideas_box.cvs", index=False)
    
    # return store_ideas    
    return store_ideas

#------------------------------------------------------

# Pour recuperer le contenu de la boite à idees
@app.get("/ideas")
async def give_item():
    global store_ideas 
    # df = pd.read_csv("app/ideas_box.csv")
    # store_ideas = df.to_dict('records')
        
    return store_ideas

#------------------------------------------------------



# Lancement de l application
if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')

