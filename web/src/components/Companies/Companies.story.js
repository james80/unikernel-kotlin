import React from "react";
import {storiesOf, action, linkTo} from "@kadira/storybook";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Companies from "./Companies";

const sharedCompany = {
    id: '12345',
    name: 'Quattro Gatti',
    description: 'This is a Super Awesome Company!'
};

storiesOf('Companies', module)

    .addDecorator(story => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            {story()}
        </MuiThemeProvider>
    ))

    .add('No Companies', () => (
        <Companies companies={ [] }/>
    ))

    .add('One Company', () => (
        <Companies companies={ [{...sharedCompany, id: '5432'}] }/>
    ))
;