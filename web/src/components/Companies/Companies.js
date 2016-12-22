import React from "react";
import CompaniesHeader from "./CompaniesHeader/CompaniesHeader";
import CompaniesGrid from "./CompaniesGrid/CompaniesGrid";

const Companies = (props) => {

    const handleAddCompany = () => props.addCompanyCallback();
    const handleEditCompany = (id) => props.editCompanyCallback(id);
    const handleDeleteCompany = (id) => props.deleteCompanyCallback(id);

    return (
        <div>
            <CompaniesHeader />
            <CompaniesGrid companiesData={ props.companies }/>
        </div>
    );
};

const {arrayOf, func, string, shape} = React.PropTypes;

const companyShape = {
    id: string,
    name: string,
    description: string
}

Companies.propTypes = {
    companies: arrayOf(shape(companyShape)),
    addCompanyCallback: func,
    editCompanyCallback: func,
    deleteCompanyCallback: func
};

Companies.defaultProps = {
    companies: {}
};

export default Companies;
