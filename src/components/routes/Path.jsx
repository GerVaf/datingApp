import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Home from "../Pages/Home";
import LikeList from "../Pages/LikeList";
import Chat from "../Pages/Chat";
import Posts from "../Pages/Posts";
import Follow from "../Pages/Follow";
import Setting from "../Pages/Setting";
const Path = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/like-list",
      element: <LikeList />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/follow",
      element: <Follow />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
  ];
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};

export default Path;
