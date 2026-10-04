(function () {
  const d = portfolioData, $ = (s) => document.querySelector(s);
  const isPh = (v) => /^\[.*\]$/.test(v || "");
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.textContent = h; return e; };

  // Bind simple text fields
  document.querySelectorAll("[data-bind]").forEach((n) => { if (d[n.dataset.bind]) n.textContent = d[n.dataset.bind]; });
  document.title = d.name + " | Student • Developer • Future Manager";
  $("#year").textContent = new Date().getFullYear();

  // Skills (honest level labels)
  const skills = [
    ["Technical", [["HTML", "Familiar"], ["CSS", "Familiar"], ["JavaScript", "Developing"], ["Python", "Developing"], ["Git", "Working Knowledge"], ["GitHub", "Working Knowledge"]]],
    ["Computing", [["Programming fundamentals", "Developing"], ["Networking", "Developing"], ["TCP/IP", "Learning"], ["Cybersecurity fundamentals", "Learning"], ["Troubleshooting", "Developing"]]],
    ["Professional", [["Management", "Developing"], ["Leadership", "Developing"], ["Communication", "Developing"], ["Teamwork", "Developing"], ["Problem solving", "Developing"]]],
    ["Studying", [["Software engineering", "Learning"], ["Cybersecurity", "Learning"], ["Networking", "Learning"], ["IT management", "Learning"], ["Entrepreneurship", "Learning"]]]
  ];
  skills.forEach(([t, items]) => {
    const c = el("article", "card rev"); c.append(el("h3", "", t));
    const ul = el("ul"); items.forEach(([n, l]) => { const li = el("li", "", n); li.append(el("span", "lv", l)); ul.append(li); });
    c.append(ul); $("#skillGrid").append(c);
  });

  // Links helper: placeholder text stays visible, real values become links
  const link = (box, v, href) => {
    if (isPh(v)) { box.append(el("span", "ph-text", v)); return; }
    const a = el("a", "", v.replace(/^https?:\/\//, "")); a.href = href || v; a.rel = "noopener"; if (!href) a.target = "_blank"; box.append(a);
  };

  // Projects + filter
  const grid = $("#projectGrid"), types = ["All", ...new Set(d.projects.map((p) => p.type))];
  function drawProjects(f) {
    grid.replaceChildren();
    d.projects.filter((p) => f === "All" || p.type === f).forEach((p) => {
      const c = el("article", "card proj");
      c.append(el("span", "tag", p.type + " · " + p.status), el("h3", "", p.name), el("p", "desc", p.desc), el("p", "tag", "Technologies: " + p.tech));
      if (p.link) { const l = el("span"); link(l, p.link); c.append(l); }
      grid.append(c);
    });
  }
  types.forEach((t, i) => {
    const b = el("button", "chip", t); b.type = "button"; b.setAttribute("aria-pressed", i === 0);
    b.onclick = () => { document.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", x === b)); drawProjects(t); };
    $("#filters").append(b);
  });
  drawProjects("All");

  // Experience
  d.experience.forEach((e) => {
    const li = el("li", "rev"); li.append(el("h3", "", e.title), el("p", "meta", e.role + " · " + e.date), ...(e.desc ? [el("p", "", e.desc)] : [])); $("#expList").append(li);
  });

  // Erasmus (explored, not completed)
  $("#erasmusGrid").classList.add("erasmus");
  d.erasmus.forEach((x) => {
    const c = el("article", "card rev"); const f = el("span", "flag", x.flag); f.setAttribute("aria-hidden", "true");
    c.append(f, el("h3", "", x.country), el("p", "tag", x.uni), el("p", "meta", x.term + " · " + d.erasmusStatus), el("p", "", x.note)); $("#erasmusGrid").append(c);
  });

  // Contact
  const e = $("#cEmail"); link(e, d.email, "mailto:" + d.email);
  link($("#cGit"), d.github); link($("#cLi"), d.linkedin);
  $("#mailBtn").href = isPh(d.email) ? "#contact" : "mailto:" + d.email;

  // Resume: show only if the file exists
  fetch("assets/resume/resume.pdf", { method: "HEAD" }).then((r) => { if (r.ok) $("#resumeBtn").hidden = false; else throw 0; })
    .catch(() => { $("#resumeNote").hidden = false; });

  // Mobile menu
  const burger = $("#burger"), menu = $("#menu");
  burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
  menu.addEventListener("click", (ev) => { if (ev.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

  // Active nav + back to top
  const links = [...menu.querySelectorAll("a")];
  const spy = new IntersectionObserver((es) => es.forEach((en) => {
    if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
  const top = $("#toTop");
  addEventListener("scroll", () => { top.hidden = scrollY < 600; }, { passive: true });
  top.onclick = () => scrollTo({ top: 0 });

  // Reveal on scroll (cards only, no motion if reduced)
  const rv = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); rv.unobserve(en.target); } }), { threshold: .1 });
  document.querySelectorAll(".rev").forEach((n) => rv.observe(n));
})();
