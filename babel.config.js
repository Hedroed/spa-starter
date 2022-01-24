module.exports = {
    "plugins": [
        ["react-css-modules", {
            generateScopedName(name, filename, css) {
                return "__" + name;
            }
        }]
    ]
}
