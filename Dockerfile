# Utiliser l'image Node.js
FROM node:latest

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de package.json et package-lock.json
COPY package*.json ./

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular pour la production
RUN ng build --configuration=production
# Exposer le port 4300 utilisé par Angular
EXPOSE 4300

# Commande par défaut pour servir les fichiers statiques de l'application Angular
CMD ["npx", "http-server", "./dist"]
