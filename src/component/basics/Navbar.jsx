import React from "react";

const Navbar = ({ filterData, menuList }) => {
  return (
    <nav className="navbar">
      <div className="btn-group">
        {menuList.map((curelement) => {
          return (
            <>
              <button
                className="btn-group__item"
                onClick={() => {
                  filterData(curelement);
                }}
              >
            {curelement}
              </button>
            </>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
