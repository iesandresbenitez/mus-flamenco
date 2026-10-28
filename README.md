# Flamenco en juego — palos y ritmos

Aplicación educativa para 1.º y 2.º de ESO centrada en conocer los palos del flamenco, escuchar sus compases y acentos y experimentar con patrones rítmicos. La propuesta prioriza aprender escuchando y creando, no completar retos competitivos.

## Funcionalidades

- **Explora los palos:** preguntas interactivas para reconocer tangos, soleá, alegrías, bulerías y conceptos de compás.
- **Sigue el compás:** escucha una secuencia sintética de doce pulsos y practica la identificación de acentos. No sustituye una grabación real de un palo.
- **Crea y escucha:** secuenciador de ocho pasos con palmas, cajón, guitarra y zapateado; permite cambiar la velocidad y combinar sonidos.
- **Modo aula opcional:** tres equipos personalizables, selector de equipo activo y clasificación para actividades cooperativas.
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

La interfaz está orientada a alumnado de 1.º y 2.º de ESO y sigue la guía visual corporativa STEAM 4.0: granate `#702B3A`, granate oscuro `#4A1D29`, beige `#F3E8D7`, arena `#E1CFB5`, dorado `#C49A6C` y fondo marfil `#FFFCF7`. La cabecera es sticky, con marca a la izquierda, navegación a la derecha y cápsula de puntuación; el pie institucional conserva el texto requerido.

## Privacidad y límites de la demo

- No existe autenticación real ni sincronización entre dispositivos.
- Las puntuaciones se guardan únicamente en el navegador actual y pueden borrarse al limpiar sus datos.
- Los nombres de equipos son editables y conviene usar nombres ficticios.
- Los sonidos son síntesis sencillas, no grabaciones de instrumentos reales.

## Pie institucional obligatorio

Aplicación desarrollada en el marco del Proyecto STEAM 4.0 / Programa de Cooperación Territorial Código Escuela 4.0
