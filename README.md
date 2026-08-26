# Sitio académico — Cristián Troncoso-Valverde

Sitio estático: HTML y CSS escritos a mano, sin plantillas, sin base de datos y sin
compilación. Se abre igual con doble clic desde el disco que desde el servidor.

**En línea:** https://ctroncoso-valverde.github.io/
**Repositorio:** https://github.com/ctroncoso-valverde/ctroncoso-valverde.github.io

```
index.html          Home — identidad, About, Recent y la lista completa (14 fichas)
research.html       Los mismos papers agrupados por línea de investigación (8 fichas)
teaching.html       Docencia por materia (18 cursos) + registro completo colapsado
assets/style.css    Toda la maquetación
assets/avatar.jpg   Avatar circular de la barra superior
assets/photo.jpg    Retrato — no se muestra en el sitio; es la imagen para redes (Open Graph)
files/cv-en.pdf     CV en inglés
files/cv-es.pdf     CV en español
.nojekyll           Le dice a GitHub Pages que sirva los archivos tal cual, sin procesarlos
```

## Cómo publicar un cambio

1. Edita el archivo acá, en `Documents/webpage`.
2. En GitHub, entra al repositorio y navega a la carpeta del archivo
   (la raíz para los HTML, `assets/` para el CSS).
3. **Add file → Upload files** y arrastra los archivos modificados. GitHub detecta
   que ya existen y los reemplaza.
4. Escribe el mensaje del commit y **Commit changes**.
5. Espera un minuto y recarga con **Cmd+Shift+R**. Sin eso vas a seguir viendo la
   versión anterior guardada por el navegador.

Sube solo lo que cambiaste. No subas `.DS_Store` — lo crea Finder solo y no sirve de nada.

## Cómo editar el contenido

**Agregar una publicación.** Copia un bloque `<div class="row">` completo y edítalo.
Su estructura es: `<div class="y">` con el año, `<p class="ti">` con el título enlazado
al DOI, `<p class="me">` con la cita, `<div class="lk">` con las pastillas de enlaces y
un `<details class="ab">` con el abstract.

> **Ojo:** los papers viven en **dos** archivos. En `index.html` van ordenados por año;
> en `research.html`, agrupados por línea. Si agregas uno, agrégalo en los dos.

**Agregar una novedad.** Un `<p class="newsitem">` dentro del bloque `.news` de
`index.html`. El `<span>` lleva la fecha.

**Cambiar la docencia vigente.** La caja `<div class="note">` al inicio de `teaching.html`.

**Cambiar los colores.** Las variables al principio de `assets/style.css`:

| Variable | Uso | Valor |
|---|---|---|
| `--acc` | Enlaces, años, rótulos de sección | `#3f7fbf` |
| `--ink` | Texto principal | `#0d1014` |
| `--ink2` | Texto secundario y prosa | `#464d57` |
| `--ink3` | Metadatos apagados | `#878e98` |
| `--line` | Líneas divisorias | `#e4e7ec` |
| `--band` | Fondo de la banda del encabezado y de la caja de docencia | `#f3f7fc` |
| `--hover` | Fondo del realce al pasar el mouse | `#f0f1f3` |

**Reemplazar los CV.** Sobrescribe `files/cv-en.pdf` y `files/cv-es.pdf` con el mismo nombre.

## Dominio propio (opcional)

Crea un archivo `CNAME` en la raíz del repositorio cuyo único contenido sea el dominio
(`troncoso-valverde.cl`, por ejemplo), y en tu proveedor de DNS apunta:

- registros `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- o un `CNAME` de `www` → `ctroncoso-valverde.github.io`

Después marca **Enforce HTTPS** en Settings → Pages. Si lo haces, hay que actualizar las
URL de `<link rel="canonical">`, Open Graph y JSON-LD en los tres HTML.

## Pendientes

- **Los dos working papers dicen "Draft available on request"** porque no existe un PDF
  público. Cuando los tengas, súbelos a `files/` y reemplaza esa línea por una pastilla
  de enlace, como las de DOI.
- **Faltan los abstracts de esos dos working papers.** Los otros siete están puestos
  textuales, verificados contra RePEc, Crossref y el BFI.
- **Reclamar el perfil en el RePEc Author Service**, para que aparezcan ahí el
  *Economic Modelling* 2026 y el *JBIM* 2023, que hoy no figuran.
- **Subir los working papers a SSRN.** Esa página tuya no registra nada desde 2015; con
  material nuevo vuelve a ser un enlace que suma en vez de restar.
- **Pedirle al BFI que actualice el Working Paper 2026-110** a la versión final: su
  abstract es anterior al publicado y no contiene el resultado de bienestar.

## Textos que no son del autor

Escritos por Claude a partir del material de Cristián, y pendientes de su revisión:

- El párrafo de apertura de `teaching.html`.
- La bajada bajo el título en `teaching.html`.
- La selección de cinco congresos en `research.html`, elegida del CV.

El párrafo de apertura de `research.html` sí es literal del documento *Research Agenda*.
