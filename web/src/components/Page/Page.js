import React from "react";
import Header from "../Header/Header";
import Companies from "../Companies/Companies";

const addCompany = (company) => {
    console.log("adding company " + company.name + " " + company.description);
};

const deleteCompany = (id) => {
    console.log("delete company " + id);
};

const Page = () => {
    return (
        <div>
            <Header/>
            <Companies
                companies={ [] }
                addCompanyCallback={ addCompany }
                deleteCompanyCallback={ deleteCompany }
            />
        </div>
    );
};

export default Page;
