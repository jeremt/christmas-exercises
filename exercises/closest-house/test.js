/// <reference path = "../../testApi.js" />

__codePassport.testFunc(
    closestHouse,
    [
        {x: 10, y: -4},
        [
            {x: 3, y: 12, address: "32 Avenue des petits chocolats"},
            {x: 8, y: -2, address: "4 Allée des marrons glacés"},
            {x: 20, y: -4.5, address: "5bis Boulevard du vin chaud"},
        ],
    ],
    "4 Allée des marrons glacés"
);
__codePassport.testFunc(
    closestHouse,
    [
        {x: 22, y: -4},
        [
            {x: 3, y: 12, address: "32 Avenue des petits chocolats"},
            {x: 8, y: -2, address: "4 Allée des marrons glacés"},
            {x: 20, y: -4.5, address: "5bis Boulevard du vin chaud"},
        ],
    ],
    "5bis Boulevard du vin chaud"
);

__codePassport.testFunc(
    closestHouse,
    [
        {x: 0, y: 0},
        [
            {x: 7, y: -22, address: "24 Rue des sapins de Nöel"},
            {x: -6, y: -7, address: "4 Rue du petit lutin"},
            {x: 50, y: -50, address: "64 Impasse de la bûche de Noël"},
            {x: 0, y: 0, address: "12 Avenue des petits flocons"},
        ],
    ],
    "12 Avenue des petits flocons"
);

__codePassport.testFunc(
    closestHouse,
    [
        {x: 44, y: -10},
        [
            {x: 7, y: -22, address: "24 Rue des sapins de Nöel"},
            {x: -6, y: -7, address: "4 Rue du petit lutin"},
            {x: 50, y: -50, address: "64 Impasse de la bûche de Noël"},
            {x: 0, y: 0, address: "12 Avenue des petits flocons"},
        ],
    ],
    "24 Rue des sapins de Nöel"
);

__codePassport.testFunc(
    closestHouse,
    [
        {x: 12.5, y: -15.3},
        [
            {x: 7, y: -22, address: "24 Rue des sapins de Nöel"},
            {x: -6, y: -7, address: "4 Rue du petit lutin"},
            {x: 50, y: -50, address: "64 Impasse de la bûche de Noël"},
            {x: 0, y: 0, address: "12 Avenue des petits flocons"},
        ],
    ],
    "24 Rue des sapins de Nöel"
);
