import "./styles.css";
import Form from "./components/Form.tsx";
import UnitConverter from "./components/UnitConverter.tsx";
import ThemeSwitch from "./components/ThemeSwitch.tsx";

export default function App() {
    return (
        <div className="App">
            <h1>Test examples</h1>
            <ThemeSwitch />
            <UnitConverter />
            <Form />
        </div>
    );
}
