const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const checks = [
  ["documento en español", /<html lang="es">/.test(html)],
  ["paleta granate corporativa", /--granate:\s*#702B3A/i.test(html)],
  ["cabecera sticky", /\.site-header\s*\{[^}]*position:\s*sticky/s.test(html)],
  ["navegación principal", /aria-label="Navegación principal"/.test(html)],
  ["reto del compás", /id="compas"/.test(html)],
  ["laboratorio STEAM", /id="steam"/.test(html)],
  ["creador de ritmos", /id="beatmaker"/.test(html)],
  ["clasificación de equipos", /id="leaderboard"/.test(html)],
  ["guardado local", /localStorage/.test(html)],
  ["sincronización de audio", /AudioContext/.test(html)],
  ["texto institucional exacto", html.includes("Aplicación desarrollada en el marco del Proyecto STEAM 4.0 / Programa de Cooperación Territorial Código Escuela 4.0")],
  ["preferencia de movimiento reducido", /prefers-reduced-motion/.test(html)]
];

for (const [label, ok] of checks) {
  assert.ok(ok, "Fallo: " + label);
  console.log("✓ " + label);
}

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
assert.ok(scripts.length > 0, "Debe existir JavaScript de la aplicación");
for (const script of scripts) new vm.Script(script, { filename: "index-inline.js" });
console.log("✓ sintaxis JavaScript válida");
console.log("\nTodas las comprobaciones de humo han pasado.");
