import cg001 from '../../assets/image/intro/cg001.svg'
import cg002 from '../../assets/image/intro/cg002.svg'
import scg from '../../assets/image/intro/scg.svg'

const data = {
  // 星球
  planets: [{
    title: '星球A',
    img: cg001,
    members: ['Vivi', 'Vivi', 'Vivi'],
    color: '#608CBE',
    width: '250px',
  }, {
    title: '星球B',
    img: cg002,
    members: ['Vivi', 'Vivi'],
    color: '#BE8260',
    width: '250px',
  }, {
    title: '星球C',
    img: scg,
    members: ['Vivi', 'Vivi'],
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
  