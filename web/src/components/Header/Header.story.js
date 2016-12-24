import React from "react";
import {storiesOf} from "@kadira/storybook";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "./Header";

storiesOf('Header', module)

    .addDecorator(story => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {story()}
        </MuiThemeProvider>
    ))

    .add('default', () => (
        <Header/>
    ))
;