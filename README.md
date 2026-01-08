<div align="center">

  <!-- Add your cover image here -->
  <img src="https://github.com/adonisjs/.github/blob/next/docs/hypermedia-adonisjs.png?raw=true" alt="AdonisJS Hypermedia Starter Kit" width="100%">

  <h1>Hypermedia Starter Kit</h1>

  <p>
    <strong>A batteries-included AdonisJS starter kit for building modern server-rendered web applications.</strong>
  </p>

  <p>
    Built for developers who believe in the power of hypermedia and want to ship fast without sacrificing DX.
  </p>

  <br>

<a href="#-whats-in-the-box">Features</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-quick-start">Quick Start</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://adonisjs.com">Documentation</a>

  <br>
  <br>

</div>

---

## ✨ What's in the Box

This starter kit is designed to help you build production-ready web applications with server-side rendering, progressive enhancement, and minimal JavaScript. It's perfect for building traditional web apps, admin panels, content sites, and SaaS applications.

### 🎯 Core Features

- **🔐 Authentication System** - Complete user signup, login, and session management out of the box
- **📝 Pre-built UI Components** - Form inputs, buttons, alerts, avatars, and more ready to use
- **⚡️ Server-Side Rendering** - Fast initial page loads with Edge.js templating
- **🎨 Custom Design System** - Beautiful, accessible components with CSS variables (no framework bloat)
- **✅ Form Validation** - Powered by VineJS with automatic error handling
- **🌊 Flash Messages** - Success/error notifications built-in
- **🛡️ Security First** - CSRF protection, Shield middleware, and secure session handling

### 🔧 Tech Stack

<table>
  <tr>
    <td><strong>Backend</strong></td>
    <td>
      <a href="https://adonisjs.com">AdonisJS 7.x</a> - Full-featured Node.js framework
    </td>
  </tr>
  <tr>
    <td><strong>Templates</strong></td>
    <td>
      <a href="https://edgejs.dev">Edge.js</a> - Powerful, expressive templating engine
    </td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>
      <a href="https://lucid.adonisjs.com">Lucid ORM</a> - SQL ORM with migrations (SQLite, PostgreSQL, MySQL, MSSQL)
    </td>
  </tr>
  <tr>
    <td><strong>Auth</strong></td>
    <td>
      Session-based authentication with secure cookie storage
    </td>
  </tr>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>
      <a href="https://alpinejs.dev">Alpine.js</a> - Lightweight JavaScript for sprinkles of interactivity
    </td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>
      Custom CSS with modern features (CSS variables, nesting support via Vite)
    </td>
  </tr>
  <tr>
    <td><strong>Build</strong></td>
    <td>
      <a href="https://vitejs.dev">Vite</a> - Lightning-fast HMR and optimized builds
    </td>
  </tr>
  <tr>
    <td><strong>Validation</strong></td>
    <td>
      <a href="https://vinejs.dev">VineJS</a> - Type-safe schema validation
    </td>
  </tr>
  <tr>
    <td><strong>Testing</strong></td>
    <td>
      <a href="https://japa.dev">Japa</a> - Delightful testing framework with browser testing support
    </td>
  </tr>
  <tr>
    <td><strong>TypeScript</strong></td>
    <td>
      Full TypeScript support with strict mode enabled
    </td>
  </tr>
</table>

---

## 🚀 Quick Start

### Create a New Project

```bash
npm init adonisjs@latest -- -K=hypermedia
```

This command will:

- Clone this starter kit
- Install all dependencies
- Set up your `.env` file
- Generate your app encryption key
- Configure your database
- Configure authentication
- Run migrations

### Start Developing

```bash
# Run the development server with hot reload
node ace serve --hmr

# Run tests
node ace test

# Build for production
npm run build

# Start production server
npm start
```

Your app will be running at `http://localhost:3333`

---

## 📚 Learn More

<table>
  <tr>
    <td>
      <a href="https://docs.adonisjs.com"><strong>📖 Documentation</strong></a>
      <br>
      <span>Complete guide to AdonisJS</span>
    </td>
    <td>
      <a href="https://edgejs.dev"><strong>🎨 Edge.js Docs</strong></a>
      <br>
      <span>Learn about the template engine</span>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://lucid.adonisjs.com"><strong>💾 Lucid ORM</strong></a>
      <br>
      <span>Database queries and relationships</span>
    </td>
    <td>
      <a href="https://vinejs.dev"><strong>✅ VineJS</strong></a>
      <br>
      <span>Schema validation guide</span>
    </td>
  </tr>
</table>

---

## 🎨 Philosophy

This starter kit embraces the **hypermedia-driven** approach to web development:

- **Server-Side Rendering First** - Fast initial loads, SEO-friendly, works without JavaScript
- **Progressive Enhancement** - Sprinkle interactivity where needed with Alpine.js
- **Convention Over Configuration** - Sensible defaults, escape hatches when you need them
- **Developer Experience** - Hot reload, TypeScript, great error messages
- **Production Ready** - Security, validation, and testing built-in

---

## 🤝 Contributing

This starter kit is maintained by the AdonisJS team. Found a bug or have a suggestion? [Open an issue](https://github.com/adonisjs/web-starter-kit/issues) or submit a pull request!

---

## 📄 License

This starter kit is open-sourced software licensed under the [MIT license](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by the AdonisJS team</sub>
</div>
