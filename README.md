# Surya & Pavithraa – Wedding Invitation (React + Vite)

## Run locally
    npm install
    npm run dev

## Add your song
Put your music file at `public/song.mp3` (keep the name). It starts when guests tap the envelope; a button at the bottom-right pauses it.
Use music you have the rights to use (e.g. royalty-free) and keep it under ~5 MB.

## Edit details
All text/schedule/contacts are in `src/data.js` and `src/Invitation.jsx`. Replace the picture at `public/couple.jpg`.

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose "Add New → Project", import the repo. Framework is detected as Vite (build: `npm run build`, output: `dist`).
3. Click Deploy – you get a shareable link.
(Or CLI: `npm i -g vercel` then `vercel --prod`.)
