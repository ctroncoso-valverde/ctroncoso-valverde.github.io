# Sitio académico — Cristián Troncoso-Valverde

Sitio estático, sin dependencias, sin build. Dos páginas HTML, una hoja de estilo,
una foto y dos PDF. Se abre igual desde el disco que desde GitHub Pages.

```
index.html          Home: bio, publicaciones, working papers, WIP, grants, service
teaching.html       Docencia por materia + registro completo colapsado
assets/style.css    Toda la maquetación (paleta "azul noche" ya fijada)
assets/photo.jpg    Foto, 900×600
files/cv-en.pdf     CV en inglés
files/cv-es.pdf     CV en español
.nojekyll           Le dice a GitHub Pages que no procese nada, solo sirva los archivos
```

## 1. Antes de publicar: reemplazar ctroncoso-valverde

Los dos HTML traen `https://ctroncoso-valverde.github.io/` en el `<link rel="canonical">`,
en las etiquetas Open Graph y en el bloque JSON-LD. Reemplaza `ctroncoso-valverde` por tu
usuario de GitHub (o por tu dominio propio, si vas a usar uno).

Son 10 apariciones: 5 en `index.html` y 5 en `teaching.html`. En Mac:

```bash
sed -i '' 's/ctroncoso-valverde/tuusuario/g' index.html teaching.html
```

## 2. Publicar

### Opción A — desde el navegador, sin línea de comandos

1. En GitHub: **New repository**. Si lo nombras exactamente `ctroncoso-valverde.github.io`,
   el sitio queda en `https://ctroncoso-valverde.github.io/` (URL raíz, la más limpia).
   Cualquier otro nombre lo deja en `https://ctroncoso-valverde.github.io/nombre-del-repo/`.
2. Público. Sin README ni .gitignore (ya vienen).
3. **Add file → Upload files** y arrastra todo el contenido de esta carpeta,
   respetando `assets/` y `files/`.
4. **Settings → Pages → Source: Deploy from a branch → main / (root)**. Guardar.
5. En uno o dos minutos el sitio está arriba.

### Opción B — con git

```bash
git init
git add .
git commit -m "Sitio académico"
git branch -M main
git remote add origin git@github.com:ctroncoso-valverde/ctroncoso-valverde.github.io.git
git push -u origin main
```

Después, **Settings → Pages → main / (root)**.

## 3. Dominio propio (opcional)

Compra el dominio donde quieras, crea un archivo `CNAME` en la raíz del repo
cuyo único contenido sea el dominio (`troncoso-valverde.cl`, por ejemplo), y en
tu proveedor de DNS apunta:

- `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- o `CNAME` de `www` → `ctroncoso-valverde.github.io`

Luego marca **Enforce HTTPS** en Settings → Pages.

## 4. Actualizar el contenido

Todo el contenido está escrito directamente en el HTML, sin plantillas ni base de datos.

- **Agregar una publicación**: copia un bloque `<div class="row">` completo en
  `index.html` y edítalo. La estructura es: año, título con enlace al DOI,
  cita, pastillas de enlaces, y el `<details class="ab">` con el abstract.
- **Cambiar la docencia vigente**: la caja `<div class="note">` al inicio de
  `teaching.html`.
- **Cambiar colores**: las variables al principio de `assets/style.css`.
  `--rail` es el azul de la barra, `--acc` el azul de los enlaces y años.
- **Reemplazar los CV**: sobrescribe `files/cv-en.pdf` y `files/cv-es.pdf`.

## Pendientes conocidos

- Los dos working papers dicen *"Draft available on request"* porque no hay PDF
  público. Cuando los tengas, súbelos a `files/` y reemplaza esa línea por una
  pastilla de enlace, igual que las de DOI.
- Falta el abstract de esos dos working papers.
- Vale la pena reclamar el perfil en el RePEc Author Service para que aparezcan
  ahí el *Economic Modelling* 2026 y el JBIM 2023.
