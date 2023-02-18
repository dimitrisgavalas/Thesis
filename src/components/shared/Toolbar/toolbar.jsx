import React from "react";

const Toolbar = function(){

    const rightContents = (
        //Fragment component to return multiple elements
        <React.Fragment>
            <Button icon="pi pi-heart" className="mr-2" />
            <Button icon="pi pi-bell" className="p-button-success mr-2" />
            <Button icon="pi pi-sign-in" className="p-button-danger" />
        </React.Fragment>
    );

    return (
        <Toolbar right = {rightContents} />
    )
} 

export default Toolbar;