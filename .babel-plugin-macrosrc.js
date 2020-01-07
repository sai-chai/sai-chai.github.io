const ifIsProd = process.env.NODE_ENV === "production";

module.exports = {
   styledComponents: {
      pure: ifIsProd,
      minify: ifIsProd,
      transpileTemplateLiterals: true,
      displayName: !ifIsProd,
   },
};
