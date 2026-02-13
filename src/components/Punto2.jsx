export default function Punto2() {



  const calcularEdad = (anioNacimiento) => {
    const anioActual = 2026;
    return anioActual - anioNacimiento;
  };

  const edad1 = calcularEdad(2000);
  const edad2 = calcularEdad(1995);
  const edad3 = calcularEdad(2010);

  return (
    <div>
      <h2>Punto 2</h2>
      <p>Edad 1: {edad1}</p>
      <p>Edad 2: {edad2}</p>
      <p>Edad 3: {edad3}</p>
    </div>
  );
}
