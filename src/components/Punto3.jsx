export default function Punto3() {

  const mensajeEstado = (activo) => {
    if (activo) {
      return <span>Activo</span>;
    } else {
      return <span>Inactivo</span>;
    }
  };

  return (
    <div>
      <h2>Punto 3</h2>
      <p>Usuario 1: {mensajeEstado(true)}</p>
      <p>Usuario 2: {mensajeEstado(false)}</p>
    </div>
  );
}
