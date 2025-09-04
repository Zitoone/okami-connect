# API OKAMI Connect

![APIRest](https://img.shields.io/badge/APIRest-pink)


Cette API REST fournit des points d'accès pour gérer les intervenants et leurs données. Elle est construite avec Node.js et Express.

## Fonctionnalités

- Création, lecture, mise à jour et suppression d'intervenants


### Etapes

Aprés avoir cloné le repository, suivre les étapes suivantes:

1. Installer les dépendances:
```bash
npm install
```

2. Configurer les variables d'environnement
Créer un fichier `.env` à la racine du projet
```
PORT=3000
MONGO_URI=mongoDB://localhost:27017/nomdevotrebase
JWT_SECRET=votre_secret_jwt
```

3. Lancer l'API:
```bash
node app.js
```

4. Afin qu'elle se mette à jour automatiquement
```bash
nodemon app.js
```

l'API sera disponible sur `http://localhost:3000`


## Utilisation de l'API

### Récupérer tous les intervenants

**GET** `api/intervenant`
```json
[
  {
    "id": "1",
    "nom": "Astrix",
    "type": "Artiste",
    "email": "astrix@dj.com"
  },
  {
    "id": "2",
    "nom": "Martin",
    "type": "Bénévole",
    "email": "martin@email.com"
  }
]
```

### Créer un intervenant

**POST** `api/intervenants`

```json
{
  "nom": "Martin",
  "type": "Bénévole",
  "email": "martin@email.com"
}
```

## Exécution des tests

<!-- ```bash
npm test
``` -->


