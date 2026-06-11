<div align="center">

# `[ JJG·dev ]`

### Aprendiendo desarrollo web en público — cada commit es una lección

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-jjgdev--porfolio.netlify.app-c8f04a?style=for-the-badge&labelColor=0a0a0a)](https://jjgdev-porfolio.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Juan_García-7ef0b8?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0a0a0a)](https://www.linkedin.com/in/juan-garcia-aba595275)
[![Email](https://img.shields.io/badge/Email-soyjuan.app@gmail.com-e8e4dc?style=for-the-badge&logo=gmail&logoColor=white&labelColor=0a0a0a)](mailto:soyjuan.app@gmail.com)

</div>

---

## 👋 Sobre mí

Me llamo **Juan García**. Trabajo a jornada completa y, en el tiempo que queda, estudio desarrollo web.

Mi forma de aprender es poco tradicional: colaboro con **IA** para escribir código que todavía no sabría escribir solo, y después lo destripo hasta entender cómo funciona. Algunos lo llaman *vibe coding*; para mí es la forma más honesta de avanzar rápido sin saltarme la parte de comprender.

Documento todo el proceso en [el blog de mi portfolio](https://jjgdev-porfolio.netlify.app/#entradas) — los errores también, porque es donde más se aprende.

```json
{
  "estado": "aprendiendo",
  "stack_actual": "HTML · CSS · JavaScript",
  "siguiente": "React / Node.js",
  "modo": "trabajando + estudiando",
  "disponible": "prácticas / trabajo"
}
```

## 🛠️ Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)
![Claude](https://img.shields.io/badge/Claude_Code-c8f04a?style=flat-square&logo=anthropic&logoColor=black)

## 📂 Este repositorio

Mi primer proyecto real: un **portfolio con blog integrado**, construido desde cero sin frameworks ni plantillas.

```
├── index.html        ← toda la web (HTML + CSS + JS vanilla)
├── build.js          ← genera el índice del blog en cada deploy
├── netlify.toml      ← configuración de build en Netlify
├── admin/            ← panel de administración (Decap CMS)
└── posts/            ← entradas del blog en markdown
```

**Cómo funciona el blog:** las entradas son archivos `.md` con frontmatter. En cada push, Netlify ejecuta `build.js`, que genera un índice JSON; la web lo carga al vuelo y renderiza las tarjetas. Publicar no requiere tocar código: se escribe desde el panel de Decap CMS y el deploy es automático.

## 🗺️ Recorrido

- [x] **v1.0** — Portfolio online: HTML, CSS y JS en un solo archivo *(jun 2026)*
- [x] **v1.1** — Blog dinámico con markdown + Decap CMS *(jun 2026)*
- [x] **v1.2** — Datos en vivo desde la API de GitHub, SEO y Open Graph *(jun 2026)*
- [x] **v1.3** — Sección "Sobre mí", timeline de aprendizaje y formulario de contacto *(jun 2026)*
- [ ] **Próximamente** — React, Node.js y nuevos proyectos

## 📊 Stats

<div align="center">

![GitHub stats](https://github-readme-stats.vercel.app/api?username=JJGdev&show_icons=true&hide_border=true&bg_color=0a0a0a&title_color=c8f04a&text_color=e8e4dc&icon_color=7ef0b8&ring_color=c8f04a&locale=es)

</div>

---

<div align="center">

**© 2026 JJGdev** — Hecho con curiosidad

</div>
