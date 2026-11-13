# LES 6 FICHIERS POUR LES ÉCRANS

Un fichier par télé. Rien d'autre à installer.

## Mise en place

1. Copie **un seul fichier** à la racine d'une clé USB (une clé par télé).
2. Branche la clé sur la télé, ouvre le lecteur multimédia de la télé.
3. Lance la vidéo et active **Répéter / Lecture en boucle**.
4. Sur la télé, désactive la **mise en veille automatique** et l'**extinction
   après absence de signal** — sinon l'écran s'éteindra tout seul au bout de
   quelques heures.

## Quel fichier sur quelle télé

| Fichier | Écran | Contenu |
|---|---|---|
| `MISTRAL_ECRAN-1.mp4` | gauche | vitrine photo qui défile |
| `MISTRAL_ECRAN-2.mp4` | centre | assiettes et prix |
| `MISTRAL_ECRAN-3.mp4` | droite | bouchées, paninis, boissons |
| `CHICKNBEEF_ECRAN-1.mp4` | gauche | vitrine photo qui défile |
| `CHICKNBEEF_ECRAN-2.mp4` | centre | Beef Burgers |
| `CHICKNBEEF_ECRAN-3.mp4` | droite | Chick'n, wraps et à côté |

## Caractéristiques

- **1920 × 1080**, H.264, 25 images/s, **sans son**
- Écrans 1 : 60 s · écrans 2 et 3 : 27 à 30 s
- Lisibles par la quasi-totalité des téléviseurs depuis une clé USB

## Les boucles

Les fichiers sont faits pour tourner en continu. Cinq des six raccords sont
imperceptibles. Sur `CHICKNBEEF_ECRAN-1`, un très léger changement de
luminosité du halo de fond est mesurable au moment du raccord : invisible
en conditions réelles, mais autant le dire.

## Pour mettre à jour un prix

Ces vidéos sont **figées**. Un changement de prix demande de modifier
`menu-data.js` puis de régénérer les fichiers. Compte deux minutes de
modification et quelques minutes de rendu. Si les prix doivent bouger
souvent, mieux vaut un petit boîtier qui affiche la page web directement :
là, le changement est instantané.

## ⚠️ Avant la mise en service

- **Le Mistral** : prix du tacos, du kapsalon et du burger encore absents.
- **Chick'n Beef** : les prix affichés viennent d'Uber Eats et sont
  **10 à 30 % plus chers qu'au comptoir**. À corriger impérativement.
