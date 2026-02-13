export default function Punto4y5() {

  const productos = [
    { id: 1, nombre: "Laptop", precio: 3000, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 50, stock: 0 },
    { id: 3, nombre: "Teclado", precio: 120, stock: 10 }
  ];

  return (
    <div>
      <h2>Punto 4 y 5</h2>

      {productos.map((producto) => (
        <div key={producto.id}>
          <h4>{producto.nombre}</h4>
          <p>Precio: ${producto.precio}</p>
          <p>
            {producto.stock > 0 ? "Disponible" : "Agotado"}
          </p>
        </div>
      ))}

    </div>
  );
}
