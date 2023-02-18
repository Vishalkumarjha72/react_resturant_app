import React from "react";

const MenuCard = ({ propshai }) => {
  return (
    <>
      <section className="main-card-container">
        {propshai.map((currElem) => {

          const{id,name,image,description,cateogary} = currElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number subtle card-circle">
                      {id}
                    </span>
                    <span className="card-author subtle">
                      {cateogary}
                    </span>
                    <h2 className="card-title"> {name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read"> read</div>
                  </div>
                  <img
                    src={image}
                    alt="image"
                    className="card-media"
                  />
                  <span className="card-tag subtle"> order now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
