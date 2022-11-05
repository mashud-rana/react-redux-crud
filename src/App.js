import './App.css';
import {Routes,Route} from 'react-router-dom'
import Index from './UserPost/index'
import CreatePost from './UserPost/CreatePost'
import EditPost from './UserPost/EditPost'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/edit-post/:id" element={<EditPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
