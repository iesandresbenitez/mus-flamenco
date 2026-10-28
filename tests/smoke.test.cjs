const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const checks = [
  ["documento en español", /<html lang="es">/.test(html)],
  ["identidad Flamenco en juego", /Flamenco en juego/.test(html)],
  ["navegación principal", /aria-label="Navegación principal"/.test(html)],
  ["selector de palos", /id="palo-list"/.test(html)],
  ["visualizador circular SVG", /<svg id="compass-svg"/.test(html)],
  ["panel de ficha didáctica", /id="ficha"/.test(html)],
  ["panel STEAM", /id="steam"/.test(html)],
  ["capas sonoras independientes", /id="layer-palmas"/.test(html) && /id="layer-cajon"/.test(html) && /id="layer-guitarra"/.test(html)],
  ["control de tempo y volumen", /id="tempo"/.test(html) && /id="volume"/.test(html)],
  ["práctica de palmas", /id="palm-hit"/.test(html)],
  ["reto con retroalimentación", /id="quiz-options"/.test(html) && /id="quiz-feedback"/.test(html)],
  ["sincronización con reloj de audio", /ac\.currentTime\+\.12/.test(html) && /setInterval\(scheduleBeat,25\)/.test(html)],
  ["uso de Web Audio API", /createOscillator\(\)/.test(html) && /AudioContext/.test(html)],
  ["diseño adaptable", /@media\(max-width:600px\)/.test(html)],
  ["movimiento reducido", /prefers-reduced-motion:reduce/.test(html)],
  ["pie institucional exacto", html.includes("Aplicación desarrollada en el marco del Proyecto STEAM 4.0 / Programa de Cooperación Territorial Código Escuela 4.0")]
];
for (const [label, ok] of checks) {
  assert.ok(ok, "Fallo: " + label);
  console.log("✓ " + label);
}

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
assert.equal(scripts.length, 1, "Debe existir un único script principal");
for (const script of scripts) new vm.Script(script, { filename: "flamenco-en-juego.js" });
console.log("✓ sintaxis JavaScript válida");

const modelMatch = scripts[0].match(/const palos=(\{[\s\S]*?\});\nconst \$=/);
assert.ok(modelMatch, "El modelo de palos debe estar definido como estructura reutilizable");
const palos = vm.runInNewContext("(" + modelMatch[1] + ")");
assert.deepEqual(Object.keys(palos).sort(), ["alegrias", "bulerias", "fandangos", "sevillanas", "solea", "tangos"].sort());
assert.equal(palos.solea.beats, 12);
assert.equal(palos.bulerias.beats, 12);
assert.equal(palos.alegrias.beats, 12);
assert.equal(palos.tangos.beats, 4);
assert.equal(palos.sevillanas.beats, 3);
assert.equal(palos.fandangos.beats, 3);
assert.deepEqual(Array.from(palos.solea.accents), [12, 3, 6, 8, 10]);
assert.deepEqual(Array.from(palos.tangos.accents), [1, 3]);
assert.notDeepEqual(Array.from(palos.solea.accents), Array.from(palos.tangos.accents));
for (const palo of Object.values(palos)) {
  assert.ok(palo.tempo >= 50 && palo.tempo <= 180, "Tempo de referencia dentro del control disponible");
  assert.ok(palo.tip.length > 20, "Cada palo debe incluir una pista práctica");
}
console.log("✓ seis palos, familias métricas y patrones diferenciados");
console.log("\nTodas las comprobaciones de humo han pasado.");
