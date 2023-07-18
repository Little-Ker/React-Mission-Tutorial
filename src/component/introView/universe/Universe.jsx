import React from 'react'
import {
  MouseParallax 
} from 'react-just-parallax'
import {
  Parallax, ParallaxLayer
} from '@react-spring/parallax'
import clsx from 'clsx'
import data from '../data'
import styles from './universe.module.sass'
  
import rocket from '../../../assets/image/intro/rocket.svg'
import star from '../../../assets/image/intro/star.svg'
import telescope from '../../../assets/image/intro/telescope.svg'

function Universe() {
  return (
    <div className={styles.universeBg}>
      <Parallax pages={2.3}>
        <ParallaxLayer offset={0.2} speed={0.7}>
          <img src={rocket} className={clsx('img-fit', styles.rocket, styles.bgDecoration)}  alt="" />
        </ParallaxLayer>
        <img src={telescope} className={clsx('img-fit', styles.telescope, styles.bgDecoration)}  alt="" />
        {data.stars.map((cur, index) => (
          <ParallaxLayer key={index} offset={cur.offset} speed={cur.speed}>
            <img src={star} style={{
              left: cur.left,
              top: cur.top,
              transform: `rotate(${cur.rotate}deg) scale(${cur.scale})`,
            }}
            className={clsx('img-fit', styles.star, styles.bgDecoration)}  alt="" />
          </ParallaxLayer>
        ))}
        <div>
          {data.planets.map(cur => (
            <MouseParallax key={cur.title}>
              <div className={styles.planetBlock}>
                <div className={styles.planet}>
                  <p className={styles.title}>{cur.title}</p>
                  <img src={cur.img}
                    style={{ width: cur.width }}
                    className={clsx('img-fit', styles.planet)}  alt=""
                  />
                </div>
                <div className={styles.membersList}>
                  {cur.members?.map(name => (
                    <div key={name} className={styles.member} style={{background: cur.color}}>{name}</div>  
                  ))}
                </div>
              </div>
            </MouseParallax> 
          ))}
        </div>
      </Parallax>
    </div>
  )
}
  
export default Universe