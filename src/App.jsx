import { BrowserRouter } from "react-router";
import Routers from "./routers/Routers";
import { DarkModeProvider } from "./components/Fragments/ToggleMode";

function App() {
  return (
    <DarkModeProvider>
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;