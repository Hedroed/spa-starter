import { h, render, Fragment } from 'preact'
import 'twin.macro'

import { App } from "./App";
import GlobalStyles from './GlobalStyles'

// Setup should be called just once in your app entry file
import { setup } from 'goober'
setup(h)

const app = document.getElementById("app");
render(
    <>
        <GlobalStyles />
        <App />
    </>,
    app
);
