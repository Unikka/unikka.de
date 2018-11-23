const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    require('postcss-nested')(),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
})