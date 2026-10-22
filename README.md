# Vaibhav Pal: portfolio

A one-page Next.js site, exported as static files and hosted on Firebase Hosting.

## Develop

```sh
npm install
npm run dev        # http://localhost:3000
```

## Deploy

```sh
npm run build      # writes the static site to out/
npm i -g firebase-tools
firebase login
firebase use --add # pick or create your Firebase project (first time only)
firebase deploy --only hosting
```

## Edit content

- Contact links and personal moments: `lib/content.ts`
- Everything else on the page: `app/page.tsx`
- To add a moment, drop the photo in `public/img/moments/` and add one line to `moments` in `lib/content.ts`.
