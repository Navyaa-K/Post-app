import logo from './logo.svg';
import './App.css';
import { AddPost } from './Components/AddPost';
import { Search } from './Components/Search';
import { Delete } from './Components/Delete';
import { ViewAll } from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<AddPost />}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Delete" element={<Delete />}/>
      <Route path="/ViewALL" element={<ViewAll />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
