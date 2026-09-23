# 💸 Payer du compte du client directement au compte du restaurant, sans intermédiaire

## La réponse directe

**Aujourd'hui, avec Algorio :** client → carte bancaire → **Stripe** (qui prend 1,5 % + 0,25 €) → compte du restaurant.
**Ce qu'on veut :** compte bancaire du client → **virement** → compte bancaire du restaurant.

Le **seul** moyen de paiement qui fait ça, c'est le **virement SEPA instantané**. La carte bancaire, elle, passe **toujours** par des intermédiaires (réseau CB, Visa ou Mastercard, et une société qui encaisse pour le restaurant : Stripe, SumUp ou la banque). Il faut donc **remplacer le paiement par carte de l'app par un paiement par virement instantané**. Il y a trois façons de le faire :

| Façon de faire | Chemin de l'argent | Frais pour le restaurant | Confort pour le client |
|---|---|---|---|
| **1. IBAN + QR code de virement dans l'app** | Banque du client → banque du restaurant. **Aucun intermédiaire.** | **0 €** | Moyen : le client ouvre son appli bancaire, scanne le QR code ou colle l'IBAN, puis valide. Environ 30 secondes. |
| **2. Wero** (appli des banques françaises : BNP, Société Générale, Crédit Agricole, BPCE, Crédit Mutuel, La Banque Postale…) | Banque du client → banque du restaurant. **Aucun intermédiaire** (Wero est un service des banques elles-mêmes). | **0 € ou quelques centimes** (en Belgique : 0,06 € par paiement + 18 €/an) | Bon : scan du QR code, puis validation dans l'appli bancaire. |
| **3. Bouton « Payer par virement » via l'open banking** (Fintecture, Stripe Pay by Bank, etc.) | Banque du client → banque du restaurant. Le prestataire **ne touche jamais l'argent** : il transmet seulement l'ordre de virement à la banque du client. | **Quelques centimes par paiement** (le prix du service technique) | Très bon : un clic, puis validation dans l'appli bancaire, et la commande est confirmée automatiquement. |

**Ce qu'il faut savoir :**
- **Solution 1** : c'est la seule à 0 € et sans aucun tiers. En contrepartie, **l'app ne sait pas toute seule que le client a payé**. Le restaurateur voit le virement arriver dans son appli bancaire en moins de 10 secondes, avec la référence de commande, et valide la commande. On ne valide jamais sur une simple capture d'écran du client.
- **Solution 2** : en septembre 2026, Wero **n'a pas encore d'offre officielle pour les comptes pro en France** (la fonction est souvent désactivée sur les comptes pro). Une offre « Wero for Work » pour indépendants existe, et le paiement en magasin est attendu fin 2026 à 2027. Il faut demander à la banque du restaurant.
- **Solution 3** : c'est un service technique agréé par la Banque de France. Faire soi-même ce bouton sans prestataire demande un **agrément d'établissement de paiement**, donc ce n'est pas réaliste pour un seul restaurant.
- **Algorio doit intégrer l'une de ces solutions dans son app**, car c'est son app. Si Algorio refuse, il faut une app de commande qui le permet, ou le site du restaurant peut le proposer lui-même (le site California Burger peut afficher l'IBAN et le QR code de virement sans serveur).
- Garder aussi la possibilité de **payer au comptoir** en espèces ou par carte sur le terminal de la banque. C'est moins cher que Stripe, mais pas gratuit.
- Recevoir les virements sur le **compte pro** au nom exact du restaurant : la banque du client vérifie que le nom correspond à l'IBAN.

---

# Détail de la recherche : les frais Stripe sur les commandes Algorio

*Recherche réalisée en septembre 2026. Les tarifs changent : vérifier auprès de chaque fournisseur avant de décider.*
*Note : le site algorio.fr et la documentation Stripe n'étaient pas accessibles depuis l'environnement de recherche. Les informations sur Algorio viennent de ses pages publiques indexées par les moteurs de recherche. Les points à confirmer sont listés en section 5.*

## Le problème

Le restaurateur utilise **Algorio** : le client scanne un QR code, commande et paie par CB, Apple Pay ou Google Pay. Algorio annonce **0 % de commission** (abonnement fixe de **69 €/mois**, sans engagement, argent « versé directement sur votre compte »). En revanche, le paiement en ligne passe par **Stripe**, et **c'est Stripe qui prélève des frais sur chaque commande** :

- **1,5 % + 0,25 €** par paiement avec une carte européenne standard ;
- 1,9 % + 0,25 € avec une carte premium ou professionnelle ;
- 3,25 % + 0,25 € avec une carte hors Europe.

### Le vrai coût : les 0,25 € fixes

Pour un snack ou un fast-food, le panier est petit, donc la partie fixe pèse très lourd :

| Panier | Frais Stripe | En % du panier |
|---|---|---|
| 8 € | 0,37 € | **4,6 %** |
| 12 € | 0,43 € | **3,6 %** |
| 20 € | 0,55 € | 2,8 % |
| 30 € | 0,70 € | 2,3 % |

Exemple : **1 000 commandes par mois à 12 €** donnent environ **430 € de frais Stripe par mois**, soit plus de **5 000 € par an**. C'est plus que l'abonnement Algorio lui-même (69 € × 12 = 828 €/an).

---

## ⚠️ Ce qu'il faut savoir avant tout

1. **Un paiement par carte sans aucun frais n'existe pas**, que ce soit avec Stripe, avec la banque ou ailleurs. Il y a toujours au minimum les frais interbancaires (plafonnés à 0,2 % en débit et 0,3 % en crédit) et les frais de réseau. On peut en revanche passer d'environ 3,6 % à **environ 0,5 %** du panier.
2. **Seuls le virement (instantané ou Wero) et les espèces peuvent être vraiment à 0 €.**
3. **Il est interdit de faire payer les frais au client** : pas de supplément pour un paiement par carte (article L.112-12 du Code monétaire et financier, et directive européenne DSP2 depuis 2018). En revanche, fixer un **montant minimum pour payer par carte** est autorisé, à condition de l'afficher clairement.

---

## 1. Les pistes, de la plus simple à la plus radicale

### Piste A : « Commander dans l'app, payer au comptoir » (0 € de frais Stripe)
Le client commande avec le QR code Algorio, mais **paie au comptoir** : en espèces, ou par CB sur le **terminal de paiement de la banque** du restaurant (environ 0,4 à 0,8 %, **sans frais fixe de 0,25 €**).
- ✅ C'est la solution la plus directe : l'argent va chez le restaurateur, et Stripe ne touche rien.
- ❓ **À demander à Algorio** : l'app propose-t-elle une option « payer sur place / au comptoir » ? Peut-on **désactiver le paiement en ligne** ou le rendre **facultatif** ?
- ⚠️ On perd une partie de l'intérêt du QR code (la file d'attente au moment de payer), et il y a un risque de commandes non payées ou non récupérées pour la vente à emporter.

### Piste B : payer par virement instantané dans Stripe (« Pay by Bank »)
Stripe propose en France, avec son partenaire TrueLayer, **Pay by Bank** : le client paie par **virement instantané depuis son appli bancaire**, sans carte. Les frais sont annoncés comme **nettement plus faibles que ceux de la carte**, car on ne passe plus par les réseaux Visa, Mastercard ou CB. Le tarif exact n'est pas publié sur les sources consultées : il faut le vérifier sur la page des tarifs Stripe ou dans le tableau de bord.
- ✅ Il n'y a rien à changer dans l'organisation du restaurant.
- ❓ **À demander à Algorio** : peuvent-ils **activer Pay by Bank** (et Wero plus tard) dans leur intégration Stripe ? Si Algorio utilise le « Payment Element » de Stripe, il suffit souvent de l'activer dans le tableau de bord.
- ⚠️ Le client doit se connecter à sa banque : c'est un peu plus long qu'Apple Pay.

### Piste C : Wero (arrive progressivement)
Wero (successeur de Paylib, porté par les banques européennes) est un **virement instantané par numéro de téléphone ou QR code**. Pour les commerçants, il est annoncé **20 à 60 % moins cher que la carte**. En Belgique, l'offre pro de BNP Paribas Fortis coûte **0,06 € par transaction + 18 €/an**.
- En France : paiement sur les sites e-commerce depuis le printemps et l'automne 2026 (Decathlon, Leclerc, Air France, etc.), et **paiement en magasin prévu en 2027**.
- Stripe prévoit de proposer Wero en France, mais pour l'instant sa documentation ne le rend éligible qu'aux entreprises en Allemagne.
- ❓ À demander à Algorio **et** à la banque pro du restaurant : quand Wero sera-t-il disponible ?

### Piste D : réduire la facture Stripe elle-même
- **Vérifier qui a le compte Stripe.** Si Algorio passe par **Stripe Connect**, la plateforme peut ajouter **ses propres frais** en plus de ceux de Stripe (les « frais d'application »). Il faut vérifier sur le relevé Stripe que le restaurant ne paie **que** 1,5 % + 0,25 €.
- **Négocier avec Stripe** : Stripe propose des tarifs sur mesure, mais surtout à partir de gros volumes (sa formule mensuelle commence vers 500 € HT/mois pour environ 80 000 €/mois de ventes). C'est peu réaliste pour un seul restaurant.
- **Fixer un montant minimum pour payer par carte** dans l'app (par exemple 10 €), si Algorio le permet. C'est légal si c'est affiché.

### Piste E : changer d'outil de commande, ou demander à Algorio un autre prestataire de paiement
Chercher une app de commande qui permet de brancher **le contrat de paiement en ligne de la banque du restaurateur** (par exemple Up2pay pour le Crédit Agricole, Mercanet pour BNP, Monetico pour le CIC et le Crédit Mutuel, Sherlocks pour LCL) ou **SumUp**.
- Paiement en ligne via la banque : souvent **0,5 à 1 %** + un abonnement mensuel, selon ce qui est négocié. Le fixe par paiement est faible ou nul, ce qui est **nettement mieux pour les petits paniers**.
- SumUp lien de paiement : 2,5 %, donc pas intéressant. SumUp terminal : 1,75 %, ou 0,89 % avec l'abonnement à 19 €/mois (utile pour la piste A).
- ❓ À demander à Algorio : acceptent-ils un **autre prestataire de paiement que Stripe** ?

---

## 2. Comparatif sur 1 000 commandes par mois à 12 € (12 000 € de ventes)

| Solution | Frais estimés par mois | Frais par panier de 12 € |
|---|---|---|
| **Stripe carte (situation actuelle)** | **≈ 430 €** | 0,43 € (3,6 %) |
| SumUp lien de paiement (2,5 %) | ≈ 300 € | 0,30 € |
| SumUp terminal au comptoir (1,75 %) | ≈ 210 € | 0,21 € |
| SumUp terminal + abonnement (0,89 % + 19 €) | ≈ 126 € | 0,11 € |
| Paiement en ligne via la banque (~0,8 % + ~20 €/mois, à négocier) | ≈ 116 € | 0,10 € |
| Terminal de la banque au comptoir (~0,5 % + ~25 € de location) | ≈ 85 € | 0,06 € |
| Wero pro (sur la base du tarif belge : 0,06 € + 18 €/an) | ≈ 62 € | 0,06 € |
| Stripe Pay by Bank | ❓ tarif à vérifier (annoncé bien plus bas que la carte) | ❓ |
| **Espèces ou virement direct** | **0 €** | 0 € |

**Économie possible : entre 3 000 et 5 000 € par an** pour ce volume.

---

## 3. Recommandation

1. **Tout de suite** : demander à Algorio (questions en section 5) :
   - d'activer une option **« payer au comptoir »** en plus du paiement en ligne (piste A) ;
   - d'activer **Stripe Pay by Bank** (piste B) ;
   - de confirmer **qu'aucun frais Algorio ne s'ajoute** à ceux de Stripe (piste D).
2. **Au comptoir** : utiliser le **terminal de paiement de la banque**, en négociant le taux (idéalement moins de 0,5 % pour la CB en débit), plutôt qu'un terminal à 1,75 %.
3. **Dès que c'est disponible (fin 2026 à 2027)** : activer **Wero** avec la banque pro ou via Algorio.
4. Si Algorio ne peut rien faire de tout ça, **comparer avec d'autres apps de commande** qui acceptent le paiement au comptoir ou un autre prestataire que Stripe (piste E), en tenant compte du coût total : abonnement + frais de paiement.

---

## 4. Points de vigilance

- **Compte pro** : pour recevoir des virements ou du Wero, utiliser le compte **professionnel** au nom commercial exact. Depuis octobre 2025, la banque du client vérifie que le nom correspond à l'IBAN.
- **Virements** : vérifier l'arrivée des fonds dans l'appli bancaire, jamais sur une simple capture d'écran du client.
- **Titres-restaurant** : ils coûtent **3 à 5 %** de commission (Swile : 3,85 %), quel que soit le mode de paiement. Les titres papier disparaissent le **1er mars 2027**.
- **Espèces** : en principe, on ne peut pas les refuser (article R642-3 du Code pénal).

---

## 5. Questions à poser à Algorio

1. Le compte Stripe est-il **au nom du restaurant** (compte Stripe à lui) ou **géré par Algorio** (Stripe Connect) ?
2. Algorio prélève-t-il **des frais en plus** de ceux de Stripe sur chaque paiement ?
3. Peut-on proposer **« payer au comptoir / sur place »** en plus du paiement en ligne, ou à la place ?
4. Peut-on activer **Pay by Bank** (virement instantané) ? Et **Wero** quand il sera disponible en France ?
5. Peut-on fixer un **montant minimum** pour le paiement par carte ?
6. Peut-on utiliser un **autre prestataire de paiement** (la banque du restaurant, SumUp, etc.) ?
7. Les **titres-restaurant** sont-ils acceptés dans l'app, et avec quels frais ?

---

## Sources

- [Algorio – Lille](https://algorio.fr/restaurant/lille) · [Algorio – Strasbourg](https://algorio.fr/restaurant/strasbourg) · [Algorio – Villeneuve-d'Ascq](https://algorio.fr/restaurant/villeneuve-d-ascq)
- [Tarifs Stripe](https://stripe.com/pricing) · [Frais Stripe 2026 – Indy](https://www.indy.fr/guide/comptabilite-en-ligne/commerce/stripe-comptabilite/frais-stripe/)
- [Stripe Connect – tarifs](https://stripe.com/connect/pricing) · [Stripe Connect – types de paiements](https://docs.stripe.com/connect/charges)
- [Stripe Pay by Bank](https://stripe.com/fr/payment-method/pay-by-bank) · [Annonce TrueLayer × Stripe](https://truelayer.com/newsroom/announcements/stripe-announces-launch-of-pay-by-bank-in-france-and-germany/) · [Ecommerce Nation](https://www.ecommerce-nation.fr/stripe-truelayer-lancent-pay-by-bank-france-allemagne/)
- [Stripe Wero](https://stripe.com/fr/payment-method/wero) · [Documentation Stripe Wero](https://docs.stripe.com/payments/wero) · [Guide Wero France – Stripe](https://stripe.com/resources/more/wero-guide-france)
- [Wero – Professionnels](https://wero-wallet.eu/fr/e-m-commerce) · [Wero pros – BNP Paribas Fortis](https://www.bnpparibasfortis.be/fr/public/entrepreneurs/banque-au-quotidien/paiements/systemes-paiement/wero-professionels) · [Wero en 2026 pour les commerçants](https://solutionsboutiques.fr/wero-debarque-dans-le-e-commerce-une-nouvelle-donne-pour-les-commercants)
- [Interdiction de faire payer un supplément pour la carte – Entrepreneur Hero](https://www.entrepreneurhero.fr/terminal-de-paiement/surcharge-cartes-etrangeres/) · [Elia Pay](https://eliapay.com/politique-de-surcharges-carte-en-france-que-dit-la-loi/)
- [Commissions carte bancaire 2026 – Legalstart](https://www.legalstart.fr/fiches-pratiques/banque/taux-commission-carte-bancaire-commercant-2023/)
- [Tarifs SumUp](https://help.sumup.com/fr-FR/articles/4oI3qHHji2I2S9dyvRfec3-tarifs-frais)
- [Vérification du bénéficiaire – La finance pour tous](https://www.lafinancepourtous.com/2025/09/29/virement-la-verification-du-beneficiaire-par-la-banque-devient-obligatoire/) · [Virement instantané – Banque de France](https://www.banque-france.fr/fr/a-votre-service/particuliers/mieux-connaitre-moyens-paiement/le-virement-sepa-instantane)
- [PISP, initiation de paiement – Komission](https://www.komission.fr/lexique/pisp) · [Initiation de paiement et DSP2 – Amalgame](https://www.amalgame.fr/initiation-de-paiement-guide-entreprises) · [Fintecture – virement immédiat](https://www.fintecture.com/virement-immediat/)
- [Banques compatibles Wero – Moneyradar](https://moneyradar.org/articles-votre-argent/banques-compatibles-wero/) · [Wero Commerçants – Entrepreneur Hero](https://www.entrepreneurhero.fr/terminal-de-paiement/avis-wero-pro/)
- [Commission Swile](https://blog.swile.co/titre-restaurant/commission) · [Fin des titres-restaurant papier – Openeat](https://www.openeat.fr/post/fin-tickets-restaurant-papier)
