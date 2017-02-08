import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class CompaniesHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            company: {
                name: null,
                description: null
            }
        };
    }

    handleOpenDialogState = () => {
        this.setState({
            open: true,
            company: {
                name: null,
                description: null
            }
        });
    };

    handleCloseDialogState = () => {
        this.setState({
            open: false,
            company: {
                name: null,
                description: null
            }
        });
    };

    handleSubmit = () => {
        const {company} = this.state;
        this.props.addCompanyCallback(company);
        this.handleCloseDialogState();
    };

    handleNameChange = (event) => {
        this.setState({
            company: {
                name: event.target.value,
                description: this.state.company.description
            }
        });
    };

    handleDescriptionChange = (event) => {
        this.setState({
            company: {
                name: this.state.company.name,
                description: event.target.value
            }
        });
    };

    isSubmitDisabled = () => {
        return !this.state.company.name
            || !this.state.company.description;
    };

    render = () => {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseDialogState}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.isSubmitDisabled()}
                onTouchTap={this.handleSubmit}
            />
        ];

        return (
            <div className="CompaniesHeader">
                <div className="CompaniesHeader-button">
                    <RaisedButton label="Add Company" onTouchTap={this.handleOpenDialogState}/>
                    <Dialog
                        title="Please enter company details:"
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                    >
                        <div className="CompaniesModal">
                            <div className="CompaniesModal-name">
                                <TextField
                                    floatingLabelText="Company Name"
                                    onChange={this.handleNameChange}
                                />
                            </div>
                            <div className="CompaniesModal-description">
                                <TextField
                                    floatingLabelText="Company Description"
                                    onChange={this.handleDescriptionChange}
                                />
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        );
    }
}

const {func} = React.PropTypes;

CompaniesHeader.propTypes = {
    addCompanyCallback: func.isRequired
};

export default CompaniesHeader;
