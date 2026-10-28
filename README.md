# Flamenco en juego

Simulador educativo interactivo de palos, compases y ritmos flamencos para alumnado de 1.º y 2.º de ESO. El objetivo es aprender escuchando, contando, observando y practicando.

## Funciones

- Selector interactivo de **soleá, bulerías, alegrías, tangos, sevillanas y fandangos de Huelva**.
- Visualizador circular SVG que cambia según el palo, sus tiempos y los acentos guía.
- Metrónomo continuo con control de BPM, pausa, reinicio y programación de audio mediante el reloj de Web Audio API.
- Capas independientes de palmas, cajón y guitarra sintética, con control de volumen.
- Ficha didáctica para cada palo: estructura métrica, acentos orientativos, tempo de referencia, contexto, pista auditiva y actividad.
- Práctica manual de palmas con ratón, pantalla táctil o barra espaciadora.
- Reto de conceptos métricos con corrección y explicación inmediata.
- Sección STEAM sobre patrones matemáticos, tecnología de audio y física del sonido.
- Diseño adaptable, foco de teclado visible, etiquetas accesibles y preferencia de movimiento reducido.
- Sin dependencias, backend, cuentas, servicios de pago ni datos personales. La aplicación puede probarse abriendo `index.html`.

## Nota musical importante

Los patrones se presentan como **guías didácticas**, no como reglas universales. Soleá, alegrías y bulerías suelen explicarse mediante ciclos de 12 tiempos, pero la entrada, el fraseo y la percepción de los acentos pueden variar según la interpretación. Los tangos se representan aquí con cuatro pulsos y acentos guía en 1 y 3; las sevillanas y los fandangos de Huelva se simplifican mediante agrupaciones ternarias. El acompañamiento real es más rico que el patrón sintético del simulador y conviene contrastarlo con interpretaciones autorizadas y el trabajo del profesorado.

Los sonidos se sintetizan en el navegador con Web Audio API. No son grabaciones auténticas ni se incluyen muestras comerciales. La capa llamada «Guitarra sintética» es un timbre electrónico sencillo, no una guitarra grabada.

## Probar localmente

1. Descarga o clona el repositorio.
2. Abre `index.html` en un navegador moderno.
3. Pulsa «Reproducir» para permitir el audio. Si el navegador bloquea el sonido, comprueba que esté actualizado y que el volumen no esté silenciado.
4. Ejecuta las pruebas de humo con Node.js 22 o una versión compatible:

   ```sh
   node tests/smoke.test.cjs
   ```

No se necesita instalar dependencias ni iniciar un servidor.

## GitHub Pages

El proyecto sigue siendo una web estática compatible con GitHub Pages. La publicación no se activa desde este cambio. Cuando se decida publicar, comprueba **Settings → Pages** y elige la rama y carpeta de publicación deseadas.

## Identidad institucional

Aplicación desarrollada en el marco del Proyecto STEAM 4.0 / Programa de Cooperación Territorial Código Escuela 4.0
