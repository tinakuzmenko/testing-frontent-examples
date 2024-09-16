import "./styles.css";
import Form from "./components/Form.tsx";
import UnitConverter from "./components/UnitConverter.tsx";

export default function App() {
    return (
        <div className="App">
            <h1>Test examples</h1>
            <UnitConverter />
            <Form />
        </div>
    );
}
