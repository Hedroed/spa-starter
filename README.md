# Parcel React Tailwind boilerplate

# What is Tailwind CSS?

Then I found out Tailwind CSS, which focuses on being a low-level [utility-first](https://tailwindcss.com/docs/utility-first/) (meta) CSS framework.

> Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

With Tailwind CSS, you can use class names to apply bite-sized styling to your html elements, almost eliminating the pain of manually writing CSS. The [homepage](https://tailwindcss.com/) has a good demo so visit and see; don't take my word for it.

This project contains [Parcel Bundler](https://parceljs.org/recipes/react/#tailwind-css), [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org) and [Tailwind](https://tailwindcss.com/docs/installation/using-postcss) other ways to use it. The stack I’ve chosen might as well be harder to get started.


There are available `scripts` configured in `package.json` so that you can run, build and clean the project easily.

```json
"scripts": {
  "start": "parcel serve ./src/index.html --open",
  "build": "parcel build --dist-dir dist src/index.html",
  "clean": "rm -rf .parcel-cache dist"
},
```

Create the `main.tsx` and add your React app there. Note that we have added a custom card component which uses Tailwind styles with utility classes. `src/components/Card/index.tsx` and `src/views/App.tsx` are omitted for clarity. Utility classes is [not the only way](https://tailwindcss.com/docs/reusing-styles) you can add Tailwind styles. Since we’re trying Tailwind with React, utility classes is enough for us right now.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./views/App";

ReactDOM.render(React.createElement(App), document.getElementById("app"));
```

Create `main.css` file and add the below. These are tailwind directives. This is needed to inject tailwind [styles](https://tailwindcss.com/docs/preflight) and utility classes into your CSS.

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

Add `.postcssrc` file inside the project folder (i.e.: one level up from `src` folder). Tailwind CSS is a [PostCSS](https://postcss.org/) plugin where PostCSS handles all pre/post processing of CSS you write, such as adding [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) [automatically](https://github.com/postcss/autoprefixer). Parcel has built-in support for PostCSS, but doesn’t know yet about Tailwind, so we have to configure it with the below content. Make sure you include `tailwindcss` before `autoprefixer`.

```js
{
  "plugins": {
    "postcss-import": true,
    "tailwindcss": true,
    "postcss-nested": true,
    "autoprefixer": true
  }
}
```

Now it’s show-time. Run `yarn` to install dependencies and `yarn start` to start. Since you have specified `--open` in `yarn start`, you’ll see the browser open with the `index.html` file.

You should see a card with a title and a description.

# The good, the bad, and the ugly

I can notice several good things about Tailwind CSS at a glance.

- Get things done without having to write a lot of code.
- No need to worry about different CSS naming standards and conventions such as [BEM](http://getbem.com/naming/) or [OOCSS](http://oocss.org/).
- The built-in styles are pretty good and useful.
- Tailwind doesn’t hate customization. New plugins can be created and configuration is very flexible.
- Can write your own CSS also, if you want an escape route (No lock-in).

There isn’t much to complain about the library but,

- Fonts, Icons, animations aren’t built-in. Adding them can be complicated.
- Advanced controls such as switches, calendars, tables, floating notifications, modals etc. are not available.

(I had more points here for the old versions but looks like now tailwind supports pretty much everything you'll need.)

# Resources

https://headlessui.dev/

https://tailwindui.com/

https://www.tailwindtoolbox.com/

https://tailwindcomponents.com/

https://tailwindtemplates.io/

https://github.com/aniftyco/awesome-tailwindcss


https://tailwindcss.com/docs/hover-focus-and-other-states

https://tailwindcss.com/docs/theme

https://tailwindcomponents.com/component/recipe-cooking

https://tailwindcomponents.com/component/card-like-kanban

https://tailwindui.com/components/application-ui/lists/grid-lists

https://github.com/estevanmaito/windmill-dashboard

https://www.tailwindtoolbox.com/starter-templates

https://parceljs.org/recipes/react/
