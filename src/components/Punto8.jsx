export default function Punto8() {

  const logueado = true;
  const rol = "admin";

  const mensaje = !logueado
    ? "Inicie sesión"
    : rol === "admin"
    ? "Panel Admin"
    : "Panel Usuario";

  return (
    <div>
      <h2>Punto 8</h2>
      <p>{mensaje}</p>
    </div>
  );
}
