import React from "react";
// PrimeReact is an open source UI library for React featuring
//  a rich set of 90+ components, a theme designer, various theme 
// alternatives such as Material, 
// Bootstrap, Tailwind, premium templates and professional support.
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

const Toolbar = function(){

    const rightContents = (
        //Fragment component to return multiple elements
        <React.Fragment>
            <Button icon="pi pi-heart" className="mr-2" title="Favorites" />
            <Button icon="pi pi-bell" className="p-button-success mr-2" title="Notifications" />
            {/* <Button icon="pi pi-sign-in"  className="p-button-danger" title="Sign In" /> */}
            <Button className="p-button-danger" title="Sign In" variant="text">Sign In</Button>
        </React.Fragment>
    );

    return (
        <Toolbar right = {rightContents} />
    )
} 

export default Toolbar;