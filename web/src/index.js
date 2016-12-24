import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page/Page";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
    <MuiThemeProvider>
        <Page/>
    </MuiThemeProvider>,
    document.getElementById('app')
);