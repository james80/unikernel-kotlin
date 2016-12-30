import React from "react";
import ContentClear from "material-ui/svg-icons/content/clear";
import IconButton from "material-ui/IconButton";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";

class CompaniesGrid extends React.Component {

    handleDeleteCompany = (event) => {
        const {id} = event.currentTarget;
        this.props.deleteCompanyCallback(id);
    }

    render = () => {
        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Action</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>{
                        this.props.companies.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.id}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.description}</TableRowColumn>
                                <TableRowColumn>
                                    <IconButton id={ row.id } onTouchTap={ this.handleDeleteCompany }>
                                        <ContentClear />
                                    </IconButton>
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    };
}

const {arrayOf, func, string, shape} = React.PropTypes;

const companyShape = {
    id: string,
    name: string,
    description: string
}

CompaniesGrid.propTypes = {
    companies: arrayOf(shape(companyShape)).isRequired,
    deleteCompanyCallback: func.isRequired
};

export default CompaniesGrid;
