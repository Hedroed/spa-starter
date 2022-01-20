import { Fragment } from 'react'
import { render } from "react-dom";
import GlobalStyles from './GlobalStyles';
import { App } from "./App";

const app = document.getElementById("app");


render(
    <Fragment>
        <GlobalStyles />
        <App />
    </Fragment>,
    app
);
