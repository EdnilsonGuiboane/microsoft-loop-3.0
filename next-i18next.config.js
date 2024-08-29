const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt", "es"], // Adicione os idiomas suportados
  },
  localePath: path.resolve("./public/locales"),
};
