module.exports = {
    input: ["src/**/*.{js,jsx,ts,tsx}"],
    output: "./",
    options: {
        sort: true,
        debug: false,
        func: {
            list: ["i18next.t", "i18n.t"],
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        trans: {
            component: "Trans",
            extensions: []
        },
        removeUnusedKeys: true,
        lngs: ["en"], // supported languages
        context: (lng, ns, key, options) => true,
        resource: {
            // the source path is relative to current working directory
            loadPath: "locales/{{lng}}.json",
            // the destination path is relative to your `gulp.dest()` path
            savePath: "locales/{{lng}}.json",
            // Specify the number of space characters to use as white space to insert into the output JSON string for readability purpose.
            jsonIndent: 4
        }
    }
}
