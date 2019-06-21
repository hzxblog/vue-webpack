module.exports = {
  exclude: [/node_modules/],
  presets: [
    [
      "@babel/preset-env",
      {
        targets :{
          "browsers":[">1%","last 2 versions"]
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-transform-runtime", { corejs: 2 }]
  ]
};
