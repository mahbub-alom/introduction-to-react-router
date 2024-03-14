import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="text-3xl text-center">
      <Header></Header>
      <h3>This is home components.</h3>
      {navigation.state == "loading" ? <h1 className="bg-red-600">loading...</h1> : <Outlet></Outlet>}
    </div>
  );
};

export default Home;
