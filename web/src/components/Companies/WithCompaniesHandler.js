import React from "react";
import axios from 'axios';

const WithCompaniesHandler = (Decorator) => class CompaniesDecorator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: []
        }
    }

    setCompanies = (response) => {
        const {data} = response;
        this.setState({
            companies: data
        });
    }

    refreshCompanies = () => {
        axios.get("/api/companies")
            .then(this.setCompanies);
    };

    addCompany = (company) => {
        axios.post("/api/company", company)
            .then(this.refreshCompanies);
    };

    deleteCompany = (id) => {
        axios.delete("/api/company/" + id)
            .then(this.refreshCompanies);
    };

    componentDidMount = () => {
        this.refreshCompanies();
    }

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