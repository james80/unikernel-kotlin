import React from "react";
import {storiesOf, action, linkTo} from "@kadira/storybook";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import CompaniesHeader from "./CompaniesHeader";

storiesOf('companies.CompaniesHeader', module)

    .addDecorator(story => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {story()}
        </MuiThemeProvider>
    ))

    .add('default', () => (
        <CompaniesHeader />
    ))
;