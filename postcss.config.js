module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 10, // 1rem = 10px，根据您的设计稿和需求修改
      propList: ['*'], // 要转换为 REM 的属性，这里表示所有属性都转换
      selectorBlackList: [/^html$/],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i
    },
  },
}
