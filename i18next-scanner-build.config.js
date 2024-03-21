const PACKAGE = require("./package.json"),
    FILE_VERSION = PACKAGE.version.replace(/\./g, "")

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
        lngs: ["en"], // supported languages
        defaultValue: null,
        func: {
            list: ["i18next.t", "i18n.t", "t"],
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        resource: {
            // the source path is relative to current working directory
            loadPath: "locales/{{lng}}.json",

            // the destination path is relative to your `gulp.dest()` path
            savePath: "public/locales/{{lng}}-" + FILE_VERSION + ".json",

            // Specify the number of space characters to use as white space to insert into the output JSON string for readability purpose.
            jsonIndent: 0,

            // Normalize line endings to '\r\n', '\r', '\n', or 'auto' for the current operating system. Defaults to '\n'.
            // Aliases: 'CRLF', 'CR', 'LF', 'crlf', 'cr', 'lf'
            lineEnding: ""
        }
    }
}
