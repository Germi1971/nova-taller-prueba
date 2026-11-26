// Convierte un importe escrito a la argentina («1.234,50») en número.
export function leerImporte(texto) {
  const n = Number(String(texto).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}
