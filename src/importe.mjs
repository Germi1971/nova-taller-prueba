// Convierte un importe escrito a la argentina («1.234,50») en número.
export function leerImporte(texto) {
  const t = String(texto ?? "").trim();
  if (t === "") return null;
  if (!/^-?(\d{1,3}(\.\d{3})+|\d+)(,\d+)?$/.test(t)) return null;
  const n = Number(t.replace(/\./g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}
