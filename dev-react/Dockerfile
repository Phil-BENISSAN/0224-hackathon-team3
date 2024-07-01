# Utiliser une image de base avec Node.js préinstallé
FROM node:latest 

# Définir le répertoire de travail dans le conteneur 
WORKDIR /app 

# Copier les fichiers du projet dans le conteneur 
COPY . . 

# Installer les dépendances du projet 
RUN npm install 

# Construire l'application React pour la production 
RUN npm run build 

# Définir le port sur lequel l'application fonctionnera dans le conteneur 
EXPOSE 5173 

# Commande pour démarrer l'application React 
CMD ["npm", "start"]