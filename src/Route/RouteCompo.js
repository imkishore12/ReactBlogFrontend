// import React from 'react';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import Hollywood from '../Components/Hollywood';
// import Home from '../Components/Home';

// function RouteCompo(props) {
//     return (
//         <div>
//             <BrowserRouter>

//             <Routes>
//                 <Route path='/' element={<Home></Home>} />
//                 <Route path='/hollywood' element={<Hollywood />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }


import React from "react";
import Home from "../Components/Home";
import Bollywood from "../Components/Bollywood";
import Hollywood from "../Components/Hollywood";
import Technology from "../Components/Technology";
import Food from "../Components/Food";
import Fitness from "../Components/Fitness";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import CreateStore from "../Store/CreateStore";
import DynamicRoute from "./DynamicRoute";
import Navbars from "./Navbars";
function RouteCompo() {
    return(
        <div>
            <BrowserRouter>
            <Navbars/>
            <CreateStore>            
                <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/Bollywood' element={<Bollywood />}></Route>
                <Route path='/Hollywood' element={<Hollywood />}></Route>
                <Route path='/Technology' element={<Technology />}></Route>
                <Route path='/Fitness' element={<Fitness />}></Route>
                <Route path='/Food' element={<Food />}></Route>
                <Route path="/details/:id" element={<DynamicRoute/>}/>
            </Routes>
            </CreateStore>

            </BrowserRouter>
        </div>
    )
}
export default RouteCompo;