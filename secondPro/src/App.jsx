import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
import './App.css';
import Create from './compo/Create';
import Update from './compo/Update';
import Home from './compo/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>App</h1>
        {/* <ToastContainer position="top-center" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

