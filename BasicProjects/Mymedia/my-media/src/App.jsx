import Header from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/sidebar";
import CreatePost from "./components/createPost";
import PostList from "./components/postList";
import PostListProvider from "./store/post-list-store";
import './App.css';
import { useState } from "react";


function App() {

  const [current,next] = useState("Home");

  const handleClick = (name) => {
      next(name)
  }

  return (
    <>
      <PostListProvider>
        <div>
          <Header />
          <div className="sideCreate">
            <div className="sidebar">
              <SideBar handleClick={handleClick} Tab={current} />
            </div>
            <div className="create-post">
              {current === "Home" ? <PostList /> : <CreatePost />}
            </div>
          </div>
          <Footer />
        </div>
      </PostListProvider>
    </>
  );
}

export default App
