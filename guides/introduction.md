---
title: Introcution
---

Ceci est un guide pour vous guider sur l'écriture un guide.

On va voir les différents types d'éléments qu'on peut utiliser pour formatter le contenu de notre cours.

## Un gros titre

### Mais aussi un plus petit

On peut écrire aussi simplement du texte, mais aussi mettre des choses **en gras** ou même en _italique_. On peut mettre [des liens](https://codepassport.dev) aussi, qui s'ouvriront automatiquement dans un nouvel onglet !

Les fonctionnalités classiques de markdown sont supportées :

-   les
-   listes
-   par exemple

> ou les citations comme tu peux le voir

Et même des images (pour expliquer un concept ou juste pour le fun) :

![](https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif)

> N'oublie pas le alt entre les `[]` si ça fait sens, sinon mieux vaut le laisser vide

## Le code

Notre markdown supporte un système de highlighing assez avancé. On peut spécifier le langage aussi bien dans un paragraphe `<h1>Nice</h1>{:html}`, `console.log("C'est cool !"){:js}` que dans un bloc de code :

```js
if (youUseCode) {
    dontForgetToSpecify('The language'); // for better highlighting
}
```

```css
h1 {
    color: hotpink;
}
```
