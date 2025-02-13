import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Refer from "./components/refer";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Router>
      {/* <div className="App"> */}
        <Navbar/>
        <Routes>
          <Route path="/refer" element={< Refer />} />
          <Route path="/" element={< Refer />} />
        </Routes>
        <Footer />
      {/* </div> */}
    </Router>
    </>
  );
}

export default App;
