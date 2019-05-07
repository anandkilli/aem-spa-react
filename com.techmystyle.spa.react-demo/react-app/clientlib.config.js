module.exports = {
  // default working directory (can be changed per 'cwd' in every asset option)
  context: __dirname,

  // path to the clientlib root folder (output)
  clientLibRoot:
    "./../ui.apps/src/main/content/jcr_root/apps/react-demo/clientlibs",

  libs: {
    name: "clientlib-react-demo",
    allowProxy: true,
    categories: ["clientlib-react-demo"],
    jsProcessor: ["min:gcc"],
    serializationFormat: "xml",
    assets: {
      js: ["dist/**/*.js"],
      css: ["dist/**/*.css"]
    }
  }
};
