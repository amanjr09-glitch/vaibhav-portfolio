# Vaibhav Pal: portfolio

A single static page in `public/`, hosted on Firebase Hosting.

## Preview locally

```sh
npx serve public
```

## Deploy

```sh
npm i -g firebase-tools
firebase login
firebase use --add      # pick or create your Firebase project
firebase deploy --only hosting
```

## Add a personal moment

Drop a photo in `public/img/moments/` and copy one of the `<figure class="snap">` lines in `public/index.html`.
