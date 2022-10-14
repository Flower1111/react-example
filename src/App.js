import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Articles } from "./components/Articles/Articles";
import { Users } from "./components/Users/Users";
import { Photos } from "./components/Photos/Photos";
import { Nav } from "./components/Nav/Nav";
import { Modal } from "./components/Modal/Modal"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route exact path="/posts" element={<Articles />} />
          <Route exact path="/posts/:id" element={<Modal />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/photos" element={<Photos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
