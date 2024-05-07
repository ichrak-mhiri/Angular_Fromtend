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

# Exposer le port 4200 utilisé par Angular CLI
EXPOSE 4200

# Commande par défaut pour exécuter ng serve
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
