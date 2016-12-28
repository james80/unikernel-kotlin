import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import Page from "./components/Page/Page";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./index.css";

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Page/>
    </MuiThemeProvider>,
    document.getElementById('app')
);