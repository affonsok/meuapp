import React from "react";
import './Home.view.css';
import List from "../components/List";


function HomeView (){
    const names = ['Affonso', 'cesar', 'tenorio', 'kopmann']
return <div className="HomeView"> 
        <List items ={names}  />
        <p> Teste CSS </p>
</div>

}


export default HomeView
