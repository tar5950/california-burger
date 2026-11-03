/* ══════════════════════════════════════════════════════════════
   LE MISTRAL — DONNÉES DU MENUBOARD
   ──────────────────────────────────────────────────────────────
   C'EST LE SEUL FICHIER À MODIFIER pour changer prix et produits.
   Ne touche pas à menuboard.html.

   Règles d'écriture des prix :
     7      →  s'affiche  7€        (pas de centimes inutiles)
     10.50  →  s'affiche  10€50
   Toujours un POINT dans le code (10.50), l'affichage met la virgule.

   price: null  →  aucun prix affiché (produit sans tarif défini)
   ══════════════════════════════════════════════════════════════ */

const MENU = {

  /* ─── ÉTABLISSEMENT ─────────────────────────────────────── */
  info: {
    address: '15 Place Jean Jaurès, 59119 Waziers',
    // Horaires réels (0 = dimanche … 6 = samedi)
    hours: {
      1: [['11:30','14:30'], ['18:30','23:30']],
      2: [['11:30','14:30'], ['18:30','23:30']],
      3: [['11:30','14:30'], ['18:30','23:30']],
      4: [['11:30','14:30'], ['18:30','23:30']],
      5: [['11:30','14:30'], ['18:30','23:30']],
      6: [['18:30','23:30']],
      0: [['18:30','23:30']]
    }
  },

  /* ─── « LE PLUS COMMANDÉ » ──────────────────────────────────
     Le seul levier à preuve FORTE (+13 à 20% de demande).
     MAIS il doit être VRAI : c'est une mention trompeuse au sens
     de l'art. L121-2 du Code de la consommation si c'est inventé.

     → Regarde ton top 1 en caisse, écris-le ici, passe à true.
     Tant que c'est false, aucun badge popularité n'est affiché.  */
  mostOrdered: {
    enabled: false,
    item: ''            // ex: 'Assiette Kebab 2 viandes'
  },

  /* ─── FORMULE / MENU ────────────────────────────────────────
     Levier n°1 sur le ticket moyen : ce qu'on présente composé,
     les clients le gardent. Le supplément doit être VISIBLEMENT
     moins cher que la somme des parts (frites 2.50 + boisson 1.30
     = 3.80), d'où un supplément conseillé autour de 2.50.

     → Mets ton vrai supplément et passe enabled à true.         */
  formule: {
    enabled: false,
    supplement: 2.50,
    label: 'EN MENU',
    detail: 'frites + boisson 33cl'
  },

  /* ─── ASSIETTES (panneau fixe) ─────────────────────────────── */
  assiettes: {
    title: 'NOS ASSIETTES',
    note: 'Servies avec frites & salade',
    tiers: [
      { label: '1 VIANDE',  price: 7 },
      { label: '2 VIANDES', price: 9 },
      { label: '3 VIANDES', price: 10.50 }
    ],
    viandes: [
      'Kebab',
      'Chicken mariné',
      'Merguez',
      'Steak',
      'Kefta',
      'Chicken du chef'
    ]
  },

  /* ─── BOUCHÉES / PANINIS / BOISSONS (panneau fixe) ─────────── */
  bouchees: {
    title: 'BOUCHÉES',
    items: [
      { name: 'Chicken Wings', tiers: [['x4',4],  ['x9',7]] },
      { name: 'Nuggets',       tiers: [['x4',2.50],['x6',4],['x9',5.30]] },
      { name: 'Tenders',       tiers: [['x4',3],  ['x6',5],['x9',6]] },
      { name: 'Mozzarella',    tiers: [['x3',2.90],['x5',3.90],['x10',6.90]] }
    ]
  },

  paninis: {
    title: 'PANINIS',
    items: [
      { name: 'Chicken',     price: 4.50 },
      { name: 'Steak',       price: 4 },
      { name: 'Kefta',       price: 4 },
      { name: 'Kebab',       price: 4 },
      { name: '3 Fromages',  price: 3.50 }
    ]
  },

  extras: {
    title: 'BOISSONS & EXTRAS',
    items: [
      { name: 'Frites',          price: 2.50 },
      { name: 'Crok',            price: 1.90 },
      { name: 'Crok + œuf',      price: 2.30 },
      { name: 'Boisson 33cl',    price: 1.30 },
      { name: 'Boisson 1L',      price: 3 },
      { name: 'Desserts',        price: 2.50, note: 'Tarte au Daim · Tiramisu' }
    ]
  },

  /* ─── ÉCRAN VITRINE (photos qui défilent) ──────────────────
     Un seul panneau tourne : les prix de base des 2 autres écrans
     restent visibles en permanence.

     cat   = titre du bandeau, change avec la photo
     img   = fichier dans img/menu/   ·   cdn = secours
     price = null → aucun prix affiché (tarif pas encore défini)  */
  vitrine: {
    slides: [
      { cat:'NOUVEAU', badge:true, name:'Tacos',
        desc:'Le nouveau tacos du Mistral', price:null,
        img:'tacos.jpg',
        cdn:'https://d8j0ntlcm91z4.cloudfront.net/user_3GY95lOglCr6LSucDNRs5uhWnc8/hf_20260922_165614_a87349de-4791-4096-822a-acc0320fa279.png' },

      { cat:'NOUVEAU', badge:true, name:'Kapsalon',
        desc:'Frites · viande · cheddar fondu · salade', price:null,
        img:'kapsalon.jpg',
        cdn:'https://d8j0ntlcm91z4.cloudfront.net/user_3GY95lOglCr6LSucDNRs5uhWnc8/hf_20260922_165651_d6d65a8e-71c1-4657-aadd-378bb3955a5a.png' },

      { cat:'NOS ASSIETTES', name:'Assiette Kebab',
        desc:'Servie avec frites & salade · dès 7€', price:null,
        img:'assiette.jpg',
        cdn:'https://d8j0ntlcm91z4.cloudfront.net/user_3GY95lOglCr6LSucDNRs5uhWnc8/hf_20260922_165651_1946de1e-48a0-4ed9-b9e9-748d4c445ce9.png' },

      { cat:'À EMPORTER', name:'Box Kebab',
        desc:'Viande kebab + frites', price:4,
        img:'box-kebab.jpg',
        cdn:'https://d8j0ntlcm91z4.cloudfront.net/user_3GY95lOglCr6LSucDNRs5uhWnc8/hf_20260922_165614_53e86d5a-4ebd-4684-ac47-0d57ba2f5b08.png' },

      { cat:'POUR LES ENFANTS', name:'Menu Kid',
        desc:'Hamburger ou nuggets + frites + boisson + compote', price:4.90,
        img:'menu-kid.jpg',
        cdn:'https://d8j0ntlcm91z4.cloudfront.net/user_3GY95lOglCr6LSucDNRs5uhWnc8/hf_20260922_165651_3e08127f-82ec-4ef6-b9d0-87844f2c6492.png' }
    ]
  },

  /* ─── RÉGLAGES D'AFFICHAGE ──────────────────────────────────
     dwell : durée d'une slide en ms.
     10-15 s recommandé pour une file d'attente (une file est la
     position la plus longue en affichage dynamique).
     Test : lis la slide à voix haute en français — si tu finis
     avant qu'elle parte, c'est bon.                             */
  display: {
    dwell: 12000,
    stagger: 4000      // décalage entre les 2 panneaux rotatifs
  }
};
