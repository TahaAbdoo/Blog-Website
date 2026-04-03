import React from 'react';
import Sidebar from '../../components/Sidebar';


const Main = (props) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="mr-64 p-4 w-full">
        {props.view}
      </div>
    </div>
  );
};

export default Main;
