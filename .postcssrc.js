function hash(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return btoa(hash.toString(16));
}

module.exports = {
    "plugins": {
        "tailwindcss": {},
        "autoprefixer": {},
        "postcss-modules": {
            generateScopedName(name, filename, css) {
                console.log(name);
                return hash(name.replace('\\', '')).slice(0, 6)
            }
        }
    }
}
