const data = {
  // 目標
  target: [{
    title: '自我介紹',
    content: ['如：出生地、成長環境、興趣專長、 個人特色等等'],
  }, {
    title: '學經歷',
    content: ['如：畢業學校、特殊經歷(交換學生、遊學打工，工讀經驗等)'],
  }, {
    title: '工作經歷',
    content: ['如：第一份工作、前幾份工作、這幾個月在弈樂做了些什麼'],
  }, {
    title: '目標',
    content: [
      '短期(例如：學好 React、學習周邊相關技能及工具等等)',
      '中期(例如：能夠獨立完成維護工作、學會 JS 3D等等)',
      '長期(例如：寫出專屬於自己的前端套件、成為資深研發工程師、財富自由等等)',
    ],
  }],

  // 前端任務
  mission: [{
    title: 'Chapter 1',
    subTitle: 'CRA',
    content: [
      '利用指令建立新專案',
      '了解專案結構',
      '安裝依賴套件的方法',
      '使用 sass',
    ],
    missions: ['透過 CRA 建立一個你的專案'],
    resource: [{
      text: 'Create React App',
      url: 'https://create-react-app.dev/',
    }],
  }, {
    title: 'Chapter 2',
    subTitle: 'Eslint',
    content: [
      'VS Code 安裝 Eslint 工具',
      '配置 vscode 的 Eslint 相關設定',
      '撰寫 .eslintrc.json (配合 react)',
    ],
    missions: [
      'VS Code 配合 Eslint 設定 autofix on save', 
      '用 google 的風格設定延伸配置 eslintrc 設定檔(e.g. 程式碼不使用分號結尾)',
      '讓專案跑起來不會有任何 eslint compile error',
    ],
    resource: [{
      text: 'ESLint',
      url: 'https://eslint.org/',
    }],
  }, {
    title: 'Chapter 3',
    subTitle: 'Component',
    content: [
      '創建你自己定義的 component',
      '參數傳遞與型別定義',
      '了解元件狀態特性',
    ],
    missions: ['自我介紹頁面中第一個想到的是什麼？把它元件化吧'],
    resource: [{
      text: 'JSX',
      url: 'https://zh-hant.reactjs.org/docs/introducing-jsx.html',
    }, {
      text: 'Prop',
      url: 'https://zh-hant.reactjs.org/docs/components-and-props.html',
    }, {
      text: 'State',
      url: 'https://zh-hant.reactjs.org/docs/state-and-lifecycle.html',
    }, {
      text: 'Prop-types',
      url: 'https://zh-hant.reactjs.org/docs/typechecking-with-proptypes.html',
    }],
  }, {
    title: 'Chapter 4',
    subTitle: 'Hooks',
    content: [
      'useState',
      'useEffect',
      'useMemo',
      'useCallback',
      'useContext',
      'useRef',
    ],
    missions: [
      '在定義好的 component 裡使用 hook ',
      '試寫一個自己定義的 hook',
    ],
    resource: [{
      text: 'Hook',
      url: 'https://zh-hant.reactjs.org/docs/hooks-intro.html',
    }],
  }, {
    title: 'Chapter 5',
    subTitle: 'Material-UI',
    content: [
      '大致了解 Material UI 有哪些經典的 Components 可以使用',
      '學習查找 Material UI 的展示及 API 說明',
      '了解 Theme 系統',
      '學習 Mui v5 新增的 sx',
    ],
    missions: [
      '配置至少 3 個 Material UI 元件在自介網站裡',
      '透過 theme 修改出主題配色',
    ],
    resource: [{
      text: 'Material-UI',
      url: 'https://mui.com/',
    }],
  }],
}
  
export default data
  