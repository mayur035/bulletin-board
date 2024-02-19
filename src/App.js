import logo from './logo.svg';
import './App.css';
import PostList from './features/postList';
import AddPostForm from './features/AddPostForm';

function App() {
  return (
    <div className="App">
      <AddPostForm/>
      <PostList/>
    </div>
  );
}

export default App;
