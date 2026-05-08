# 🌴 California Burger × Vice Beach

Site vitrine + commande WhatsApp pour California Burger.
Vibe Miami années 80, néons, palmiers, synthwave.

**Démo TK Digital · Tarik · Lille**

---

## 🚀 Déploiement GitHub Pages

1. Crée un repo `california-burger` sur ton compte GitHub
2. Upload les fichiers :
   - `index.html`
   - `hero-video.mp4` (la vidéo Vice Vibes)
   - `README.md`
   - `.gitignore`
3. **Settings → Pages → Source : main branch → Save**
4. URL live : `https://tar5950.github.io/california-burger/`

---

## ⚙️ Personnalisation rapide

Tout ce qui se modifie est dans le fichier `index.html`, en haut du `<script>`, dans l'objet **`CONFIG`** :

```javascript
const CONFIG = {
  whatsapp: '33768789800',          // ⬅️ Numéro WhatsApp (sans + ni espaces)
  phone: '+33768789800',            // ⬅️ Téléphone affiché
  city: 'Lille',                    // ⬅️ Ville
  hours: '11h - 23h tous les jours',
  deliveryTime: '30 minutes',
  instagram: 'californiaburger',
  tiktok: 'californiaburger',
  facebook: 'californiaburger',
  googleMapsUrl: 'https://maps.google.com/?q=California+Burger+Lille',
  promoCode: 'VICEFIRST',
  promoDiscount: 10
};
```

### 📱 Changer le numéro WhatsApp

Modifie `CONFIG.whatsapp` ET `CONFIG.phone`. Cherche aussi `+33768789800` et `07 68 78 98 00` dans le HTML pour mettre à jour les liens `tel:` et l'affichage.

### 🎬 Remplacer la vidéo hero

Remplace simplement `hero-video.mp4` à la racine du repo. Garde le même nom.

**Conseils vidéo :**
- Compresser avec [HandBrake](https://handbrake.fr/) ou [Compressor.io](https://compressor.io)
- Cible : moins de 10 MB
- Format : MP4, H.264, 720p ou 1080p
- Durée idéale : 10-30 secondes en boucle
- Pas de son nécessaire (la vidéo est en `muted`)

### ⭐ Ajouter de vrais avis Google

Dans `index.html`, cherche `<!-- 8. AVIS -->` et remplace les 3 cards d'avis. Chaque card :

```html
<div class="review-card reveal">
  <div class="review-stars">★★★★★</div>
  <p class="review-text">"Le texte de l'avis ici."</p>
  <div class="review-author">
    <div class="review-avatar">K</div>     <!-- Initiale -->
    <div>
      <div class="review-name">Karim</div>
      <div class="review-date">Avis Google · Il y a 2 semaines</div>
    </div>
  </div>
</div>
```

### 🍔 Ajouter / modifier des produits

Dans `index.html`, cherche `const PRODUCTS = [` et ajoute / modifie une entrée :

```javascript
{
  id: 'mon-burger',           // identifiant unique (sans espaces)
  cat: 'classics',            // catégorie : classics / spicy / veggie / sides / boissons
  name: 'Mon Burger',         // nom affiché
  emoji: '🍔',                // emoji visuel (placeholder image)
  price: 10.90,               // prix en €
  desc: 'La description courte du burger.',
  ings: ['🥓 Bacon', '🧀 Cheddar'],  // pills d'ingrédients
  tag: null                   // null / 'spicy' / 'veggie'
}
```

### 🗺️ Intégrer la vraie carte Google Maps

Dans `index.html`, cherche `<div class="map-placeholder">` et remplace tout le bloc par :

```html
<iframe src="https://www.google.com/maps/embed?pb=...VOTRE_LIEN..."
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

Récupère le lien sur [Google Maps](https://maps.google.com) → ta fiche → Partager → Intégrer une carte → Copier le HTML.

---

## 🎨 Identité visuelle

**Palette California Burger :**
- Noir-violet : `#0a0510`
- Rose néon : `#ff1493`
- Cyan néon : `#00ffff`
- Orange Spicy : `#ff6b35`
- Vert WhatsApp : `#25D366`

**Typographie :**
- Titres : Bebas Neue (Google Fonts)
- Corps : DM Sans (Google Fonts)
- Accents : Press Start 2P (Google Fonts)

---

## ✅ Fonctionnalités

- [x] Hero vidéo plein écran avec overlay néon
- [x] Menu filtré par catégorie (Classics / Spicy / Veggie / Sides / Boissons)
- [x] Panier WhatsApp avec localStorage
- [x] Widget panier flottant (bottom-right)
- [x] Section combos / upsell
- [x] Section "Pourquoi nous"
- [x] Bandeau promo animé (ticker)
- [x] Avis clients (placeholders réalistes)
- [x] Section contact + carte
- [x] CTA final avec animation pulse
- [x] Sticky bar mobile (Appeler + WhatsApp)
- [x] Curseur custom néon (desktop)
- [x] Animations scroll (Intersection Observer)
- [x] 6 breakpoints responsive (380px → 1280px)
- [x] SEO : meta tags, Open Graph, Twitter Card, Schema.org Restaurant
- [x] Accessibilité : aria-labels, contraste WCAG AA, navigation clavier

---

## ⚠️ À savoir

**Le site est un single-file HTML** : tout est dans `index.html` (CSS et JS inclus). Aucune dépendance, aucune build step, aucun framework. Compatible 100% GitHub Pages.

**Les avis et la carte sont des placeholders** : à remplacer par les vraies données client.

**La vidéo `hero-video.mp4`** : si elle est absente, un fallback gradient pink-cyan s'affiche automatiquement. Le site reste joli même sans vidéo.

---

## 📞 Contact

Site by **TK Digital** · Tarik
WhatsApp : 07 68 78 98 00

---

*© 2026 TK Digital · Bienvenue à Vice Beach 🌴*
