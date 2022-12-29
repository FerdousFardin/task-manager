import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Test } from "./components/Test";
import AddTask from "./pages/AddTask/AddTask";
import CompletedTask from "./pages/CompletedTask/CompletedTask";
import { Login } from "./pages/Login/Login";
import MyTask from "./pages/MyTask/MyTask";
import { Register } from "./pages/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/" element={<MyTask />} />
          <Route path="/completed-task" element={<CompletedTask />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
