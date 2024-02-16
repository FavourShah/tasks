import React from "react";

const Header = ({ length, countCompleted, countPending }) => {
  return (
    <div className="header-divs">
      <div>
        Total Tasks: {length} {length <= 1 ? " Task" : " Tasks"}
      </div>
      <div>
        Completed Tasks : {countCompleted}
        {countCompleted <= 1 ? " Task" : " Tasks"}
      </div>
      <div>
        Pending Tasks : {countPending}
        {countPending <= 1 ? " Task" : " Tasks"}
      </div>
    </div>
  );
};

export default Header;
