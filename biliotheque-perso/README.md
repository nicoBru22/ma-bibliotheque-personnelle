# Ma Bibliothèque Personnelle

Application Angular permettant de gérer une collection de livres. 

## Résumé
Ce projet permet de réaliser les opérations **CRUD** (Create, Read, Update, Delete) sur une liste de livres :
* Consulter la liste des ouvrages.
* Ajouter un nouveau livre.
* Modifier les informations d'un livre existant.
* Supprimer un livre de la collection.

## Gestion des données
L'application utilise une stratégie de données hybride selon l'environnement :

* **En développement (Local) :** Utilisation d'un serveur fictif avec `json-server`. Les modifications sont persistantes dans le fichier `public/db.json`.
* **En production (GitHub Pages) :** Utilisation du fichier `db.json` comme ressource statique. 
    > **Note :** En raison de la nature statique de GitHub Pages, seule l'opération de lecture (GET) est disponible en ligne. Les opérations d'écriture (POST, PUT, DELETE) renverront une erreur 405.

## Déploiement
Le projet est hébergé sur GitHub et déployé via GitHub Pages.
**Lien du site :** [https://nicobru22.github.io/ma-bibliotheque-personnelle/]

## Installation et Utilisation (Développement)

Pour lancer le projet localement et profiter de toutes les fonctionnalités (CRUD) :

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/nicoBru22/ma-bibliotheque-personnelle.git]
    cd ma-bibliotheque-personnelle
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancer l'API (JSON-Server) :**
    Ouvrez un terminal et lancez :
    ```bash
    npm run api
    ```
    *L'API sera disponible sur `http://localhost:3000`*

4.  **Lancer l'application Angular :**
    Ouvrez un second terminal et lancez :
    ```bash
    ng serve
    ```
    *L'application sera disponible sur `http://localhost:4200`*