import uvicorn
from fastapi import FastAPI
import pandas as pd
app = FastAPI()

@app.get('/')
def fn_fast_api():

# -------  INSERER VOTRE CODE ICI -----------------
    
    return "Bienvenue sur l'API Hackathon IncludiFi"


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

if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')