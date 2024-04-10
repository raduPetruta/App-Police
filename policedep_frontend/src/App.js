import "./App.css";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
