import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MainLayout from "./MainLayout/MainLayout";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
