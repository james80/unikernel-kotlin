import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class CompaniesHeader extends React.Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render = () => {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <div className="CompaniesHeader">
                <div className="CompaniesHeader-button">
                    <RaisedButton label="Add Company" onTouchTap={this.handleOpen}/>
                    <Dialog
                        title="Please enter company details:"
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                    >
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
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default CompaniesHeader;
