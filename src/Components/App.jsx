import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ContentRowTop from './ContentRowTop';



function App() {
  return (
    <>
          
         <div className="wrapper">  

         <SideBar/>  
         <ContentRowTop/>     
         <ContentWrapper/>
       </div>

       
    </>
  );
}

export default App;
