import React from "react";
import "./style.css";
import Menu from "./MenuApi";
import { useState } from "react";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((cel)=>{
  return cel.cateogary;
})
),
"All"]

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList); 
  // console.log(menuData)
  const filterData = (category) => {
    if(category ==="All"){
        setmenuData(Menu);
        return ;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.cateogary === category;
    });
    setmenuData(updatedList);
  };

  return (
    <>
      <Navbar filterData={filterData} menuList ={menuList}/>

      <MenuCard propshai={menuData} />
    </>
  );
};

export default Resturant;
