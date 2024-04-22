import "./reset.css";
import "./app.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
// import Stack from "./views/stack/Stack";
import Stack1 from "./views/stack/Stack1";
import Works from "./views/works/Works";

{
  /* <a href="#section">Scroll to Section</a> */
}

function App() {
  return (
    <>
      <Home />
      <About />
      {/* <Stack /> */}
      <Stack1 />
      <Works />
    </>
  );
}

export default App;
