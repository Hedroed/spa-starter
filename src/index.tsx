import { h, render } from 'preact'
import { GlobalStyles } from 'twin.macro'
import { App } from "./App";

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
