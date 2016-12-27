import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import ContentClear from "material-ui/svg-icons/content/clear";
import ImageEdit from "material-ui/svg-icons/image/edit";

const CompaniesGrid = (props) => {

    const handleEditCompany = (id) => props.editCompanyCallback(id);
    const handleDeleteCompany = (id) => props.deleteCompanyCallback(id);

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>Action</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>{
                    props.companiesData.map((row, index) => (
                        <TableRow key={index} selected={row.selected}>
                            <TableRowColumn>{row.id}</TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.description}</TableRowColumn>
                            <TableRowColumn>
                                <ImageEdit />
                                <ContentClear />
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
    companiesData: arrayOf(shape(companyShape)),
    editCompanyCallback: func,
    deleteCompanyCallback: func
};

CompaniesGrid.defaultProps = {
    companiesData: {}
};

export default CompaniesGrid;
