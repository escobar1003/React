export default function Punto1() {


  const nombre = "Angie";
  const ciudad = "Popayán";
  const anio = 2026;

  // Template string
  const mensaje = `Hola, soy ${nombre} de ${ciudad} y estamos en ${anio}`;

  return (
    <div>
      <h2>Punto 1</h2>
      <p>{mensaje}</p>
    </div>
  );
}









