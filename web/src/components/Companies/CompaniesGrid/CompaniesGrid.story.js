import React from "react";
import {storiesOf, action, linkTo} from "@kadira/storybook";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import CompaniesGrid from "./CompaniesGrid";

const sharedCompany = {
    id: '12345',
    name: 'Quattro Gatti',
    description: 'This is a Super Awesome Company!'
};

const deleteFunc = (id) => {
    console.log("delete" + id);
}

storiesOf('CompaniesGrid', module)

    .addDecorator(story => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {story()}
        </MuiThemeProvider>
    ))

    .add('no companies', () => (
        <CompaniesGrid companies={ [] } deleteCompanyCallback={ deleteFunc }/>
    ))

    .add('one company', () => (
        <CompaniesGrid companies={ [{...sharedCompany}] } deleteCompanyCallback={ deleteFunc }/>
    ))

    .add('multiple companies', () => (
        <CompaniesGrid
            companies={ [
                {...sharedCompany, id: "100"},
                {...sharedCompany, id: "200"},
                {...sharedCompany, id: "300"}
            ] }
            deleteCompanyCallback={ deleteFunc }
        />
    ))
;