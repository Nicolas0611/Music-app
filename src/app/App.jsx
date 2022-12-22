import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Home } from "./pages/Home";
import { Charts } from "./pages/Charts";
import { Artist } from "./pages/Artist";
import store from "./redux/store";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
