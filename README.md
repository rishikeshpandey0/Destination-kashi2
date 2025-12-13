<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## How to persist admin changes to the live GitHub Pages site

1. In the app Admin panel go to **Export Data** (`/admin/export-data`).
2. Click **Download File** to get an updated `constants.ts` containing your current admin data (hotels, transports, packages, etc.).
3. Replace the repository file `constants.ts` with the downloaded file in your project root.
4. Commit and push to your GitHub repo. Example:

```bash
git add constants.ts
git commit -m "Update site data from Admin panel"
git push
```

5. Deploy to GitHub Pages (the project is already configured with `gh-pages`):

```bash
npm install
npm run predeploy
npm run deploy
```

Notes:
- Admin changes are stored in the browser (`localStorage`) by default and are visible only in that browser/profile. Use the Export Data flow above to make them permanent on the live site.
- If you want automatic commits from the admin UI, you can add a GitHub Personal Access Token and implement a server-side endpoint to perform repo commits securely. I can help implement that if you want.
