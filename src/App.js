import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Weather from './Weather';
import Todo from './Todo';
import FullPageLoader from './Fullpageloader';

const App=() =>{
  return(
    <> 
    {/* <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/service' Component={Service}/>
        <Route exact path='/contact' Component={Contact}/>
      </Routes>
      <Footer/> */}
      <Weather/> 
      
      


      
    </>
  );
 
}

export default App;


// const [addItem, setAddItem] =useState([]);
// const addNote =(note)=>{
//       setAddItem((prevData)=>{
//         return[...prevData, note];
//       })
// };
// return (
//  <>
//    <Header/>
//    <CreateNote passNote={addNote}/>
//    {addItem.map((val,index)=>{
//     return (<Note 
//        key={index}
//            id={index}
//            title={val.title}
//            content={val.content}
//     />);
//    })}
//    <Footer/> 
//  </>
// );