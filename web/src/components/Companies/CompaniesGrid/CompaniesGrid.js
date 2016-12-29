import React from "react";
import ContentClear from "material-ui/svg-icons/content/clear";
import IconButton from "material-ui/IconButton";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";

const CompaniesGrid = (props) => {

    const handleDeleteCompany = (id) => props.deleteCompanyCallback(id);

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
                    props.companies.map((row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{row.id}</TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.description}</TableRowColumn>
                            <TableRowColumn>
                                <IconButton onTouchTap={ handleDeleteCompany(row.id) }>
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
