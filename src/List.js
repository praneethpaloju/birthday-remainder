import React from "react";

const List = (prop) => {
  return (
    <div>
      {prop.people.map((person) => {
        return (
          <div key={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
