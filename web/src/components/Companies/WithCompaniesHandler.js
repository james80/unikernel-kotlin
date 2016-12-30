import React from "react";

const WithCompaniesHandler = (Decorator) => class CompaniesDecorator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: []
        }
    }

    refreshCompanies = () => {
        console.log("refresh companies");
    };

    addCompany = (company) => {
        const newCompanies = this.state.companies.concat([{...company, id: "123"}]);
        this.setState({companies: newCompanies});
        this.refreshCompanies();
    };

    deleteCompany = (id) => {
        console.log("delete company " + id);
        this.refreshCompanies();
    };

    render = () => {
        return (
            <Decorator
                companies={ this.state.companies }
                addCompanyCallback={ this.addCompany }
                deleteCompanyCallback={ this.deleteCompany }
            />
        );

    }
};

export default (Decorated) => WithCompaniesHandler(Decorated);