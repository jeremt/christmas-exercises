# Les exos de Noël 🎁

Bonjour à tous !

Ce repo est un exemple de création d'exercice custom sur le site de [CodePassport](https://codepassport.dev) !

## Comment tester les exercices ?

Il suffit d'aller sur l'url https://codepassport.dev/js/exercises/custom?repo=YOUR_REPO&slug=YOUR_EXERCISE.

Dans cet exemple, `YOUR_REPO` sera `christmas-exercises` et `YOUR_EXERCISE` sera `closest-house`, ce qui donne : [https://codepassport.dev/js/exercises/custom?repo=christmas-exercises&slug=closest-house](https://codepassport.dev/js/exercises/custom?repo=christmas-exercises&slug=closest-house).

## Comment créer des exercices ?

Il suffit de créer un repo sur github avec un dossier `exercises/`, puis un dossier par exercice (ici `closest-house` par exemple).

Chaque exercice contient 4 fichiers :

-   `instructions.md` décris l'exercice au format markdown, attention il est important d'ajouter **title** et **hasConsole** en haut comme dans l'exemple
-   `default.js` contient le code par défaut de l'exercice
-   `solution.js` contient la solution de l'exercice
-   `test.js` est le plus complexe, il contient les tests pour valider l'exercice lorsqu'on clique sur **TESTER**

Enfin, les fichiers `testApi.d.ts` et `testApi.js` permettent d'avoir de l'autocompletion et de la documentation pour faciliter l'écriture des tests.
