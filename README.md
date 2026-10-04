# Niaz Khan — Portfolio

A static personal portfolio (HTML, CSS, vanilla JavaScript) for a Computer Science student at Daffodil International University. No backend, no build step.

## Structure
```
index.html   page markup
style.css    styles
data.js      ALL your editable content (name, links, projects, activities, certifications, Erasmus+)
script.js    rendering and interactions
assets/images/profile.jpg   your photo (optional)
assets/resume/resume.pdf    your resume (optional)
```

## Customize
1. Open `data.js` and replace every `[PLACEHOLDER]`.
2. Add projects by copying a block in `projects` (the `type` value creates the filter buttons).
3. Add `assets/images/profile.jpg` (square crop works best) and `assets/resume/resume.pdf`. The resume button appears automatically when the file exists on the live site.
4. Edit the `<title>` and Open Graph tags in `index.html` with your name.
5. Skill labels are in `script.js` (Learning, Developing, Familiar, Working Knowledge). Keep them honest.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy to GitHub Pages
1. Create a GitHub repository.
2. Upload all files (keep `index.html` in the root).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait a minute, then open the URL GitHub shows.
