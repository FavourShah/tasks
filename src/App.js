import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import { LiaTasksSolid } from "react-icons/lia";

function App() {
  return (
    <div className="App">
      <section className="title-card">
        <div className="title">
          <h4> /TɑːSK/</h4>
          <LiaTasksSolid className="task-btn" />
        </div>
        <div className="meaning">
          <p>Noun:</p>
          <p> A piece of work to be done or undertaken.</p>
        </div>
      </section>

      <TodoWrapper />
    </div>
  );
}

export default App;
