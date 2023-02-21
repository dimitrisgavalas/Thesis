import React from "react";
import List from './list';
import SearchContainer from './search-container';

const Home = function(){
    return(
        <div>
            <SearchContainer/>
            <List/>
        </div>
    );
}

export default Home;