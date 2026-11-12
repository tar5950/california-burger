/* ══════════════════════════════════════════════════════════════
   CHICK'N BEEF — DONNÉES DU MENUBOARD
   ──────────────────────────────────────────────────────────────
   SEUL FICHIER À MODIFIER. Ne touche pas à menuboard.html.

   Prix : toujours un POINT dans le code (9.90), l'affichage met
   la virgule et supprime les centimes inutiles (9.90 → 9€90, 9 → 9€).
   price: null  →  aucun prix affiché.
   ══════════════════════════════════════════════════════════════ */

const MENU = {

  info: {
    nom: "CHICK'N BEEF",
    baseline: 'BURGERS HALAL · CUITS À LA FLAMME',
    accroche: 'CHOISIS TON KIFF',
    villes: 'LILLE · ROUBAIX · DOUAI · CAMBRAI',
    halal: '100% HALAL CERTIFIÉ',
    // Horaires à confirmer avec le client (0 = dimanche … 6 = samedi)
    horaires: {
      0:[['11:00','23:00']], 1:[['11:00','23:00']], 2:[['11:00','23:00']],
      3:[['11:00','23:00']], 4:[['11:00','23:00']], 5:[['11:00','00:00']],
      6:[['11:00','00:00']]
    }
  },

  /* ─── « LE PLUS COMMANDÉ » ───────────────────────────────────
     Le seul levier à preuve forte (+13 à 20% de demande mesurés).
     MAIS il doit être VRAI : une fausse allégation de popularité
     est trompeuse au sens de l'art. L121-2 du Code de la conso.
     → demander le top 1 caisse au client, puis passer à true.     */
  plusCommande: { actif: false, produit: '' },

  /* ⚠️ ORIGINE DES PRIX
     Relevés sur Uber Eats (nov. 2026), 4 établissements : Porte des Postes,
     Roubaix, Douai, Cambrai. CE SONT DES PRIX DE LIVRAISON : ils sont
     normalement 10 à 30% PLUS CHERS qu'au comptoir, commission plateforme
     incluse. À FAIRE CORRIGER PAR LE CLIENT avant toute mise en service.
     Certains prix varient d'un établissement à l'autre.
     Deliveroo et Just Eat ont refusé l'accès (erreur 403).

     prixSeul = à la carte · prixMenu = en menu (frites + boisson)
     Afficher les deux fait monter le ticket moyen : ce qu'on présente
     composé, les clients le gardent.                                    */

  /* ═══ ÉCRAN 1 — VITRINE (photos qui défilent) ═══ */
  vitrine: {
    slides: [
      { cat:'BEEF BURGERS',    nom:"Bign'Beef",      desc:'Le classique, cuit à la flamme',
        prixSeul:8.90,  prixMenu:11.90, img:'beef-burgers.jpg' },
      { cat:'BEEF BURGERS',    nom:'Maxi Beef',      desc:'Pour les grosses faims',
        prixSeul:12.90, prixMenu:15.90, img:'burgers-gamme.jpg' },
      { cat:"CHICK'N",         nom:"Chick'n Filet",  desc:'Poulet croustillant, filet entier',
        prixSeul:7.90,  prixMenu:10.90, img:'chickn-filet.jpg' },
      { cat:'WRAPS',           nom:"Wrap Chick'n",   desc:'La street food roulée',
        prixSeul:null,  prixMenu:12.90, img:'wraps.jpg' },
      { cat:'POULET & BUCKETS',nom:'Tenders x15',    desc:'À partager entre amis',
        prixSeul:23.90, prixMenu:27.90, img:'tenders-nuggets.jpg' }
    ]
  },

  /* ═══ ÉCRAN 2 — BEEF BURGERS (fixe) ═══ */
  carte: {
    titre: 'BEEF BURGERS',
    note: 'Halal certifié · cuit à la flamme',
    gammes: [
      { nom:"Bign'Beef",         prixSeul:8.90,  prixMenu:11.90 },
      { nom:'Royal Beef Cheese', prixSeul:10.90, prixMenu:12.90 },
      { nom:'Maxi Beef',         prixSeul:12.90, prixMenu:15.90 },
      { nom:'Woopper',           prixSeul:null,  prixMenu:11.90 },
      { nom:'Double Beef Bacon', prixSeul:null,  prixMenu:14.90 },
      { nom:'Mega Beef',         prixSeul:null,  prixMenu:19.00 }
    ]
  },

  /* ═══ ÉCRAN 3 — CHICK'N, WRAPS & À CÔTÉ (fixe) ═══ */
  cotes: {
    titre: "CHICK'N · WRAPS · À CÔTÉ",
    petitesFaims: {
      titre:"CHICK'N & WRAPS",
      items:[
        { nom:"Chick'n Filet",  prixSeul:7.90,  prixMenu:10.90 },
        { nom:"Chick'n Roll",   prixSeul:9.90,  prixMenu:12.90 },
        { nom:"Chick'n Beef",   prixSeul:12.00, prixMenu:15.00 },
        { nom:"Naan Chick'n",   prixSeul:null,  prixMenu:11.90 },
        { nom:'Wrap Chèvre Miel',prixSeul:null, prixMenu:12.90 }
      ]
    },
    autres: {
      titre:'À CÔTÉ & DOUCEURS',
      items:[
        { nom:"Wing's x5",      prixSeul:7.90,  prixMenu:null },
        { nom:'Chili Cheese x5',prixSeul:4.90,  prixMenu:null },
        { nom:'Mozza Sticks x5',prixSeul:4.90,  prixMenu:null },
        { nom:'Grande Frite',   prixSeul:3.90,  prixMenu:null },
        { nom:'Tiramisu',       prixSeul:4.90,  prixMenu:null }
      ]
    },
    photoFond: 'petites-faims.jpg'
  },

  affichage: { duree: 12000, decalage: 4000 }
};
