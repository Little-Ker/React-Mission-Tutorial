import React from 'react'
import PropTypes from 'prop-types'
import NoteBlock from '../../../component/all/noteBlock'
import FinishStamp from '../finishStamp'
import Link from '../../../component/all/link'
import Mission from '../mission/Mission'
import styles from './missionCard.module.sass'

function MissionCard(props) {
  const { data, onChangeCheck, missionStatus } = props
  const { title, subTitle, content, resource } = data

  return (
    <div className={styles.missionCard}>
      <div className={styles.topCard}>
        <FinishStamp isFinish={missionStatus?.isFinish} />
        <p className={styles.title} data-swiper-parallax="-100">{`[ ${title} ]`}</p> 
        <p className={styles.subTitle} data-swiper-parallax="-200">{subTitle}</p>
        <div className={styles.skillList}>
          {content?.map(cur => (
            <p key={cur} className={styles.skill}>{cur}</p>
          ))}
        </div>
      </div>
      <div className={styles.bottomCard}>
        <NoteBlock
          title={'任務'}
          shadow
          content={<Mission
            data={data}
            onChangeCheck={onChangeCheck}
            missionStatus={missionStatus}
          />}
          style={{
            textAlign: 'left',
            fontSize: '16px',
            borderWidth: '2px',
          }} />
        <div className={styles.reference}>
          <p>{'參考資源 |'}</p>
          {resource?.map(cur => (
            <Link key={cur.text}  linkUrl={cur.url}  text={cur.text} /> 
          ))}
        </div> 
      </div>
    </div>
  )
}

MissionCard.propTypes = {
  data: PropTypes.object,
  onChangeCheck: PropTypes.func,
  missionStatus: PropTypes.object,
  index: PropTypes.number,
}
    
MissionCard.defaultProps = {
  data: {},
  onChangeCheck: () => {},
  missionStatus: {},
  index: 0,
}
          
export default MissionCard