<template>
  <!-- NAV -->
  <nav>
    <div class="nav-logo">
      <span class="bracket">[</span><span class="at">@</span
      ><span class="name">gethoopp</span
      ><span class="bracket">]</span>
    </div>
    <ul class="nav-links">
      <li><a href="#home">~/home</a></li>
      <li><a href="#projects">~/projects</a></li>
      <li><a href="#stack">~/stack</a></li>
      <li><a href="#contact">~/contact</a></li>
    </ul>
    <button
      class="nav-cta"
      @click="scrollToContact"
    >
      $ contact_me
    </button>
  </nav>

  <!-- HERO -->
  <section class="hero" id="home">
    <div>
      <p class="hero-eyebrow">
        Hello World 👋 — Available for Opportunities ✅
      </p>
      <h1 class="hero-title">
        I am <span class="name">Haliim Pamungkas</span>
        <span class="alias"
          >// gethoopp · Nganjuk, Indonesia 🇮🇩</span
        >
      </h1>
      <p class="hero-subtitle">
        Software Developer · Mobile · Systems · Backend
      </p>
      <p class="hero-bio">
        Building elegant, fast software with
        <span class="hl">Flutter 💙</span>,
        <span class="hl">Go 🐹</span>, and
        <span class="hl">Rust 🦀</span>. I catch bugs with try
        &amp; catch, ship mobile apps to Play Store, and love
        crafting clean, purposeful systems. Open to exciting new
        roles 🚀
      </p>
      <div class="hero-actions">
        <a
          class="btn-primary"
          href="https://gethoopp.github.io/"
          target="_blank"
          >🌐 Portfolio</a
        >
        <a
          class="btn-outline"
          href="mailto:halimpamungkas9@gmail.com"
          >✉ Email Me</a
        >
      </div>
      <div class="hero-social">
        <span>find_me:</span>
        <a
          class="social-icon"
          href="https://github.com/gethoopp"
          target="_blank"
          title="GitHub"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
        </a>
        <a
          class="social-icon"
          href="https://linkedin.com/in/haliimpamungkas"
          target="_blank"
          title="LinkedIn"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"
            />
          </svg>
        </a>
        <a
          class="social-icon"
          href="https://instagram.com/letcode_var"
          target="_blank"
          title="Instagram"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95C23.73 2.71 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Terminal card -->
    <div class="hero-terminal">
      <div class="terminal-bar">
        <div class="t-dot t-red"></div>
        <div class="t-dot t-yellow"></div>
        <div class="t-dot t-green-dot"></div>
        <span class="t-title">developer.json — gethoopp</span>
      </div>
      <div class="terminal-body">
        <div class="t-line">
          <span class="t-prompt">$ </span
          ><span class="t-cmd">cat developer.json</span>
        </div>
        <div class="t-line"><span class="t-brace">{</span></div>
        <div class="t-line">
          <span class="t-key">"name"</span> :
          <span class="t-str"
            >"Haliim Pamungkas Harjo Suyono"</span
          >,
        </div>
        <div class="t-line">
          <span class="t-key">"alias"</span> :
          <span class="t-str">"gethoopp"</span>,
        </div>
        <div class="t-line">
          <span class="t-key">"location"</span> :
          <span class="t-str">"Nganjuk, Indonesia 🇮🇩"</span>,
        </div>
        <div class="t-line">
          <span class="t-key">"role"</span> :
          <span class="t-str">"Software Developer"</span>,
        </div>
        <div class="t-line">
          <span class="t-key">"focus"</span> :
          <span class="t-arr"
            >["Mobile", "Systems", "Backend"]</span
          >,
        </div>
        <div class="t-line">
          <span class="t-key">"stack"</span> :
          <span class="t-arr"
            >["Flutter 💙", "Go 🐹", "Rust 🦀"]</span
          >,
        </div>
        <div class="t-line">
          <span class="t-key">"open_to"</span> :
          <span class="t-str"
            >"Flutter | Go | Rust Roles 🚀"</span
          >,
        </div>
        <div class="t-line">
          <span class="t-key">"status"</span> :
          <span class="t-str">"Available ✅"</span>
        </div>
        <div class="t-line"><span class="t-brace">}</span></div>
        <div class="t-line" style="margin-top: 8px">
          <span class="t-prompt">$ </span
          ><span class="t-cursor"></span>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="services-section" id="services">
    <div class="section-label">What I Build</div>
    <h2 class="section-title">
      Crafting <span class="accent">Elegant</span> Software for
      Real Users
    </h2>
    <div class="services-track">
      <div
        v-for="(s, i) in services"
        :key="i"
        class="service-card"
        :class="{ active: activeService === i }"
        @click="activeService = i"
      >
        <div class="service-icon">{{ s.icon }}</div>
        <div class="service-name">{{ s.name }}</div>
        <div class="service-tag">{{ s.tag }}</div>
      </div>
    </div>
    <div class="carousel-dots">
      <div
        v-for="(s, i) in services"
        :key="i"
        class="dot"
        :class="{ active: activeService === i }"
        @click="activeService = i"
      ></div>
    </div>
  </section>

  <!-- STATS -->
  <div class="stats-section">
    <div class="stats-grid">
      <div
        v-for="(st, i) in stats"
        :key="i"
        class="stat-item"
        :class="{ highlight: st.highlight }"
      >
        <div class="stat-num">{{ st.num }}</div>
        <div class="stat-label">{{ st.label }}</div>
      </div>
    </div>
  </div>

  <!-- PROJECTS -->
  <section class="projects-section" id="projects">
    <div class="section-label">My Work</div>
    <h2 class="section-title">
      Featured <span class="accent">Projects</span>
    </h2>
    <div class="project-list">
      <div
        v-for="(p, i) in projects"
        :key="i"
        class="project-card"
      >
        <div class="project-thumb">{{ p.icon }}</div>
        <div class="project-info">
          <div class="project-name">
            <span class="hl">{{ p.nameHl }}</span
            >{{ p.nameRest }}
          </div>
          <div class="project-lang">
            <span
              class="lang-dot"
              :style="{ background: p.langColor }"
            ></span>
            {{ p.lang }} · {{ p.desc }}
          </div>
        </div>
        <a
          :href="p.url"
          target="_blank"
          style="text-decoration: none"
        >
          <button class="btn-view">{{ p.url.includes('play.google.com') ? 'Play Store' : 'GitHub' }} →</button>
        </a>
      </div>
    </div>
    <div class="project-cta">
      <div class="project-cta-text">
        <h3>More projects in stealth mode 🥷</h3>
        <p>// currently building something amazing...</p>
      </div>
      <div class="cta-actions">
        <a
          href="https://github.com/gethoopp?tab=repositories"
          target="_blank"
          style="text-decoration: none"
        >
          <button class="btn-outline">All Repos</button>
        </a>
        <a
          href="https://gethoopp.github.io/"
          target="_blank"
          style="text-decoration: none"
        >
          <button class="btn-primary">🌐 Portfolio</button>
        </a>
      </div>
    </div>
  </section>

  <!-- STACK -->
  <section class="stack-section" id="stack">
    <div class="section-label">Tech Stack</div>
    <h2 class="section-title">
      Tools &amp; <span class="accent">Technologies</span>
    </h2>
    <div class="stack-groups">
      <div
        v-for="(group, i) in stackGroups"
        :key="i"
        class="stack-group"
      >
        <div class="stack-group-title">
          {{ group.icon }} {{ group.title }}
        </div>
        <div class="stack-badges">
          <div
            v-for="(b, j) in group.badges"
            :key="j"
            class="stack-badge"
          >
            <span
              class="badge-dot"
              :style="{ background: b.color }"
            ></span>
            {{ b.name }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY -->
  <section class="why-section">
    <div class="section-label">My Strengths</div>
    <h2 class="section-title">
      Why Work With <span class="accent">Me</span>
    </h2>
    <div class="why-grid">
      <div v-for="(w, i) in whyItems" :key="i" class="why-card">
        <div class="why-icon">{{ w.icon }}</div>
        <div class="why-title">{{ w.title }}</div>
        <div class="why-desc">{{ w.desc }}</div>
      </div>
    </div>
  </section>

  <!-- QUOTE -->
  <div class="quote-section">
    <div class="quote-text">
      <span class="qmark">"</span>
      Tholabul 'ilmi minal mahdi ilal lahdi
      <span class="qmark">"</span>
    </div>
    <div class="quote-arabic">
      طَلَبُ الْعِلْمِ مِنَ الْمَهْدِ إِلَى اللَّحْدِ
    </div>
    <div class="quote-src">
      // Seek knowledge from the cradle to the grave · personal
      motto
    </div>
  </div>

  <!-- CONTACT -->
  <section class="contact-section" id="contact">
    <div class="contact-grid">
      <div>
        <div class="section-label">Get In Touch</div>
        <h2 class="contact-title">
          Let's
          <span style="color: var(--blue)">Build</span>
          Something
        </h2>
        <p class="contact-sub">
          // open to Flutter, Go, or Rust roles &
          collaborations
        </p>
        <div class="contact-items">
          <div class="contact-item">
            <div class="ci-icon">✉</div>
            <div class="ci-text">
              <span>email</span>
              <a href="mailto:halimpamungkas9@gmail.com"
                >halimpamungkas9@gmail.com</a
              >
            </div>
          </div>
          <div class="contact-item">
            <div class="ci-icon">🌐</div>
            <div class="ci-text">
              <span>portfolio</span>
              <a
                href="https://gethoopp.github.io/"
                target="_blank"
                >gethoopp.github.io</a
              >
            </div>
          </div>
          <div class="contact-item">
            <div class="ci-icon">💼</div>
            <div class="ci-text">
              <span>linkedin</span>
              <a
                href="https://linkedin.com/in/haliimpamungkas"
                target="_blank"
                >in/haliimpamungkas</a
              >
            </div>
          </div>
          <div class="contact-item">
            <div class="ci-icon">📸</div>
            <div class="ci-text">
              <span>instagram</span>
              <a
                href="https://instagram.com/letcode_var"
                target="_blank"
                >@letcode_var</a
              >
            </div>
          </div>
          <div class="contact-item">
            <div class="ci-icon">📍</div>
            <div class="ci-text">
              <span>location</span>
              Nganjuk, East Java, Indonesia
            </div>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input
          type="text"
          placeholder="Subject (e.g. Flutter role, open source, etc.)"
        />
        <textarea
          placeholder="Your message..."
          rows="5"
        ></textarea>
        <button class="btn-primary" style="width: fit-content">
          Send Message →
        </button>
      </div>
    </div>
  </section>

  <div class="footer-bar">
    <span
      >© 2024
      <a href="https://github.com/gethoopp" target="_blank"
        >@gethoopp</a
      >
      — Haliim Pamungkas</span
    >
    <span
      >"Code is like poetry — elegant, purposeful, and leaves an
      impression." 🦀</span
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeService = ref(0)

const services = ref([
  {
    icon: "📱",
    name: "Mobile Development",
    tag: "Flutter · Dart",
  },
  {
    icon: "⚙️",
    name: "Backend Systems",
    tag: "Go · REST API",
  },
  {
    icon: "🦀",
    name: "Systems Programming",
    tag: "Rust · CLI · TUI",
  },

  {
    icon: "📱",
    name: "Mobile Development",
    tag: "Flutter · Dart",
  },
  
  {
    icon: "🗄️",
    name: "Database Design",
    tag: "PostgreSQL · MySQL",
  },
])

const stats = ref([
  {
    num: "23",
    label: "repositories",
    highlight: false,
  },
  {
    num: "28",
    label: "stars_earned",
    highlight: true,
  },
  { num: "8", label: "followers", highlight: false },
  {
    num: "∞",
    label: "curiosity_level",
    highlight: false,
  },
])

const projects = ref([
  {
    icon: "📱",
    nameHl: "forHat",
    nameRest: " — Social Media Platform",
    lang: "Flutter",
    langColor: "#00B4AB",
    desc: "Media Sosial Indonesia + Zona Mahasiswa",
    url: "https://play.google.com/store/apps/details?id=com.zonamediagroup.zonamahasiswa",
  },
  {
    icon: "📚",
    nameHl: "booky",
    nameRest: " — Bookshelf App",
    lang: "Dart",
    langColor: "#00B4AB",
    desc: "Flutter + Go backend",
    url: "https://github.com/gethoopp/booky",
  },
  {
    icon: "✈️",
    nameHl: "traver_app",
    nameRest: " — Travel App",
    lang: "Dart",
    langColor: "#00B4AB",
    desc: "Flutter + Go + MySQL",
    url: "https://github.com/gethoopp/traver_app",
  },
  {
    icon: "📖",
    nameHl: "booksApp",
    nameRest: " — Books Service",
    lang: "Go",
    langColor: "#00ADD8",
    desc: "Pure Go REST API",
    url: "https://github.com/gethoopp/booksApp",
  },
  {
    icon: "🐹",
    nameHl: "belajar",
    nameRest: "_golang",
    lang: "Go",
    langColor: "#00ADD8",
    desc: "Learning repository",
    url: "https://github.com/gethoopp/belajar_golang",
  },
  {
    icon: "📋",
    nameHl: "attendances",
    nameRest: "_app",
    lang: "Dart",
    langColor: "#00B4AB",
    desc: "Attendance management",
    url: "https://github.com/gethoopp/attendances_app",
  },
])

const stackGroups = ref([
  {
    icon: "📱",
    title: "Mobile",
    badges: [
      { name: "Flutter", color: "#54C5F8" },
      { name: "Dart", color: "#00B4AB" },
    ],
  },
  {
    icon: "⚙️",
    title: "Systems & Backend",
    badges: [
      { name: "Go", color: "#00ADD8" },
      { name: "Rust", color: "#DEA584" },
      { name: "Solidity", color: "#383838" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "MySQL", color: "#4479A1" },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Environment",
    badges: [
      { name: "Git", color: "#F05032" },
      { name: "Linux", color: "#FCC624" },
      { name: "VSCode", color: "#007ACC" },
      { name: "GitHub", color: "#9aa5ce" },
      { name: "Claude", color: "#D97757" },
      { name: "OpenCode", color: "#7aa2f7" },
    ],
  },
])

const whyItems = ref([
  {
    icon: "🚀",
    title: "Fast Learner",
    desc: "Picked up Rust, Go, and Flutter simultaneously while shipping real projects and competing in hackathons.",
  },
  {
    icon: "🧩",
    title: "Full-Stack Mind",
    desc: "From Flutter UI down to Rust CLI — I think in complete, end-to-end solutions that actually ship.",
  },
  {
    icon: "📦",
    title: "Ships Things",
    desc: "23 repos on GitHub, Play Store targets, hackathon submissions. I finish what I start and show my work.",
  },
  {
    icon: "🌱",
    title: "Always Learning",
    desc: "Active learner with public repos and the philosophy: seek knowledge from the cradle to the grave.",
  },
])

function scrollToContact() {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #1a1b27;
  --bg2: #13141e;
  --bg3: #0f1018;
  --surface: #1e1f2e;
  --surface2: #252638;
  --border: rgba(122, 162, 247, 0.12);
  --blue: #7aa2f7;
  --blue-dim: #414868;
  --teal: #7dcfff;
  --green: #9ece6a;
  --orange: #ff9e64;
  --red: #f7768e;
  --purple: #bb9af7;
  --yellow: #e0af68;
  --text: #c0caf5;
  --muted: #565f89;
  --comment: #9aa5ce;
}

html {
  scroll-behavior: smooth;
}
body {
  background: var(--bg3);
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  overflow-x: hidden;
}

/* scanlines */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 999;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.03) 0px,
    rgba(0, 0, 0, 0.03) 1px,
    transparent 1px,
    transparent 3px
  );
}

/* NAV */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 72px;
  background: rgba(15, 16, 24, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: "DM Mono", monospace;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.nav-logo .bracket {
  color: var(--muted);
}
.nav-logo .name {
  color: var(--blue);
}
.nav-logo .at {
  color: var(--green);
}
.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.83rem;
  font-family: "DM Mono", monospace;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--blue);
}
.nav-cta {
  background: transparent;
  color: var(--green);
  border: 1px solid var(--green);
  padding: 9px 20px;
  border-radius: 6px;
  font-family: "DM Mono", monospace;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s;
}
.nav-cta:hover {
  background: rgba(158, 206, 106, 0.1);
}

/* HERO */
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 56px;
  padding: 120px 72px 80px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  top: -80px;
  right: -80px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(122, 162, 247, 0.1) 0%,
    transparent 65%
  );
  pointer-events: none;
}
.hero::after {
  content: "";
  position: absolute;
  bottom: 40px;
  left: -60px;
  width: 380px;
  height: 380px;
  background: radial-gradient(
    circle,
    rgba(187, 154, 247, 0.08) 0%,
    transparent 65%
  );
  pointer-events: none;
}

.hero-eyebrow {
  font-family: "DM Mono", monospace;
  font-size: 0.78rem;
  color: var(--green);
  letter-spacing: 0.06em;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.hero-eyebrow::before {
  content: "//";
  color: var(--muted);
}
.hero-title {
  font-family: "Syne", sans-serif;
  font-size: clamp(2.1rem, 4.2vw, 3.3rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
}
.hero-title .name {
  color: var(--blue);
}
.hero-title .alias {
  font-family: "DM Mono", monospace;
  font-size: 0.52em;
  font-weight: 400;
  color: var(--muted);
  display: block;
  margin-top: 5px;
}
.hero-subtitle {
  font-size: 0.8rem;
  color: var(--comment);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 22px;
  font-family: "DM Mono", monospace;
}
.hero-bio {
  font-size: 0.94rem;
  line-height: 1.78;
  color: var(--comment);
  max-width: 460px;
  margin-bottom: 30px;
}
.hero-bio .hl {
  color: var(--teal);
}
.hero-actions {
  display: flex;
  gap: 13px;
  align-items: center;
  flex-wrap: wrap;
}
.btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--blue);
  color: var(--bg3);
  border: none;
  padding: 12px 22px;
  border-radius: 7px;
  font-family: "DM Mono", monospace;
  font-size: 0.83rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}
.btn-primary:hover {
  background: var(--teal);
  transform: translateY(-2px);
}
.btn-outline {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  padding: 12px 22px;
  border-radius: 7px;
  font-family: "DM Mono", monospace;
  font-size: 0.83rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}
.btn-outline:hover {
  border-color: var(--blue);
  color: var(--blue);
}
.hero-social {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 34px;
}
.hero-social span {
  font-size: 0.76rem;
  color: var(--muted);
  font-family: "DM Mono", monospace;
}
.social-icon {
  width: 33px;
  height: 33px;
  border-radius: 7px;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--text);
}
.social-icon:hover {
  border-color: var(--blue);
  color: var(--blue);
  background: rgba(122, 162, 247, 0.1);
}

/* Terminal */
.hero-terminal {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
}
.terminal-bar {
  background: var(--surface2);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 1px solid var(--border);
}
.t-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.t-red {
  background: #f7768e;
}
.t-yellow {
  background: #e0af68;
}
.t-green-dot {
  background: #9ece6a;
}
.t-title {
  margin-left: 8px;
  font-family: "DM Mono", monospace;
  font-size: 0.76rem;
  color: var(--muted);
}
.terminal-body {
  padding: 22px 20px;
}
.t-line {
  font-family: "DM Mono", monospace;
  font-size: 0.8rem;
  line-height: 1.95;
  white-space: pre;
}
.t-prompt {
  color: var(--green);
}
.t-cmd {
  color: var(--text);
}
.t-key {
  color: var(--purple);
}
.t-val {
  color: var(--orange);
}
.t-str {
  color: var(--green);
}
.t-arr {
  color: var(--teal);
}
.t-brace {
  color: var(--comment);
}
.t-cursor {
  display: inline-block;
  width: 7px;
  height: 1.05em;
  background: var(--blue);
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* SECTIONS */
.section-label {
  font-family: "DM Mono", monospace;
  font-size: 0.73rem;
  color: var(--green);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 7px;
}
.section-label::before {
  content: "##";
  color: var(--muted);
}
.section-title {
  font-family: "Syne", sans-serif;
  font-size: clamp(1.45rem, 2.6vw, 1.95rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 44px;
  line-height: 1.2;
}
.section-title .accent {
  color: var(--blue);
}

/* SERVICES */
.services-section {
  padding: 96px 72px;
  background: var(--bg2);
}
.services-track {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
}
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 13px;
  padding: 26px 22px;
  width: 186px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
}
.service-card:hover,
.service-card.active {
  border-color: var(--blue);
  background: rgba(122, 162, 247, 0.08);
}
.service-card.active {
  transform: translateY(-6px);
}
.service-icon {
  font-size: 1.9rem;
  margin-bottom: 11px;
}
.service-name {
  font-family: "Syne", sans-serif;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--text);
}
.service-tag {
  font-family: "DM Mono", monospace;
  font-size: 0.68rem;
  color: var(--muted);
  margin-top: 5px;
}
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 26px;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--border);
  cursor: pointer;
  transition: all 0.3s;
}
.dot.active {
  width: 22px;
  border-radius: 4px;
  background: var(--blue);
}

/* STATS */
.stats-section {
  padding: 44px 72px;
  background: var(--bg3);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.stat-item {
  text-align: center;
  padding: 26px;
  border-right: 1px solid var(--border);
  transition: background 0.2s;
}
.stat-item:last-child {
  border-right: none;
}
.stat-item:hover {
  background: rgba(122, 162, 247, 0.05);
}
.stat-item.highlight {
  background: rgba(122, 162, 247, 0.1);
  border-color: rgba(122, 162, 247, 0.25);
}
.stat-num {
  font-family: "Syne", sans-serif;
  font-size: 2.3rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--blue);
  line-height: 1;
}
.stat-item.highlight .stat-num {
  color: var(--teal);
}
.stat-label {
  font-family: "DM Mono", monospace;
  font-size: 0.72rem;
  color: var(--muted);
  margin-top: 6px;
}

/* PROJECTS */
.projects-section {
  padding: 96px 72px;
}
.project-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.project-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 13px;
  padding: 18px 20px;
  transition: all 0.25s;
  cursor: pointer;
}
.project-card:hover {
  border-color: var(--blue);
  transform: translateX(5px);
}
.project-thumb {
  width: 86px;
  height: 60px;
  border-radius: 9px;
  background: var(--surface2);
  border: 1px solid var(--border);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
}
.project-info {
  flex: 1;
}
.project-name {
  font-family: "Syne", sans-serif;
  font-size: 0.98rem;
  font-weight: 600;
}
.project-name .hl {
  color: var(--blue);
}
.project-lang {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: "DM Mono", monospace;
  font-size: 0.7rem;
  color: var(--muted);
  margin-top: 5px;
}
.lang-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.btn-view {
  background: transparent;
  color: var(--blue);
  border: 1px solid rgba(122, 162, 247, 0.3);
  padding: 8px 17px;
  border-radius: 7px;
  font-family: "DM Mono", monospace;
  font-size: 0.76rem;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-view:hover {
  background: rgba(122, 162, 247, 0.1);
  border-color: var(--blue);
}
.project-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;
  padding: 24px 26px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 13px;
}
.project-cta-text h3 {
  font-family: "Syne", sans-serif;
  font-size: 1.02rem;
  font-weight: 700;
}
.project-cta-text p {
  font-size: 0.82rem;
  color: var(--muted);
  margin-top: 4px;
  font-family: "DM Mono", monospace;
}
.cta-actions {
  display: flex;
  gap: 12px;
}

/* STACK */
.stack-section {
  padding: 96px 72px;
  background: var(--bg2);
}
.stack-groups {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.stack-group {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 13px;
  padding: 26px;
}
.stack-group-title {
  font-family: "DM Mono", monospace;
  font-size: 0.76rem;
  color: var(--green);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.stack-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.stack-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 7px 13px;
  font-family: "DM Mono", monospace;
  font-size: 0.76rem;
  transition: all 0.2s;
  cursor: default;
}
.stack-badge:hover {
  border-color: var(--blue);
  color: var(--teal);
}
.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

/* WHY */
.why-section {
  padding: 96px 72px;
}
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.why-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 13px;
  padding: 26px 20px;
  text-align: center;
  transition: all 0.3s;
}
.why-card:hover {
  border-color: var(--purple);
  transform: translateY(-6px);
}
.why-icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: rgba(187, 154, 247, 0.1);
  border: 1px solid rgba(187, 154, 247, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
  font-size: 1.45rem;
}
.why-title {
  font-family: "Syne", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.why-desc {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.65;
}

/* QUOTE */
.quote-section {
  padding: 66px 72px;
  background: var(--bg3);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  text-align: center;
}
.quote-text {
  font-family: "DM Mono", monospace;
  font-size: 1.06rem;
  color: var(--comment);
  max-width: 660px;
  margin: 0 auto;
  line-height: 1.75;
}
.qmark {
  color: var(--purple);
  font-size: 1.5em;
  line-height: 0;
  vertical-align: -0.4em;
}
.quote-arabic {
  font-size: 1rem;
  color: var(--muted);
  margin-top: 14px;
  letter-spacing: 0.04em;
  direction: rtl;
}
.quote-src {
  font-family: "DM Mono", monospace;
  font-size: 0.73rem;
  color: var(--blue);
  margin-top: 16px;
}

/* CONTACT */
.contact-section {
  padding: 76px 72px 56px;
  background: var(--bg2);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
}
.contact-title {
  font-family: "Syne", sans-serif;
  font-size: 1.65rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 7px;
}
.contact-sub {
  font-family: "DM Mono", monospace;
  font-size: 0.79rem;
  color: var(--muted);
  margin-bottom: 28px;
}
.contact-items {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.87rem;
}
.ci-icon {
  width: 37px;
  height: 37px;
  border-radius: 8px;
  background: rgba(122, 162, 247, 0.09);
  border: 1px solid rgba(122, 162, 247, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
}
.ci-text a {
  color: var(--blue);
  text-decoration: none;
}
.ci-text a:hover {
  text-decoration: underline;
}
.ci-text span {
  display: block;
  font-size: 0.7rem;
  color: var(--muted);
  font-family: "DM Mono", monospace;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.contact-form input,
.contact-form textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 15px;
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  font-size: 0.88rem;
  outline: none;
  transition: border 0.2s;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--blue);
}
.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--muted);
}

/* FOOTER */
.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 72px;
  border-top: 1px solid var(--border);
  font-family: "DM Mono", monospace;
  font-size: 0.76rem;
  color: var(--muted);
  background: var(--bg3);
}
.footer-bar a {
  color: var(--blue);
  text-decoration: none;
}

@media (max-width: 900px) {
  nav {
    padding: 14px 20px;
  }
  .nav-links {
    display: none;
  }
  .hero {
    grid-template-columns: 1fr;
    padding: 100px 20px 60px;
    gap: 36px;
  }
  .services-section,
  .projects-section,
  .stack-section,
  .why-section,
  .contact-section,
  .quote-section {
    padding: 60px 20px;
  }
  .stats-section {
    padding: 36px 20px;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .stack-groups {
    grid-template-columns: 1fr;
  }
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .footer-bar {
    padding: 18px 20px;
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
