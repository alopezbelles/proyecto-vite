import "./App.css";

function App() {
  return (
    <main>
      <aside>
        <h1>Prueba técnica React</h1>
        <h2>Añadir y eliminar elementos de una lista. </h2>
        <form action="">
          <label>
            Elemento a introducir:
            <input
            name="item"
            required
            type="text"
            placeholder="Videojuegos" />
          </label>
          <button>Añadir elemento a la lista.</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          <li>Videojuegos🎮</li>
          <li>Libros📖</li>
          <li>Series📺</li>
          <li>Peliculas🎥</li>
        </ul>

      </section>
    </main>
  );
}

export default App;
