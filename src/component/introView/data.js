import cg001 from '../../assets/image/intro/cg001.svg'
import cg002 from '../../assets/image/intro/cg002.svg'
import scg from '../../assets/image/intro/scg.svg'

const data = {
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
    members: [ '西西', 'Vivi', '魯斯'],
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
  