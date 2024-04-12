import "./reset.css";
import "./app.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Stack from "./views/stack/Stack";

{
  /* <a href="#section">Scroll to Section</a> */
}

function App() {
  return (
    <>
      <Home />
      <About />
      <Stack />
    </>
  );
}

export default App;
