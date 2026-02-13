function TarjetaUsuario({ nombre, edad, activo, puedeVer }) {

  return (
    <div>
      <p>Nombre: {nombre || "Nombre no registrado"}</p>
      <p>Edad: {edad}</p>
      <p>Estado: {activo ? "Activo" : "Inactivo"}</p>
      {puedeVer && <button>Ver detalle</button>}
    </div>
  );
}

export default function Punto10() {

  const usuarios = [
    { id: 1, nombre: "Mario", edad: 20, activo: true },
    { id: 2, nombre: "", edad: 17, activo: true },
    { id: 3, nombre: "Sofia", edad: 25, activo: false }
  ];

  const puedeVerDetalle = (usuario) => {
    return usuario.activo && usuario.edad >= 18;
  };

  return (
    <div>
      <h2>Punto 10</h2>

      {usuarios.map((usuario) => (
        <TarjetaUsuario
          key={usuario.id}
          nombre={usuario.nombre}
          edad={usuario.edad}
          activo={usuario.activo}
          puedeVer={puedeVerDetalle(usuario)}
        />
      ))}

    </div>
  );
}
