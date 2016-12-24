import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const CompaniesHeader = () => {

    return (
        <div>
            <div>
                <h2>Manage Your Companies</h2>
            </div>
            <div>
                <RaisedButton label="Add Company"/>
            </div>
        </div>
    );
};

export default CompaniesHeader;
