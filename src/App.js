import './App.css';
import { Post } from './components/post/Post';
import { Sidebar } from './components/sidebar/Sidebar';
import { Infobar } from './components/infobar/Infobar';
import { Feed } from './components/feed/Feed';

function App() {
  return (
    <div className="App">
      <div className="sidebar-layout">
        <Sidebar />
      </div>
      <div className="infobar-layout">
        <Infobar />
      </div>
      <div className="feed-layout">
        <Feed />
      </div>
    </div>
  );
}

export default App;
