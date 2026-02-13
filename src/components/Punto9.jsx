export default function Punto9() {

  const notificaciones = ["Mensaje nuevo", "Pago recibido"];
  const mostrarNotificaciones = true;

  return (
    <div>
      <h2>Punto 9</h2>

      {mostrarNotificaciones && notificaciones.length > 0 ? (
        notificaciones.map((noti, index) => (
          <p key={index}>{noti}</p>
        ))
      ) : (
        <p>No hay notificaciones</p>
      )}

    </div>
  );
}
