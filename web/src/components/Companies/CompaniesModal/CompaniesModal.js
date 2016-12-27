import React from "react";
import TextField from "material-ui/TextField";

const CompaniesModal = () => {
    return (
        <div className="CompaniesModal">
            <div className="CompaniesModal-name">
                <TextField floatingLabelText="Company Name"/>
            </div>
            <div className="CompaniesModal-address">
                <TextField floatingLabelText="Company Address"/>
            </div>
            <div className="CompaniesModal-description">
                <TextField floatingLabelText="Company Description"/>
            </div>
        </div>
    );
}

export default CompaniesModal;