function SaludoUsuario({ mensaje, nombre }) {
  return <p>{mensaje}, {nombre}</p>;
}

export default function Punto6() {

  return (
    <div>
      <h2>Punto 6</h2>
      <SaludoUsuario mensaje="Hola" nombre="Carlos" />
      <SaludoUsuario mensaje="Bienvenida" nombre="Laura" />
      <SaludoUsuario mensaje="Saludos" nombre="Pedro" />
    </div>
  );
}
