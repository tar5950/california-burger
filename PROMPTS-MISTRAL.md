# PACK DE PROMPTS — LE MISTRAL
### Vidéos et images pour les 3 écrans du menuboard

Les **explications sont en français**, les **prompts sont en anglais** : ces modèles
sont entraînés en anglais et obéissent nettement mieux. Copie les blocs tels quels.

---

## 1. LA MÉTHODE — dans cet ordre, sans sauter d'étape

La règle qui gouverne tout : **on verrouille l'image avant d'animer.**
Une image rate ? on la refait pour presque rien. Une vidéo rate ? c'est long et cher.
Et surtout : un personnage animé **depuis du texte** change de tête à chaque clip.
Animé **depuis une image validée**, il reste lui-même.

| Phase | Ce qu'on fait | Outil |
|---|---|---|
| 0 | Relever les couleurs exactes (déjà fait, voir §3) | — |
| 1 | Fiche personnage : 4 vues + expressions | Nano Banana Pro |
| 2 | Les accessoires : burger, tacos, barquette | Nano Banana Pro |
| 3 | **L'image de départ de chaque plan** | Nano Banana Pro |
| 4 | On anime chaque image | Seedance 2.5 |
| 5 | Montage, titres et prix | moi |

**Après la phase 3, aucun modèle ne décide plus à quoi ressemble la mascotte.**
Le modèle vidéo n'a plus qu'un seul travail : faire bouger. C'est tout l'intérêt.

---

## 2. RÉGLAGES — à remettre à CHAQUE génération vidéo

| Réglage | Valeur | Pourquoi |
|---|---|---|
| Modèle | `seedance_2_5` | 2.0 exige `mode:std` pour du 1080p |
| `generate_audio` | **`false`** | **par défaut c'est VRAI** : sans ça tu récupères une musique au hasard |
| `aspect_ratio` | `16:9` | |
| `duration` | `6` à `8` | on coupera au montage |
| `resolution` | `720p` pour chercher, `1080p` pour garder | le 1080p coûte environ le double |
| `draft` | `true` pendant les essais | un brouillon 480p qu'on peut finaliser en pleine résolution sous 7 jours, **sans régénérer** |
| `bitrate_mode` | `high` au final | la vapeur et les dégradés se compressent mal |
| `start_image` + `end_image` | **la même image** | c'est la méthode documentée pour obtenir une boucle |

---

## 3. LES COULEURS DU MISTRAL

Relevées sur la mascotte déjà générée, **avec une correction** : son jaune avait dérivé
vers l'orange, on le ramène à la charte.

| Élément | Valeur à imposer |
|---|---|
| Fond / or | `#FFCC01` ← corrigé (la mascotte était à `#FDBE04`) |
| Rouge braise | `#E63312` |
| Noir | `#0B0A08` |
| Cheveux | `#5A3823` |
| Peau | `#B16A3C` |

---

## 4. BIBLE PERSONNAGE

Deux versions. **Ne mélange pas les deux** : décrire longuement un personnage
alors qu'on fournit déjà son image est la cause n°1 des visages qui partent en vrille,
parce que le texte et l'image se contredisent.

### BIBLE-LONGUE — uniquement en phase 1, quand on crée le personnage

```
Stylized 3D animated-film character render, modern feature-animation look, smooth matte
surfaces, soft global illumination with a gentle rim light. A friendly young cartoon king,
male, reading about 18 years old, cheerful and approachable. Head-to-body ratio about 1:4,
head noticeably large. Rounded soft-square head, full cheeks, small rounded chin, short
button nose. Very large expressive eyes set wide apart, warm dark-brown irises, one large
round white catchlight in the upper-left of each iris, thick smooth dark lash line. Thick
softly rounded dark eyebrows raised in a friendly arch. Wide open joyful grin, upper teeth
as one clean smooth white band with no individual tooth gaps. Warm light-tan skin #B16A3C,
even tone, no skin texture detail. Short dark-brown hair #5A3823, soft rounded clumped
strands, matte finish. A simple golden five-point crown, exactly five identical rounded
triangular points, smooth polished gold #FFCC01, no engraving, no gemstones, no jewels,
no fur trim, sitting level and centred on top of the head with the hairline visible beneath.
Plain matte-black pullover hoodie #0B0A08, relaxed fit, hood down behind the neck, soft
ribbed cuffs, two flat drawstrings, completely plain with no print and no zipper.
Simplified rounded cartoon mitten-style hands, four fingers and a thumb, no fingernails.
Clean soft shading, no black outline. Flat solid golden-yellow background #FFCC01,
perfectly even, no gradient, no vignette, no floor, no shadow on the background.
Constraints: no text, no letters, no watermark, no logo, no frame borders, no extra
characters, no duplicate figures, no photoreal skin, no outline, no gemstones on the crown,
no hood up, no hoodie print, no background objects, no distorted hands, no extra fingers.
```

### BIBLE-COURTE — partout ailleurs, dès qu'on fournit une image de référence

```
The same king mascot character from the reference image — identical face, identical very
large eyes and catchlights, identical wide grin, identical short dark-brown hair, identical
simple golden five-point crown with exactly five points and no gemstones sitting level on
his head, identical plain matte-black hoodie with the hood down and no print, identical
stylized 3D animated-film render style and soft lighting, identical flat solid golden-yellow
background #FFCC01 with no gradient. Do not change the character's design, proportions,
colours or render style. Only the action and pose change.
```

> **La couronne est le point faible.** Les modèles protègent le visage et les cheveux,
> mais pas les accessoires géométriques. Elle va gagner des pointes, se couvrir de pierres
> ou pencher. D'où la répétition de « exactly five points, no gemstones » **partout**.
> C'est le premier défaut à vérifier sur chaque résultat.

---

## 5. PHASE 1 — LA FICHE PERSONNAGE

### 1A — Les 4 vues

> Modèle : Nano Banana Pro · 16:9 · 4K · référence : ta mascotte actuelle

```
Character turnaround model sheet, four consistent full-body views in a row — front view,
three-quarter view, side profile, and back view, evenly spaced, identical original
character on all four views.

[COLLE ICI LA BIBLE-LONGUE]

Format 16:9, 4K. Plain flat background, even spacing, no labels, no captions, no text
anywhere in the image.
```

**Puis découpe cette planche en 4 fichiers séparés.** C'est important : on passe les
vues **une par une** au modèle vidéo, jamais la planche entière. Une planche occupe un
seul emplacement de référence et le modèle risque de la recopier telle quelle, panneaux
compris. Et surtout : **ne jamais écrire « FACE / PROFIL » sur une planche** destinée à
servir de référence — le texte d'une image de référence a tendance à réapparaître dans
le résultat.

### 1B — Les expressions

```
Character expression sheet, one full-body reference on the left and a grid of
head-and-shoulders portraits on the right showing: neutral, wide joyful grin, winking with
one eye, mouth open mid-bite, eyes closed in delight.

[COLLE ICI LA BIBLE-LONGUE]

Format 16:9, 4K. No labels, no captions, no text anywhere in the image.
```

### 1C — Les mains et les accessoires *(l'étape que tout le monde saute)*

C'est là que les mascottes cassent le plus. Une main qui tient quelque chose est
la zone la plus instable de toute l'image.

```
Character prop sheet: the same mascot's hands shown holding objects — one hand holding a
large triple cheeseburger, one hand holding a grilled French tacos, two hands lifting the
lid off a foil tray. Mitten-style simplified cartoon hands.

[COLLE ICI LA BIBLE-LONGUE]

Format 16:9, 4K. No labels, no captions, no text anywhere in the image.
```

---

## 6. PHASE 2 — LES PRODUITS SEULS

Le même burger doit apparaître dans l'image fixe **et** dans le clip. On le fige donc
une bonne fois.

> Modèle : Nano Banana Pro · 16:9 · 4K

```
A single hero [PRODUIT], stylized 3D animated-film render matching a cartoon mascot world,
smooth matte surfaces, soft global illumination with a gentle rim light, appealing
exaggerated proportions. Centred, floating, no table, no plate.
Flat solid golden-yellow background #FFCC01, perfectly even, no gradient, no vignette,
no floor shadow.
Constraints: no text, no letters, no watermark, no logo, no packaging labels, no hands,
no people, no background objects.
Format 16:9, 4K.
```

Remplace `[PRODUIT]` par :
- `triple cheeseburger with melted cheddar sagging over the edge, sesame bun`
- `grilled French tacos cut in half showing fries, meat and melted cheese sauce inside`
- `foil tray of kapsalon: fries topped with doner meat and melted cheese, with a lid`

---

## 7. PHASE 3 — L'IMAGE DE DÉPART DE CHAQUE PLAN

Une image par plan. **Même cadrage partout** (plan taille, personnage centré, regard
caméra) pour que les écrans s'enchaînent proprement.

> Modèle : Nano Banana Pro · 16:9 · 4K
> Références : vue de face + vue 3/4 + le produit concerné

```
Keep the mascot's design, proportions, colours and facial features exactly the same as
Image 1. Change only the pose.

Medium shot, chest up, the mascot centred and facing the camera.
POSE: [VOIR CI-DESSOUS]

[COLLE ICI LA BIBLE-COURTE]

Format 16:9, 4K. Flat solid golden-yellow background #FFCC01, perfectly even, no gradient.
Constraints: no text, no letters, no watermark, no logo, no extra characters, no extra
fingers, no distorted hands.
```

| Plan | `POSE` |
|---|---|
| A | `holding the triple cheeseburger with both hands close to his mouth, mouth slightly open, about to bite` |
| B | `holding the grilled French tacos up beside his face with one hand, both eyes open, grinning` |
| C | `both mitten hands on the lid of a closed foil tray, lid still down, looking at it with anticipation` |
| D | `arms open wide in a welcoming gesture, big joyful grin, nothing in his hands` |

**Avant de passer à la suite : regarde chaque image à 100%.** Compte les pointes de la
couronne. Vérifie les doigts. Si un petit défaut traîne, **corrige-le dans un éditeur
d'image plutôt que de relancer** — relancer change aussi le personnage.

---

## 8. PHASE 4 — L'ANIMATION

### ⚠️ Lis ça avant : pourquoi « il croque dans le burger » est le plan le plus risqué

Les trois spécialistes convergent : **une morsure cumule les trois pires difficultés**
de ces modèles — les mains, la bouche qui se déforme, et un changement d'état
irréversible (le burger entamé ne peut pas revenir intact, donc **ça ne peut pas boucler**).

Ce n'est pas une raison d'y renoncer, mais il faut le traiter autrement :

- **La morsure n'est pas une boucle, c'est un moment.** On la place **au milieu d'un
  montage d'une minute** qui, lui, boucle. Seul le fichier complet doit boucler.
- Prévois **4 à 6 essais** pour en garder un. C'est normal.
- Les autres plans (sourire, clin d'œil, vapeur) sont des **boucles** faciles et sûres.

### Structure d'un prompt d'animation

Toujours : **une seule chose bouge**. Caméra **ou** personnage **ou** nourriture.
Caméra qui tourne + vapeur + fromage + main en même temps = bouillie. C'est la règle
que citent les chefs opérateurs, et c'est le défaut qui trahit immédiatement une vidéo IA.

Et l'action doit **se terminer à l'écran** : le fil de fromage doit casser, la vapeur
doit atteindre le haut du cadre. Une action qui n'aboutit pas fait bon marché.

---

### CLIP A — la morsure *(ne boucle pas · écran « show »)*

> `start_image` = image A · **pas** de `end_image` · 6 s

```
Begin exactly on the provided first frame and bring the still to life.
The mascot takes one single bite of the burger, his cheeks puff slightly, he closes his
eyes in delight and grins with his mouth closed. The melted cheddar stretches and the
strand breaks. One action and one small reaction, nothing more.
Camera locked off on a tripod, fixed framing, the camera never moves — no pan, no tilt,
no zoom, no handheld drift. One continuous take, no cuts, real-time speed.
Flat even lighting, constant throughout. The flat solid golden-yellow background stays
perfectly even with no gradient and no shadow.

[COLLE ICI LA BIBLE-COURTE]

Constraints: no text, no letters, no words, no numbers, no subtitles, no captions,
no watermark, no logo, no signage, no extra characters, no extra fingers, no warped hands,
no audio.
```

### CLIP B — le clin d'œil *(boucle)*

> `start_image` **et** `end_image` = image B · 6 s

```
Begin exactly on the provided first frame and bring the still to life.
The mascot winks once with his right eye and gives a small nod, then returns to his exact
starting pose. Everything else is still.
Camera locked off, fixed framing, the camera never moves. Flat even lighting, constant.
Seamless loop: the final frame matches the first frame exactly; the motion returns to its
starting state gradually and never snaps back.
One continuous take, no cuts, real-time speed.

[COLLE ICI LA BIBLE-COURTE]

Constraints: no text, no letters, no subtitles, no watermark, no logo, no signage,
no extra characters, no extra fingers, no warped hands, no audio.
```

### CLIP C — la vapeur *(boucle la plus facile)*

> `start_image` **et** `end_image` = image C · 6 s

La vapeur n'a pas de forme fixe : l'œil ne peut pas repérer le raccord. C'est la boucle
la plus pardonnante qui existe, à privilégier si les autres posent problème.

```
Begin exactly on the provided first frame and bring the still to life.
The mascot lifts the lid off the tray and thin wisps of steam rise steadily and
continuously, backlit so they glow. His eyes widen with delight. Nothing else moves.
Camera locked off, fixed framing, the camera never moves. Lighting constant throughout.
Seamless loop: the final frame matches the first frame exactly.
One continuous take, no cuts, real-time speed.

[COLLE ICI LA BIBLE-COURTE]

Constraints: no text, no letters, no subtitles, no watermark, no logo, no signage,
no extra characters, no extra fingers, no audio.
```

### CLIP D — l'accueil *(boucle · idéal en ouverture)*

> `start_image` **et** `end_image` = image D · 6 s

```
Begin exactly on the provided first frame and bring the still to life.
The mascot waves once with his right hand, blinks, and lowers his hand back to its exact
starting position. Everything else is still.
Camera locked off, fixed framing, the camera never moves. Flat even lighting, constant.
Seamless loop: the final frame matches the first frame exactly, the arm returning gradually
to its start, never snapping back.
One continuous take, no cuts, real-time speed.

[COLLE ICI LA BIBLE-COURTE]

Constraints: no text, no letters, no subtitles, no watermark, no logo, no signage,
no extra characters, no extra fingers, no warped hands, no audio.
```

---

## 9. VERSION SANS MASCOTTE — produit seul

Même méthode : d'abord l'image, ensuite l'animation. Ici le vocabulaire est celui
des vraies publicités alimentaires.

### Les images de départ

> Nano Banana Pro · 16:9 · 4K

```
Commercial food photography hero shot of [PRODUIT].
Hard three-quarter backlight so the edges glow and the surface reads translucent, plus a
soft fill from the front at one quarter of the key, and negative fill on the shadow side.
Warm key, cool rim. Discrete specular highlights, not a uniform plastic sheen.
Deep focus macro, every crumb sharp. Rich Maillard crust, char localised on the raised
edges only, rendered fat glistening, irregular and asymmetric, colour gradient within each
piece, a few crumbs fallen outside the subject.
Flat solid golden-yellow background #FFCC01, perfectly even, no gradient, no floor.
Constraints: no text, no letters, no watermark, no logo, no packaging labels, no hands,
no people, no grey meat, no flat frontal lighting, no uniform plastic sheen,
no over-saturation, no blue colour cast.
Format 16:9, 4K.
```

`[PRODUIT]` :
- `a triple cheeseburger, melted cheddar sagging over the edge in one continuous sheet with browned blisters, toasted sesame bun`
- `a grilled French tacos cut in half, melted cheese sauce flowing out, crispy fries visible inside`
- `a tray of kapsalon: golden fries topped with sliced doner meat and a continuous sheet of melted cheese`
- `crispy fried chicken wings, craggy blistered crust, colour varying from gold to mahogany within each piece`

### L'animation produit

> `start_image` **et** `end_image` = la même image · 6 s

**Le tour sur lui-même** — boucle parfaite par construction :
```
Begin exactly on the provided first frame and bring the still to life.
The dish rotates exactly one full revolution on a turntable at a slow constant speed,
ending in precisely its starting orientation. The food itself is rigid and unchanged:
preserve plating, portion, colour, gloss and geometry exactly. Nothing is added to or
removed from the dish.
Camera locked off, fixed framing, the camera never moves. Lighting constant throughout.
Seamless loop: the final frame matches the first frame exactly; the rotation returns to its
starting state gradually and never snaps back.
One continuous take, no cuts, real-time speed.
Constraints: no text, no letters, no subtitles, no watermark, no logo, no signage, no hands,
no people, no plate morph, no extra food appearing, no grey meat, no audio.
```

**Le reflet qui balaie** — zéro risque de déformation :
```
Begin exactly on the provided first frame and bring the still to life.
A soft specular highlight travels slowly across the glaze from left to right and back to
its exact starting position, while faint steam drifts above the surface. The dish itself
does not move or change shape: preserve its plating, colour and geometry exactly.
Camera locked off, fixed framing, the camera never moves.
Seamless loop: the final frame matches the first frame exactly.
One continuous take, no cuts, real-time speed.
Constraints: no text, no letters, no subtitles, no watermark, no logo, no hands, no people,
no plate morph, no audio.
```

**Le fil de fromage** — ne boucle pas, à placer dans un montage :
```
Begin exactly on the provided first frame and bring the still to life.
A slice lifts away and the melted cheese stretches into glowing strands that thin, neck and
finally break. Hard backlight makes the strands glow against the background. Only the cheese
moves — the rest of the dish is completely still.
Camera locked off, fixed framing, the camera never moves. One continuous take, no cuts.
Constraints: no text, no letters, no subtitles, no watermark, no logo, no hands, no people,
no plate morph, no extra food appearing, no audio.
```

---

## 10. LES PIÈGES — à connaître avant de lancer

1. **`generate_audio` vaut VRAI par défaut.** Sans `false`, tu récupères une musique
   générée au hasard sur chaque clip.
2. **Pas de « negative prompt », pas de « seed ».** Ces modèles n'ont pas ces réglages.
   Tout ce qu'on veut exclure doit être écrit dans le texte, en fin de prompt.
3. **N'utilise jamais `【 】` `( )` `< >` `{ }` dans un prompt Seedance.** Ce sont des
   commandes : `( )` = musique, `< >` = bruitages, `{ }` = dialogue, et **`【 】` = sous-titres**.
   Une parenthèse égarée peut faire apparaître du texte à l'écran. C'est le piège le moins
   connu et le plus vicieux.
4. **Jamais de texte ni de prix dans une vidéo générée.** L'IA écrit mal et inventerait tes
   tarifs. Les titres et les prix, c'est moi qui les ajoute par-dessus, proprement.
5. **Il se peut qu'on ne puisse pas combiner `start_image` et `image_references`.**
   À tester une fois en brouillon 480p avant de bâtir un plan dessus.
6. **Une seule variable à la fois.** Si tu changes le prompt ET la référence entre deux
   essais, tu ne sauras pas ce qui a marché.
7. **Un bon prompt bat dix essais.** Un prompt précis en 720p vaut mieux que cinq tentatives
   vagues en 1080p.
8. **Prévois 3 à 5 essais par plan.** Ce n'est pas un échec, c'est le taux normal.

---

## 11. SI ÇA RATE — quoi regarder, dans l'ordre

| Symptôme | Cause probable | Correction |
|---|---|---|
| Le personnage change de tête | le prompt redécrit le personnage et contredit l'image | passer à la BIBLE-COURTE, retirer les descriptions en double |
| La couronne a changé | accessoire géométrique non protégé | réécrire « exactly five points, no gemstones », garder la tête de face |
| Ça se déforme, ça « fond » | trop d'actions, ou prompt trop long | une seule action, raccourcir |
| Du texte apparaît | une parenthèse dans le prompt, ou du texte dans l'image de référence | nettoyer les crochets, vérifier la référence |
| Mains ratées, doigts en trop | zone la plus instable | recadrer pour sortir les mains, ou mains « moufles » |
| La boucle fait un à-coup | la dernière image est identique à la première | supprimer la dernière image au montage |
| Ça bouge à peine | début et fin identiques brident le mouvement | choisir un mouvement cyclique (rotation, balayage) |
| La caméra dérive | mouvement non spécifié | ajouter « the camera never moves, no pan, no tilt, no zoom » |
| Viande grise | éclairage à plat | exiger « Maillard crust, char on raised edges, rendered fat glistening » |

---

## 12. CE QU'IL NE FAUT PAS DEMANDER

- **Du texte, des prix, un logo** → ajoutés après, par moi
- **Un produit de marque** → bloqué ou dégradé
- **Des gros plans de mains** → le pire point faible
- **Plusieurs actions dans un clip court** → membres en trop, déformations
- **Plusieurs mouvements de caméra** → tremblements, dérive
- **Des mots vagues** : « beautiful », « cinematic », « dynamic » → inutiles, voire nuisibles
- **Un clip de 15-30 s avec une seule action** → le temps en trop devient du ralenti subi

---

## 13. ET APRÈS

Tu me renvoies les fichiers ici. Je m'occupe de :
- recadrer et optimiser,
- poser les titres et les prix du Mistral par-dessus,
- monter **3 MP4 en boucle**, un par télé,
- vérifier que chacun boucle sans à-coup.

Tu n'auras plus qu'à copier chaque fichier sur une clé USB.
