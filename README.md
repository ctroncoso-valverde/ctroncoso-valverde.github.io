# Sitio académico — Cristián Troncoso-Valverde

Sitio estático: HTML y CSS escritos a mano, sin plantillas, sin base de datos y sin
compilación. Se abre igual con doble clic desde el disco que desde el servidor, y no
depende de ningún servicio externo: las fuentes también están aquí.

**En línea:** https://ctroncoso-valverde.github.io/
**Repositorio:** https://github.com/ctroncoso-valverde/ctroncoso-valverde.github.io
(con guion entre *ctroncoso* y *valverde*; el repositorio sin guion no es este)

```
index.html          Home — identidad con foto, bio, Recent, Research y Grants & Service
research.html       Párrafo de presentación + la misma lista, con filtros por línea
teaching.html       Docencia vigente, materias desplegables y registro completo
notes.html          Notes — columnas en prensa y notas propias, en español
notes/              Una página por nota propia (la crea el editor; las de prensa no tienen página)
assets/style.css    Toda la maquetación
assets/site.js      Abstracts desplegables y filtros de Research
assets/fonts/       Source Serif 4 (títulos) y Source Sans 3 (texto), con sus licencias OFL
assets/avatar.jpg   Foto del bloque de identidad del Home
assets/photo.jpg    Imagen para redes (Open Graph); no se muestra en el sitio
files/cv-en.pdf     CV en inglés  (las fuentes LaTeX están en Documents/cv)
files/cv-es.pdf     CV en español
.nojekyll           Le dice a GitHub Pages que sirva los archivos tal cual
```

## Cómo publicar un cambio

1. Edita el archivo aquí, en `Documents/webpage`.
2. En GitHub, entra al repositorio y navega a la carpeta del archivo
   (la raíz para los HTML, `assets/` para el CSS y el JS, `files/` para los CV).
3. **Add file → Upload files** y arrastra los archivos modificados. GitHub detecta
   que ya existen y los reemplaza.
4. Escribe el mensaje del commit y aprieta **Commit changes**.
5. Espera uno o dos minutos y recarga con **Cmd+Shift+R**.

Sube solo lo que cambiaste. No subas `.DS_Store`: lo crea Finder y no sirve de nada.

## Cómo editar el contenido

**Agregar un paper.** Copia un bloque `<div class="pp" data-l="...">` completo y edítalo:
`<a class="pt">` es el título enlazado al DOI, `<div class="pa">` los autores, `<div class="pv">`
la revista (en `<b>`) con volumen, páginas y año, `<div class="pl">` la fila de enlaces, y el
abstract va en un `<div class="abx" hidden>` con un `id` que coincide con el `data-a` de su
enlace *Abstract*. El atributo `data-l` dice a qué línea pertenece, para los filtros:
`cm` (competing mechanisms), `dc` (disclosure under competition), `ic` (information obtained
through cooperation). Sin `data-l`, el paper solo aparece con el filtro *All*.

> **Ojo:** los papers viven en **dos** archivos, `index.html` y `research.html`. Si agregas
> uno, agrégalo en los dos, y usa un `id` de abstract que no exista ya en esa página.

**Agregar un trabajo en curso.** Un `<div class="pp wip" data-l="...">` en la sección
*Work in Progress* de ambos archivos.

**Agregar una novedad.** Un `<p>` dentro del bloque `<div class="recent">` de `index.html`;
el `<span>` lleva la fecha.

**Cambiar la docencia vigente.** La línea `<p class="cur">` al inicio de `teaching.html`.

**Agregar una entrada a Notes.** No la escribas a mano: abre `editor_notas.html` (vive fuera de
esta carpeta, en `Documents/webpage-tools`), carga el `notes.html` actual, escribe la entrada y
aprieta *Generar*. Te devuelve el `notes.html` con la fila puesta en su lugar por fecha y, si es
una nota tuya, su página para la carpeta `notes/`. Puedes agregar varias entradas seguidas sin
volver a cargar el índice; al final sube el último `notes.html` generado.

> **Ojo:** las entradas de `notes.html` llevan `data-date="AAAA-MM-DD"` y viven entre los
> comentarios `<!-- NOTES:START -->` y `<!-- NOTES:END -->`. El editor los necesita para
> saber dónde insertar. Si los borras, deja de funcionar.

Las columnas publicadas en prensa **no** se reproducen en el sitio: el título enlaza al medio.
Es lo prudente mientras no tengas claro qué derechos conservas sobre esos textos.

**Cambiar los colores.** Las variables al principio de `assets/style.css`:

| Variable | Uso | Valor |
|---|---|---|
| `--acc` | Enlaces y títulos de papers | `#2a7ab8` |
| `--acc2` | Filtro activo en Research | `#1d4f73` |
| `--ink` | Texto principal y títulos | `#2c2c2c` |
| `--ink2` | Texto secundario | `#555` |
| `--ink3` | Metadatos apagados | `#8a8a8a` |
| `--line` | Líneas divisorias | `#e6e6e6` |
| `--hover` | Fondo del realce al pasar el mouse | `#f0f1f3` |

**Reemplazar los CV.** Compílalos en `Documents/cv` (ver su README) y sobrescribe
`files/cv-en.pdf` y `files/cv-es.pdf` con el mismo nombre.

## Dominio propio (opcional)

Crea un archivo `CNAME` en la raíz del repositorio cuyo único contenido sea el dominio
(`troncoso-valverde.cl`, por ejemplo), y en tu proveedor de DNS apunta:

- registros `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- o un `CNAME` de `www` → `ctroncoso-valverde.github.io`

Después marca **Enforce HTTPS** en Settings → Pages. Si lo haces, hay que actualizar las
URL de `<link rel="canonical">`, Open Graph y JSON-LD en los cuatro HTML, y la dirección
fija que usa `editor_notas.html` para las notas propias.

## Pendientes

- **Los dos working papers dicen "Draft on request"** porque no existe un PDF público.
  Cuando los tengas, súbelos a `files/` y cambia ese enlace por uno al PDF.
- **Faltan los abstracts de esos dos working papers.** Los otros siete están puestos
  textuales, verificados contra RePEc, Crossref y el BFI.
- **El paper de 2004 no tiene línea de investigación** y solo aparece con el filtro *All*.
  Todos los demás ítems están asignados a una línea.
- **Reclamar el perfil en el RePEc Author Service**, para que aparezcan ahí el
  *Economic Modelling* 2026 y el *JBIM* 2023.
- **Subir los working papers a SSRN.** Esa página no registra nada desde 2015.
- **Pedirle al BFI que actualice el Working Paper 2026-110** a la versión final.

## Textos que no son del autor

Escritos por Claude a partir del material de Cristián:

- La bio del Home, construida a partir de la *Research Agenda* y del CV, y revisada y
  editada por Cristián en noviembre de 2026.
- La bajada de `notes.html` ("Short pieces on economics for a general audience…").
- La selección de cinco congresos en `research.html`, elegida del CV.
- Los resúmenes de una línea de cada materia en `teaching.html`, derivados de la lista de cursos.

El párrafo de `research.html` es de Cristián.
