# 💸 Paiements directs au restaurateur, sans Stripe ni commission

*Recherche réalisée en septembre 2026. Les tarifs changent : vérifier auprès de chaque fournisseur avant de signer.*

## TL;DR

Aujourd'hui, le site **n'utilise pas Stripe** : la commande part sur WhatsApp et le client paie sur place ou à la livraison. Le plus simple pour garder **0 % de commission** est de rester sur ce modèle et d'ajouter un moyen de paiement à distance gratuit :

1. **Virement instantané SEPA** vers le compte pro du restaurant (gratuit, arrive en moins de 10 secondes).
2. **Wero** (successeur de Paylib, porté par les banques européennes) quand l'offre pro sera disponible pour la banque du restaurant.
3. **Espèces** (toujours gratuites).
4. Pour la carte bancaire, un **TPE fourni par la banque** ou un **SumUp** : il y aura une commission, mais bien plus faible qu'un paiement en ligne.

> ⚠️ Un paiement **par carte** à 0 % de commission n'existe pas. Dès qu'une carte (CB, Visa, Mastercard) est utilisée, l'interchange (plafonné à 0,2 % en débit et 0,3 % en crédit dans l'UE) et les frais de réseau s'appliquent toujours. Le seul moyen d'éviter toute commission est un **virement** (classique, instantané ou via Wero) ou les **espèces**.

---

## 1. Comparatif des solutions

| Solution | Commission restaurateur | Argent reçu | Chez qui arrive l'argent | Adapté au site actuel |
|---|---|---|---|---|
| **Espèces** | 0 € | Immédiat | Caisse | ✅ déjà le cas |
| **Virement instantané SEPA** (IBAN / QR code) | **0 €** (réception en général gratuite sur un compte pro, voir la grille tarifaire de la banque) | < 10 s, 24h/24 | **Compte pro du restaurant, en direct** | ✅ très simple |
| **Wero** (téléphone / QR code) | 0 € entre particuliers ; offre pro France en cours de déploiement (en Belgique, par exemple : 0,06 € par transaction + 18 €/an) | Instantané | Compte bancaire, en direct | 🟡 dès que la banque pro le propose |
| **TPE de la banque** (CB en présence du client) | ~0,4 à 0,8 % en moyenne + location du TPE (à négocier) | J+1 | Compte pro | ✅ à la livraison ou sur place |
| **SumUp TPE** | 1,75 %, ou 0,89 % avec l'abonnement à 19 €/mois | J+1 à J+3 | Compte SumUp, puis compte pro | ✅ |
| **SumUp lien de paiement** | 2,5 % | J+1 à J+3 | Compte SumUp, puis compte pro | 🟡 |
| **Lydia Pro / Sumeria** (QR code) | 1,9 % HT | Rapide | Compte Lydia | 🟡 |
| **PayPal** (QR code) | 2,29 % + 0,09 € | Immédiat, sur le solde PayPal | Compte PayPal | ❌ cher |
| **Stripe** (cartes UE standard) | 1,5 % + 0,25 € (1,9 % + 0,25 € pour les cartes premium) | J+7 au premier paiement, puis J+2 | Compte Stripe, puis compte pro | ❌ ce qu'on veut éviter |

### Simulation : 15 000 € de chiffre d'affaires par mois, panier moyen de 25 € (600 commandes)

| Solution | Coût mensuel estimé |
|---|---|
| Stripe (1,5 % + 0,25 €) | **≈ 375 €** |
| SumUp lien (2,5 %) | ≈ 375 € |
| SumUp TPE (1,75 %) | ≈ 263 € |
| SumUp TPE + abonnement (0,89 % + 19 €) | ≈ 153 € |
| TPE bancaire (~0,6 % + ~25 € de location) | ≈ 115 € |
| **Virement instantané / Wero / espèces** | **≈ 0 €** (hors frais de tenue du compte pro, qui sont payés de toute façon) |

Soit **jusqu'à environ 4 500 € par an** d'économie par rapport à Stripe.

---

## 2. Solution recommandée : virement instantané + QR code

### Pourquoi c'est maintenant viable

- **Règlement européen 2024/886 (Instant Payments)** :
  - depuis le **9 janvier 2025**, les banques de la zone euro doivent pouvoir **recevoir** les virements instantanés, et un virement instantané **ne peut pas coûter plus cher qu'un virement classique** (donc gratuit pour la plupart des particuliers) ;
  - depuis le **9 octobre 2025**, elles doivent aussi pouvoir les **envoyer** ;
  - depuis le **9 octobre 2025**, la **vérification du bénéficiaire (VoP)** est obligatoire : la banque du client vérifie que le nom saisi correspond à l'IBAN. Le client voit donc qu'il paie bien « California Burger », ce qui le rassure.
- L'argent arrive **en moins de 10 secondes, 24h/24 et 7j/7**, directement sur le compte du restaurant. **Aucun intermédiaire.**
- **Pas de rétrofacturation (chargeback)** : un virement est irrévocable, contrairement à la carte.

### Comment le proposer au client

1. **QR code EPC (« GiroCode », norme EPC069-12)** : un QR code standard qui préremplit le virement (nom, IBAN, montant, référence de commande). Il peut être généré **directement dans le navigateur**, sans serveur, donc compatible avec GitHub Pages.
   - Limite : l'adoption par les applis bancaires françaises est **encore partielle** (elle est très répandue en Allemagne, en Autriche et en Belgique). Il faut donc toujours afficher l'IBAN en clair, avec un bouton « Copier », en solution de secours.
2. **IBAN + référence** envoyés dans le message WhatsApp de confirmation, par exemple : « Virement instantané de 24,90 € à California Burger – IBAN FR76… – Référence CB-1234 ».
3. **Wero** : dès que la banque pro du restaurant propose Wero pour les professionnels, afficher le numéro ou le QR Wero. Le client paie depuis son appli bancaire en 2 clics. Le paiement en ligne via Wero arrive dans les sites e-commerce français à l'automne 2026, et le paiement en magasin est prévu pour 2027.

### Points de vigilance

- **Utiliser un compte PRO** au nom commercial exact du restaurant. Avec la vérification VoP, un nom qui ne correspond pas affiche un avertissement au client. Utiliser Wero ou un IBAN **personnel** pour encaisser une activité commerciale est contraire aux conditions de la plupart des banques et mélange les flux perso et pro.
- **Fraude par fausse capture d'écran** : ne jamais valider une commande sur une capture « virement envoyé ». Vérifier l'arrivée des fonds dans l'appli bancaire : avec l'instantané, c'est visible tout de suite.
- **Remboursements** : ils se font à la main, par virement retour.
- **Comptabilité** : la référence de commande dans le libellé du virement permet de rapprocher facilement chaque paiement.
- **Espèces** : en France, refuser des espèces pour un paiement est en principe une contravention (art. R642-3 du Code pénal). On les garde donc comme option.
- **Titres-restaurant** : les titres papier disparaissent le **1er mars 2027**. Les titres dématérialisés (Swile, Edenred, etc.) prennent en général **3 à 5 % de commission**, et on ne peut pas y échapper si on veut les accepter. Surveiller la réforme en cours.

---

## 3. Mise en œuvre possible sur le site (sans serveur, sans Stripe)

Le site est un simple fichier HTML hébergé sur GitHub Pages. Tout peut rester côté navigateur :

1. Ajouter dans `CONFIG` :
   ```js
   payment: {
     beneficiary: 'CALIFORNIA BURGER',   // nom EXACT du compte pro (VoP)
     iban: 'FR76XXXXXXXXXXXXXXXXXXXXXXX',
     bic: 'XXXXXXXX',
     wero: '+33XXXXXXXXX'                 // optionnel
   }
   ```
2. Dans le panier, faire choisir au client un mode de paiement : **Espèces / CB à la livraison / Virement instantané / Wero**.
3. Si le client choisit le virement, générer un **QR code EPC** dans le navigateur, avec une petite librairie QR chargée depuis un CDN (cdnjs ou jsDelivr) :
   ```
   BCD
   002
   1
   SCT
   <BIC>
   CALIFORNIA BURGER
   <IBAN>
   EUR24.90

   CB-1234
   ```
   Afficher aussi l'IBAN en clair avec un bouton « Copier ».
4. Ajouter le mode de paiement choisi et la référence `CB-xxxx` dans le message WhatsApp envoyé par `buildMsg()` (dans `index.html`).
5. Côté restaurateur : vérifier la réception du virement instantané avant de lancer la préparation, ou accepter le paiement à la livraison.

---

## Sources

- [Virements instantanés gratuits depuis le 9 janvier 2025 – INC](https://www.inc-conso.fr/content/banque/virements-instantanes-gratuits-depuis-le-9-janvier-2025)
- [Virements bancaires : du nouveau le 9 octobre – INC](https://www.inc-conso.fr/content/virements-bancaires-du-nouveau-le-9-octobre)
- [Vérification du bénéficiaire obligatoire – La finance pour tous](https://www.lafinancepourtous.com/2025/09/29/virement-la-verification-du-beneficiaire-par-la-banque-devient-obligatoire/)
- [Le virement SEPA instantané – Banque de France](https://www.banque-france.fr/fr/a-votre-service/particuliers/mieux-connaitre-moyens-paiement/le-virement-sepa-instantane)
- [Wero – Professionnels](https://wero-wallet.eu/fr/e-m-commerce) · [Wero – Indépendants](https://wero-wallet.eu/fr/independants) · [Wero – Banque de France](https://www.banque-france.fr/fr/a-votre-service/particuliers/mieux-connaitre-moyens-paiement/wero)
- [Wero en 2026 : ce que les commerçants doivent savoir](https://solutionsboutiques.fr/wero-debarque-dans-le-e-commerce-une-nouvelle-donne-pour-les-commercants)
- [Wero Commerçants : bonne idée ou fausse bonne solution ?](https://www.entrepreneurhero.fr/terminal-de-paiement/avis-wero-pro/)
- [Wero pros – BNP Paribas Fortis (tarif belge)](https://www.bnpparibasfortis.be/fr/public/entrepreneurs/banque-au-quotidien/paiements/systemes-paiement/wero-professionels)
- [QR Code EPC – E-monétique](https://www.e-monetique.com/blog/actualites-2/qr-code-epc-199) · [Norme EPC069-12](https://girocodegenerator.com/en/wissen/epc-standard)
- [Tarifs Stripe](https://stripe.com/pricing) · [Frais Stripe 2026 – Indy](https://www.indy.fr/guide/comptabilite-en-ligne/commerce/stripe-comptabilite/frais-stripe/)
- [Tarifs SumUp – Centre d'aide](https://help.sumup.com/fr-FR/articles/4oI3qHHji2I2S9dyvRfec3-tarifs-frais)
- [Lydia Pro – Moneyvox](https://www.moneyvox.fr/banque-en-ligne/lydia-pro) · [Tarifs Sumeria Pro](https://sumeria.eu/pro/tarifs/)
- [Frais PayPal marchands](https://www.paypal.com/fr/business/paypal-business-fees)
- [Taux de commission carte bancaire 2026 – Legalstart](https://www.legalstart.fr/fiches-pratiques/banque/taux-commission-carte-bancaire-commercant-2023/)
- [Fin des titres-restaurant papier en 2027 – Openeat](https://www.openeat.fr/post/fin-tickets-restaurant-papier) · [Dématérialisation – PayFit](https://payfit.com/fr/fiches-pratiques/dematerialisation-ticket-restaurant/)
