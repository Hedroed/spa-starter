module.exports = {
    "modules": true,
    "plugins": {
        "tailwindcss": {},
        "autoprefixer": {},
        "postcss-modules": {
            generateScopedName(name, filename, css) {
                return "__" + name;
            }
        }
    }
}
