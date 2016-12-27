import React from "react";
import {storiesOf} from "@kadira/storybook";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import CompaniesModal from "./CompaniesModal";

storiesOf('CompaniesModal', module)

    .addDecorator(story => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {story()}
        </MuiThemeProvider>
    ))

    .add('default', () => (
        <CompaniesModal />
    ))
;