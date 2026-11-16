# Portafolio de Erick Jaime

Web estática (HTML, CSS y JavaScript). No necesita base de datos, servidor especial ni servicios de pago.

## Cómo abrirla

- **Rápido:** doble clic en `index.html`.
- **Recomendado (igual que en internet):** abre una terminal en esta carpeta `web` y ejecuta:

  ```
  python -m http.server 8765
  ```

  Luego entra a http://localhost:8765

## Estructura

```
web/
├─ index.html          página (metadatos, favicon, cabecera)
├─ css/styles.css      estilos: base común + un tema por proyecto
├─ js/data.js          TODOS los textos, enlaces y rutas de archivos
├─ js/main.js          genera las secciones a partir de data.js
└─ assets/
   ├─ video/           copias optimizadas para web (los originales siguen intactos)
   ├─ posters/         portadas extraídas de cada video
   ├─ logos/           logos oficiales en WebP (sin redibujar ni deformar)
   ├─ img/             foto, favicon, icono e imagen para compartir
   └─ docs/            CV para descargar
```

## Cambiar un video

1. Prepara la copia web (opcional, con ffmpeg):
   `ffmpeg -i ORIGINAL.mp4 -vf scale=720:1280 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k -movflags +faststart assets/video/nuevo.mp4`
2. Crea su portada:
   `ffmpeg -ss 5 -i ORIGINAL.mp4 -frames:v 1 -vf scale=720:1280 assets/posters/nuevo.webp`
3. En `js/data.js`, dentro del proyecto, cambia `title`, `desc`, `duration`, `src` y `poster`.

Usa siempre rutas relativas (`assets/...`), nunca `C:\...`.

## Actualizar enlaces y textos

Todo está en `js/data.js`:
- Redes de cada proyecto: bloque `social` (youtube, facebook, tiktok).
- Correo, WhatsApp y CV: bloque `person`.
- Proceso y herramientas: `process` y `tools`.

## Antes de publicar

- Sube la carpeta `web` completa a cualquier hosting estático (GitHub Pages, Netlify, Cloudflare Pages, etc.).
- Peso total ≈ 118 MB, casi todo en videos (≈ 116 MB). Los videos usan `preload="none"`: solo se descargan al pulsar reproducir.
  - GitHub Pages admite archivos de hasta 100 MB (todos están por debajo) y un sitio de hasta ~1 GB.
- Cuando tengas dominio, cambia en `index.html` las etiquetas `og:image` y `twitter:image` por la URL completa (por ejemplo `https://tu-dominio/assets/img/og-image.jpg`); las redes sociales exigen URL absoluta para mostrar la vista previa.
- El servidor de prueba de Python no permite saltar a mitad de un video en todos los navegadores; los hostings reales sí.
