import Header from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/sidebar";
import CreatePost from "./components/createPost";
import PostList from "./components/postList";
import PostListProvider from "./store/post-list-store";
import './App.css';
import { useState } from "react";
import { Outlet } from "react-router-dom";


function App() { 


  return (
    <>
      <PostListProvider>
        <div>
          <Header />
          <div className="sideCreate">
            <div className="sidebar">
              <SideBar  />
            </div>
            <Outlet/>
          </div>
          <Footer />
        </div>
      </PostListProvider>
    </>
  );
}

export default App
