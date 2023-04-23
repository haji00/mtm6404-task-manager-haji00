import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskContainer from "./components/TaskContainer";
import AddDuty from "./components/AddDuty";
import { GlobalContextProvider } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DutyContainer from "./components/DutyContainer";
import AboutContainer from "./components/AboutContainer";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskContainer />} />
          <Route path="/About" element={<AboutContainer />} />
          <Route path="/duties/:taskId" element={<DutyContainer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
