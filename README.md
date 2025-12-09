# 🌸 FlorArte — Creative Flower Shop Experience

FlorArte is a modern, interactive web application designed to bring a personalized floral experience to users.  
More than a flower shop, FlorArte encourages creativity by allowing customers to design their own bouquets through a guided DIY builder, browse curated floral products, and contact support directly through the platform.

This project was built as part of the **WDD 330 – Web Frontend Development II** course, following modular JavaScript principles, ES modules, API consumption, UI componentization, and professional development workflows.

---

## 🌟 Features

- **Dynamic Flower Catalog**  
  The catalog loads real floral images from Unsplash and product structures from external APIs.

- **Product Detail View**  
  Displays full details for each bouquet, with options to add items to the shopping cart.

- **DIY Bouquet Builder**  
  A unique feature that guides users step-by-step in creating their own custom bouquet.

- **Shopping Cart (localStorage)**  
  Items are stored persistently using localStorage to survive page reloads.

- **Support Page with EmailJS**  
  Users can send messages directly without the need for a backend.

- **Modular Architecture**  
  Clean separation of logic via ES modules for pages, components, utilities, and core systems.

- **Responsive Design**  
  Works seamlessly across desktop and mobile using CSS layout techniques.

- **Animations & Smooth UI**  
  CSS + JS animations provide a polished and modern user experience.

---

## 🔌 External Data Sources (APIs)

FlorArte uses multiple external APIs to enrich the functionality and fulfill WDD330 requirements:

### • **Unsplash API**  
Provides high-quality flower images for catalog and product displays.

### • **FakeStore API**  
Offers a product structure model and external data for testing fetch requests.

### • **Perenual API**  
Delivers plant information that can enhance product understanding and the DIY bouquet builder.

### • **EmailJS**  
Handles support form submissions without the need for a backend server.

---

## 🧩 Project Architecture (Modular ES6)

FlorArte follows a professional modular architecture:

src/
├── assets/
│ ├── icons/
│ └── images/
│
├── css/
│ ├── base.css
│ ├── layout.css
│ ├── components.css
│ └── pages.css
│
├── data/
│ └── products.json
│
├── modules/
│ ├── components/
│ │ ├── header.mjs
│ │ ├── footer.mjs
│ │ ├── productCard.mjs
│ │ ├── filterPanel.mjs
│ │ └── bouquetPreview.mjs
│ │
│ ├── core/
│ │ ├── api.mjs
│ │ ├── animations.mjs
│ │ ├── storage.mjs
│ │ └── utils/
│ │ ├── dom.mjs
│ │ ├── formatting.mjs
│ │ └── helpers.mjs
│ │
│ ├── pages/
│ │ ├── catalogo.mjs
│ │ ├── producto.mjs
│ │ ├── carrito.mjs
│ │ ├── diyBouquet.mjs
│ │ └── soporte.mjs
│ │
│ └── ui/
│ ├── alerts.mjs
│ ├── loader.mjs
│ └── modal.mjs
│
└── main.js


This structure ensures code maintainability, scalability, and clarity.

---

## 🎨 Brand Identity

### • Color Scheme  
The chosen palette blends soft rose, deep burgundy, sage green, and cream tones to create warmth and professionalism.

### • Typography  
- **Playfair Display** — expressive serif for headings  
- **Montserrat** — clean sans-serif for body text  

---

## 🚀 Installation & Development

To run the project locally using Vite:

```bash
npm install
npm run dev


