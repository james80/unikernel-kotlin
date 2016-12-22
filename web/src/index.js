import React from "react";
import ReactDOM from "react-dom";
import Companies from "./components/Companies/Companies";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
    <MuiThemeProvider>
        <Companies companies={ [] }/>
    </MuiThemeProvider>,
    document.getElementById('app')
);