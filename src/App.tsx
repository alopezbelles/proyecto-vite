import { useState } from "react";
import "./App.css";

type ItemId = `${string}-${string}-${string}-${string}`;

interface Item {
  id: ItemId;
  timestamp: number;
  text: string;
}

const INITIAL_ITEMS = [
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    text: "Videojuegos🎮",
  },
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    text: "Peliculas🎥",
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget; //desestructura la propiedad elements del objeto event.currentTarget y la asigna a la variable elements.

    //estrategia 2, es asegurarse que realmente es lo que es
    const input = elements.namedItem("item"); //se asigna el valor del elemento con el nombre 'item' a la variable input. El método elements.namedItem() se usa para recuperar un elemento del documento por su atributo o nombre.
    const isInput = input instanceof HTMLInputElement; //verifica si el valor de input es instancia de la clase HTMLInputElement. Este operador se usa para verificar si un objeto es una instancia de una clase especifica.
    if (!isInput || input == null) return; //si input es falso o nulo, se detiene la ejecución del codigo.

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      temestamp: Date.now(),
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });

    input.value = "";
  };

  const createHandleRemoveItem = (id: ItemId) => () => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== id);
    });
  };

  return (
    <main>
      <aside>
        <h1>Prueba técnica React</h1>
        <h2>Añadir y eliminar elementos de una lista. </h2>
        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input name="item" required type="text" placeholder="Videojuegos" />
          </label>
          <button>Añadir elemento a la lista.</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {items.length === 0 ? (
            <strong>Lista vacía</strong>
          ) : (
            items.map((item) => {
              return (
                <li key="item.id">
                  {item.text}
                  <button onClick={createHandleRemoveItem(item.id)}>
                    Eliminar
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
