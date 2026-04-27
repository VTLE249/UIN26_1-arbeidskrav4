import "./App.css";
import Student1 from "./components/Student1";
import Stephen from "./components/Stephen";
import Marius from "./components/Marius";
import Assignments from "./components/Assignments";

function App() {
  return (
    <>
      <header>
        <h1>UIN26_1</h1>
      </header>

      <main>
        <section className="members-section">
          <h2>Gruppemedlemmer</h2>
          <Student1 />
          <Stephen />
          <Marius />
        </section>

        <section className="assignments-section">
          <h2>Arbeidskrav fra Sanity</h2>
          <Assignments />
        </section>
      </main>

      <footer>
        <p>&copy; 2026 UIN26_1 Group Project</p>
      </footer>
    </>
  );
}

export default App;