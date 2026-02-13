function Perfil({ nombre, edad, ciudad }) {

  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>
        Ciudad: {ciudad ? ciudad : "Ciudad no registrada"}
      </p>
    </div>
  );
}

export default function Punto7() {

  return (
    <div>
      <h2>Punto 7</h2>

      <Perfil nombre="Ana" edad={25} ciudad="Medellín" />
      <Perfil nombre="Luis" edad={30} ciudad="" />

    </div>
  );
}
