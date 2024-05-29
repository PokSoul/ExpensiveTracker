# ExpenseTracker

ExpenseTracker est une application mobile de gestion des dépenses, développée avec React Native et Expo. Cette application permet aux utilisateurs de suivre leurs dépenses quotidiennes, de visualiser des statistiques et d'ajouter de nouvelles dépenses facilement.

## Fonctionnalités

- **Ajouter des dépenses :** Les utilisateurs peuvent ajouter de nouvelles dépenses avec une description et un montant.
- **Visualiser les dépenses :** Affichage des dépenses sous forme de liste.
- **Statistiques :** Voir les statistiques de dépenses (en cours de développement).
- **Gestion des catégories :** Ajouter, modifier et supprimer des catégories de dépenses (en cours de développement).

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14.x ou supérieure)
- [npm](https://www.npmjs.com/) (version 6.x ou supérieure) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/votre-utilisateur/ExpenseTracker.git
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd ExpenseTracker
    ```

3. Installez les dépendances :

    ```bash
    npm install
    ```

    ou avec yarn :

    ```bash
    yarn install
    ```

## Lancer l'application

1. Démarrez le serveur de développement Expo :

    ```bash
    expo start
    ```

2. Suivez les instructions dans le terminal pour ouvrir l'application sur un émulateur/simulateur ou sur un appareil physique avec l'application Expo Go.

## Structure du projet

```plaintext
ExpenseTracker/
├── components/
│   ├── ExpenseItem.js
│   ├── Header.js
│   └── AddButton.js
├── screens/
│   ├── HomeScreen.js
│   ├── AddExpenseScreen.js
│   ├── ExpenseListScreen.js
│   └── StatisticsScreen.js
├── navigation/
│   └── AppNavigator.js
├── services/
│   └── Firebase.js
├── App.js
├── app.json
├── package.json
└── ...
