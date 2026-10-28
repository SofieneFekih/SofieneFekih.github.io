(() => {
  const $ = (s, r = document) => r.querySelector(s), root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("#theme")?.addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
    const n = dark ? "light" : "dark"; root.dataset.theme = n;
    try { localStorage.setItem("theme", n); } catch (e) {}
  });
  const hero = $(".hero");
  hero?.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--x", e.clientX - r.left + "px"); hero.style.setProperty("--y", e.clientY - r.top + "px");
  });
  const mq = $("#mq");
  if (mq) { const s = DATA.marquee.map(x => `<span>${x}</span>`).join(""); mq.innerHTML = `<div>${s}${s}</div>`; }

  const tl = (list, withText) => list.map(i => `<article><div class="when">${i.when}</div><h3>${i.role}</h3><p class="muted">${i.org}</p>${withText && i.text ? `<p>${i.text}</p>` : ""}</article>`).join("");
  if ($("#exp")) $("#exp").innerHTML = tl(DATA.exp, true);
  if ($("#edu")) $("#edu").innerHTML = tl(DATA.edu, false);
  if ($("#skills")) $("#skills").innerHTML = DATA.skills.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  const row = (p, link) => {
    const inner = `<h3>${p.title}${p.status ? `<span class="badge">${p.status}</span>` : ""}</h3><span class="y">${p.year}</span><span class="t">${p.stack}</span>`;
    return link ? `<a class="row" href="projects.html#${p.id}">${inner}</a>` : `<button class="row" data-id="${p.id}">${inner}</button>`;
  };
  if ($("#featured")) $("#featured").innerHTML = DATA.projects.filter(p => p.feat).map(p => row(p, true)).join("");

  const rows = $("#rows"), dlg = $("#dlg");
  const open = id => {
    const p = DATA.projects.find(x => x.id === id); if (!p || !dlg) return;
    const links = p.links.length ? p.links.map(l => `<a href="${l.url}">${l.label}</a>`).join(" &nbsp; ") : `<span class="muted">Demo and code links will appear here.</span>`;
    $("#dbody").innerHTML = `<h2>${p.title}</h2><p class="muted">${p.stack}, ${p.year}</p><ul>${p.detail.map(d => `<li>${d}</li>`).join("")}</ul><p>${links}</p>`;
    dlg.showModal(); history.replaceState(null, "", "#" + id);
  };
  if (rows) {
    const draw = c => { rows.innerHTML = DATA.projects.filter(p => c === "all" || p.cat === c).map(p => row(p)).join(""); };
    draw("all");
    $("#filters").addEventListener("click", e => {
      const b = e.target.closest("[data-c]"); if (!b) return;
      document.querySelectorAll("#filters .chip").forEach(x => x.setAttribute("aria-pressed", x === b));
      draw(b.dataset.c);
    });
    rows.addEventListener("click", e => { const b = e.target.closest("[data-id]"); if (b) open(b.dataset.id); });
    dlg.addEventListener("click", e => { if (e.target === dlg || e.target.closest(".x")) dlg.close(); });
    dlg.addEventListener("close", () => history.replaceState(null, "", location.pathname));
    if (location.hash) open(location.hash.slice(1));
  }

  const cp = $("#copy");
  cp?.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(cp.dataset.mail); cp.textContent = "Copied"; } catch (e) { cp.textContent = "Copy failed"; }
    setTimeout(() => cp.textContent = "Copy email", 2000);
  });
  $("#form")?.addEventListener("submit", e => {
    e.preventDefault(); const f = new FormData(e.target);
    location.href = `mailto:${cp.dataset.mail}?subject=${encodeURIComponent("Message from " + f.get("name"))}&body=${encodeURIComponent(f.get("msg"))}`;
  });
})();
