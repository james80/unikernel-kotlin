import React from 'react';
import Header from "../Header/Header";
import Companies from "../Companies/Companies";

const Page = () => {
    return (
        <div>
            <Header/>
            <Companies companies={ [] }/>
        </div>
    );
}

export default Page;
