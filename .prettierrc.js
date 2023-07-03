//文档https://prettier.io/docs/en/options.html
module.exports = {
  semi: true, // 句末打分号
  tabWidth: 4, // tab的宽度
  singleQuote: true, // 单引号
  // trailingComma: 'none', // 尾部不加逗号
  arrowParens: 'avoid', // 箭头函数单个参数时加括号
  printWidth: 120, // 到120列的时候自动换行
  bracketSpacing: true, // 花括号的空格 { a: 1 }
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  proseWrap: 'preserve', // Prettier会因为使用了一些折行敏感型的渲染器（如GitHub comment 和 BitBucket）而按照markdown文本样式进行折行，但在某些情况下，你可能只是希望这个文本在编译器或查看器中soft-wrapping（是当屏幕放不下时发生的软折行），所以这一参数允许设置为 " never "
  useTabs: false,
  quoteProps: 'as-needed',
  vueIndentScriptAndStyle: false,

  // JSX
  jsxBracketSameLine: false, // 是否把强制将jsx的括号放在一行
  jsxSingleQuote: false, // jsx的单引号

  // 感觉没什么用
  insertPragma: false, // 会在头部插入一行标识，这个页面已经格式化过了
  requirePragma: false, // 不需要自动在文件开头插入
  endOfLine: 'auto',
};
