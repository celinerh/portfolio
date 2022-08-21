import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App max-w-[1280px] mx-auto">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
