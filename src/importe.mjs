// Convierte un importe escrito a la argentina («1.234,50», «$ 1.234,50», «(1.234,50)») en número.
// Devuelve null si el texto no tiene un formato válido.
const NUM = "(\\d{1,3}(?:\\.\\d{3})+|\\d+)(?:,(\\d{1,2}))?";
const CON_SIGNO = new RegExp(`^([+-])?(?:\\$ ?)?${NUM}$`);
const CONTABLE = new RegExp(`^\\((?:\\$ ?)?${NUM}\\)$`);

export function leerImporte(texto) {
  const t = String(texto ?? "").trim();
  if (t === "") return null;

  let signo = 1;
  let m = CON_SIGNO.exec(t);
  if (m) {
    if (m[1] === "-") signo = -1;
  } else {
    m = CONTABLE.exec(t);
    if (!m) return null;
    m = [m[0], undefined, m[1], m[2]];
    signo = -1;
  }

  const entero = m[2].replace(/\./g, "");
  const n = Number(m[3] ? `${entero}.${m[3]}` : entero);
  return Number.isFinite(n) ? signo * n : null;
}
