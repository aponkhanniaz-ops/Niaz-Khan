# Host your portfolio on GitHub Pages

## Before you start
1. Edit `data.js` with your details; replace `[YOUR NAME]` in the title and meta tags of `index.html`.
2. Optional: add `assets/images/profile.jpg` and `assets/resume/resume.pdf`.
3. Open `index.html` in your browser to check it.

## Step 1: Create a GitHub account
Sign up at github.com and verify your email.

## Step 2: Create a repository
1. Click **+** (top right) > **New repository**.
2. Name it `your-username.github.io` for the simplest URL (any other name also works; the site will then be at `your-username.github.io/repo-name`).
3. Set it to **Public**.
4. Leave "Add a README" unchecked.
5. Click **Create repository**.

## Step 3: Upload files
**Option A: website**
1. Click **uploading an existing file**.
2. Select everything inside the `portfolio` folder (index.html, style.css, script.js, data.js, README.md, .gitignore, assets) and drag it in.
3. Make sure `index.html` is at the top level, not inside an extra folder.
4. Click **Commit changes**.

**Option B: Git** (run inside the portfolio folder)
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

## Step 4: Turn on GitHub Pages
1. Repository > **Settings** > **Pages**.
2. Source: **Deploy from a branch**.
3. Branch: `main`, folder `/ (root)`, then **Save**.

## Step 5: Open your site
Wait 1-2 minutes and refresh the Pages screen. Your URL appears at the top.

## Updating later
Edit a file on GitHub (pencil icon > Commit changes), or run `git add .`, `git commit -m "Update"`, `git push`. Hard refresh (Ctrl+Shift+R) if changes don't show.

## Troubleshooting
- 404: `index.html` is in a subfolder, or Pages isn't set to `main` / root.
- Unstyled page: CSS/JS files missing or wrong capitalization (GitHub Pages is case-sensitive).
- Resume button missing: file must be exactly `assets/resume/resume.pdf`.
