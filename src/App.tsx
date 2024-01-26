import "./App.css";
import UseEffectExample from "./pages/UseEffectExample";
import UseRefExample from "./pages/UseRefExample";
import UseStateExample from "./pages/UseStateExample";
import UseStateFormExample from "./pages/UseStateFormExample";

function App() {
  return (
    <div>
      <UseStateExample></UseStateExample>
      <UseStateFormExample></UseStateFormExample>
      <UseEffectExample></UseEffectExample>
      <UseRefExample></UseRefExample>
    </div>
  );
}

export default App;
