const config = require("./config");

module.exports = {
    ident: "postcss",
    sourceMap: config.isDev,
    plugins: [
        require("autoprefixer")({
            browsers: [
              "last 2 versions",
              "> 1%",
              "ie >= 9"
            ]
        })
    ]
};
