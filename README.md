# Les exos de Noël 🎁

Bonjour à tous !

Ce repo est un exemple de création de contenu personnalisé sur le site de [CodePassport](https://codepassport.dev) !

## Initialisation

Pour commencer, [crée un repo sur Github](https://github.new). Ensuite, clone le repo christmas-exercises depuis ton terminal et push le sur ton repo nouvellement créé :

```
git clone git@github.com:jeremt/christmas-exercises.git
cd christmas-exercises
git remote remove origin
git remote add origin git@github.com:your-pseudo/your-repo.git
git push -u origin main
```

> N'oublie pas de remplacer `your-pseudo` et `your-repo` dans la remote !

## Comment tester ?

Il suffit d'aller sur l'url `https://codepassport.dev/custom/exercises/your-exercise?repo=your-repo`.

Dans cet exemple, `your-repo` sera composé de votre pseudo github et du nom du repo, c'est à dire `jeremt/christmas-exercises` et `your-exercise` sera `closest-house`, ce qui donne : https://codepassport.dev/custom/exercises/closest-house?repo=jeremt/christmas-exercises.

Même principe pour les guides et les quiz, on remplace simplement "exercises" par "quiz" ou "guides" dans l'url. Exemples :

-   https://codepassport.dev/custom/guides/introduction?repo=jeremt/christmas-exercises
-   https://codepassport.dev/custom/quiz/test-quiz?repo=jeremt/christmas-exercises

## Créer un guide

Les guides sont créés dans le dossier `guides`. Pour en ajouter un nouveau, il suffit d'ajouter un fichier markdown avec le contenu du cours.

## Créer un quiz

Les quiz sont créés dans le dossier `quiz`. Pour en ajouter un nouveau, il suffit d'ajouter un fichier json qui décrit le contenu du quiz.

> On ajoute `"$schema": "../.codepassport/quiz-schema.json",` au début du JSON pour avoir de l'autocompletion et la documentation

## Créer un exercice

Les exercices sont créés dans le dossier `exercises`. Pour en ajouter un nouveau, il suffit d'ajouter un dossier avec les fichiers suivant :

-   `instructions.md` décris l'exercice au format markdown, attention il est important d'ajouter **title** et **hasConsole** en haut comme dans l'exemple
-   `default.js` contient le code par défaut de l'exercice
-   `solution.js` contient la solution de l'exercice
-   `test.js` est le plus complexe, il contient les tests pour valider l'exercice lorsqu'on clique sur **TESTER**

> On ajoute `/// <reference path = "../../.codepassport/testApi.js" />` au début de test.js pour avoir de l'autocompletion lorsqu'on écrit les tests
