import React, { useState } from "react";

const SearchContainer = function(){
    
    const mostPopularCategories = ['economics', 'programming', 'marketing'];
    const [value, setValue] = useState('');

    return (
        <div>
            <div>
                <InputText placeholder="Search"/>
            </div>
        </div>
    );

}

export default SearchContainer;