---
title: La maison la plus proche 🎄
hasConsole: true
---

Chères développeuses, chers développeurs, Noël approche à grand pas !

On a besoin de vous pour aider le père Noël à optimiser sa livraison de cadeaux, pour se faire il va avoir besoin d'une fonction qui l'aide à trouver la maison la plus proche en fonction de sa position actuelle.

![Santa](https://media.giphy.com/media/POqfuWRy8ts40/giphy.gif)

Il faudra donc écrire une fonction `closestHouse(){:js}` qui en paramètres la position du père noël et une liste de maisons et qui renvoie l'adresse de la maison la plus proche du père Noël.

La position du père noël est représentée par un objet avec une position x et y :

```js
const papaNoel = {x: 10, y: -4};
```

Les maisons quant à elles sont représentées par des objets similaires avec l'adresse en plus :

```js
const maisons = [
    {x: 3, y: 12, address: "32 Avenue des petits chocolats"},
    {x: 8, y: -2, address: "4 Allée des marrons glacés"},
    {x: 20, y: -4.5, address: "5bis Boulevard du vin chaud"},
];
```

Dans l'exemple si dessus, la fonction renvoie `'4 Allée des marrons glacés'{:js}`, mais attention, la fonction sera également testée avec d'autres valeurs !

```js
closestHouse(papaNoel, maisons); // retourne '4 Allée des marrons glacés'
closestHouse({x: 22, y: -4}, maisons); // retourne '5bis Boulevard du vin chaud'
```

> 💡 Pour ce qui est des formules, notre ami Euclide peut certainement t'aider un peu et notre ami Google encore plus !

## Aller plus loin 🚀

Si tu as trouvé une solution qui fonctionne c'est déjà très très bien, mais notre cher père Noël se déplace beaucoup et a beaucoup de maisons à livrer.

Essaye d'optimiser la fonction pour avoir de meilleures performances lorsqu'on l'appelle beaucoup de fois sur un grand nombre de maisons avec différentes positions de père Noël.

Si tu as des pistes voir des solutions pour améliorer l'algo, viens en discuter avec nous [sur Discord](https://discord.gg/4WSd9Qn4eA).
