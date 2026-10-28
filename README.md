# Flamenco STEAM Challenge

Aplicación web educativa para relacionar el flamenco, la música y las disciplinas STEAM mediante retos de ritmo, preguntas interactivas y un creador musical.

## Funcionalidades

- **Reto del compás:** escucha un patrón de 12 pulsos, identifica acentos y consigue puntos.
- **Laboratorio STEAM:** preguntas autocorregibles sobre vibración, frecuencia, matemáticas musicales e instrumentos.
- **Crea tu ritmo:** secuenciador de ocho pasos con palmas, cajón, guitarra y zapateado. Genera sonidos sintéticos en el navegador mediante Web Audio.
- **Modo aula:** tres equipos personalizables, selector de equipo activo y clasificación.
- **Guardado local:** nombres y puntuaciones en `localStorage`; no hay cuentas ni autenticación.
- **Diseño adaptable y accesible:** navegación por teclado, foco visible, etiquetas accesibles y respeto por movimiento reducido.

## Ejecutar localmente

Abre `index.html` en un navegador moderno. Para probar todas las funciones de audio, usa un navegador con soporte para Web Audio y pulsa primero un control de reproducción para habilitar el audio.

No requiere dependencias, instalación ni servidor.

## Publicar con GitHub Pages

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/(root)`.
4. Guarda y espera a que termine la publicación.

URL prevista: https://iesandresbenitez.github.io/mus-flamenco/

La URL solo estará disponible cuando GitHub Pages se haya activado correctamente.

## Identidad visual

La interfaz sigue la guía corporativa STEAM 4.0: granate `#702B3A`, granate oscuro `#4A1D29`, beige `#F3E8D7`, arena `#E1CFB5`, dorado `#C49A6C` y fondo marfil `#FFFCF7`. La cabecera es sticky, con marca a la izquierda, navegación a la derecha y cápsula de puntuación; el pie institucional conserva el texto requerido.

## Privacidad y límites de la demo

- No existe autenticación real ni sincronización entre dispositivos.
- Las puntuaciones se guardan únicamente en el navegador actual y pueden borrarse al limpiar sus datos.
- Los nombres de equipos son editables y conviene usar nombres ficticios.
- Los sonidos son síntesis sencillas, no grabaciones de instrumentos reales.

## Pie institucional obligatorio

Aplicación desarrollada en el marco del Proyecto STEAM 4.0 / Programa de Cooperación Territorial Código Escuela 4.0
