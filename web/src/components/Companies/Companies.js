import React from "react";
import CompaniesHeader from "./CompaniesHeader/CompaniesHeader";
import CompaniesGrid from "./CompaniesGrid/CompaniesGrid";
import WithCompaniesHandler from "./WithCompaniesHandler";

const Companies = (props) => {

    const handleAddCompany = (company) => props.addCompanyCallback(company);
    const handleDeleteCompany = (id) => props.deleteCompanyCallback(id);

    return (
        <div>
            <CompaniesHeader
                addCompanyCallback={ handleAddCompany }
            />
            <CompaniesGrid
                companies={ props.companies }
                deleteCompanyCallback={ handleDeleteCompany }
            />
        </div>
    );
};

const {arrayOf, func, number, string, shape} = React.PropTypes;

const companyShape = {
    id: number,
    name: string,
    description: string
};

Companies.propTypes = {
    companies: arrayOf(shape(companyShape)).isRequired,
    addCompanyCallback: func.isRequired,
    deleteCompanyCallback: func.isRequired
};

export default WithCompaniesHandler(Companies);
