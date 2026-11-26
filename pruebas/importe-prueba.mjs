import { leerImporte } from "../src/importe.mjs";
let mal = 0;
for (const [t, n] of [["10",10],["10,5",10.5],["1.234,50",1234.5],["1.000.000",1000000],["-1.234,50",-1234.5],["",null],["abc",null]]) if (leerImporte(t) !== n) { mal++; console.log("FALLA", JSON.stringify(t), "dio", leerImporte(t), "y tenía que dar", n); }
process.exit(mal ? 1 : 0);
