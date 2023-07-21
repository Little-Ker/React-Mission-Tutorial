import React, {
  useCallback, useEffect
} from 'react'
import AOS from 'aos'
import clsx from 'clsx'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import data from './data'
import styles from './resourceList.module.sass'

function ResourceList() {
  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  const onClickFn = useCallback((url) => {
    window.open(url)
  }, [])

  return (
    <div className={styles.resourceList}>
      {data.list.map((cur, index) => (
        <div key={cur.title} data-aos="fade-right" data-aos-delay={150 * index}>
          <a className={styles.resource}>
            <div className={styles.button} onClick={() => onClickFn(cur.url)}>
              <div className={styles.btnBg}></div>
              <div className={clsx(styles.btnTop, styles.iconPos)}>
                <div>
                  <div className={styles.img}>
                    <img src={cur.logo} height={'20px'} style={{marginTop: '.4rem'}}  alt="" />
                  </div>
                  <p>{cur.title}</p>
                </div>
                <div className={styles.icon}>
                  <ArrowCircleUpIcon fontSize={'large'} sx={{transform: 'rotate(90deg)'}} />
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}  
    </div>
  )
}
    
export default ResourceList