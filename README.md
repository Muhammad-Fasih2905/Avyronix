# Avyronix website (Next.js 14)

Header navigation (no sidebar). Pages: / , /services , /services/[slug] , /portfolio , /about , /contact

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Edit content
- Services, countries, phone: `lib/data.js`
- Portfolio projects: `lib/projects.js`

## Use real screenshots / photos
Put an image in `public/images/` and add `image: "/images/your-file.jpg"` to a project in `lib/projects.js`.
Use 16:10 images (for example 1600x1000). The generated artwork is shown only when `image` is missing.
