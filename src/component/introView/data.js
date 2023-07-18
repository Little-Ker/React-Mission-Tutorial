import cg001 from '../../assets/image/intro/cg001.svg'
import cg002 from '../../assets/image/intro/cg002.svg'
import scg from '../../assets/image/intro/scg.svg'

const data = {
  // 目標
  target: [{
    title: '自我介紹',
    content: ['如：出生地、成長環境、興趣專長、 個人特色等等'],
  }, {
    title: '學經歷',
    content: ['如：畢業學校、特殊經歷(交換學生、遊學打工，工讀經驗等'],
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

  // 星球
  planets: [{
    title: '808 / CG001',
    img: cg001,
    members: ['Ken', 'Kiki', 'Peggy', '小嫺'],
    color: '#608CBE',
    width: '250px',
  }, {
    title: 'GBoa / CG002',
    img: cg002,
    members: ['力維', '美寶', 'Carol'],
    color: '#BE8260',
    width: '250px',
  }, {
    title: 'Pocket / SCG',
    img: scg,
    members: ['Vivi', '魯斯'],
    color: '#6BA14E',
    width: '300px',
  }],
  
  // 星星
  stars: [{
    offset: 0.2,
    speed: 0.7,
    left: '350px',
    top: '120px',
    rotate: -25,
    scale: 1,
  }, {
    offset: 0.6,
    speed: 0.3,
    left: '50px',
    top: '250px',
    rotate: 35,
    scale: 0.8,
  }, {
    offset: 1,
    speed: 0.3,
    left: '340px',
    top: '320px',
    rotate: -15,
    scale: 0.9,
  }, {
    offset: 1,
    speed: 0.5,
    left: '110px',
    top: '520px',
    rotate: 12,
    scale: 0.9,
  }, {
    offset: 1,
    speed: 0.5,
    left: '310px',
    top: '680px',
    rotate: 12,
    scale: 0.9,
  }],
}
  
export default data
  