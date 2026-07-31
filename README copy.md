# Safegati Packers and Movers Website

This project is a modern, mobile-friendly website for Safegati Packers and Movers.

## What this project contains
- A polished frontend built with React and Vite
- Reusable page components for the home, about, services, branches, gallery, tracking, and contact pages
- A simple static content structure so anyone can update text and images easily
- No database is required for this version

## Folder guide
- client/src/data/siteContent.js
  - Stores all website text, images, services, branches, and navigation links
- client/src/components
  - Reusable UI pieces such as the header, footer, hero slider, and call-to-action section
- client/src/pages
  - Each page of the website lives here
- client/src/App.jsx
  - Controls the page routing

## How the website works
1. The app starts from the React entry point in the client folder.
2. The App component decides which page to display based on the URL.
3. Page content is read from the siteContent file, so the website is easy to update.
4. The design is built with Tailwind CSS and Framer Motion for animations and responsive layouts.

## How to run locally
From the project root:

```bash
npm install
npm run dev
```

Then open the local Vite address shown in the terminal.

## Notes
- The current version is designed as a static website.
- If you later want a live enquiry form or database storage, that can be added separately.
