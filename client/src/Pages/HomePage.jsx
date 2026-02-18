import React from "react";
import SoldierManu from "../components/SoldierManu";
import ComanderMenu from "../components/ComanderMenu";

function HomePage() {
  return (
    <>
      <header>Home Page</header>
      <main>
        <SoldierManu/>
        <ComanderMenu/>
      </main>
    </>
  );
}

export default HomePage;
