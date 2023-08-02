import React, {
  useCallback
} from 'react'
import CheckBox from '../../../component/all/checkBox'
import PropTypes from 'prop-types'
import styles from './mission.module.sass'
  
function Mission(props) {
  const { data, onChangeCheck, missionStatus } = props
  const { title, missions } = data
  
  const checkValue = useCallback((index) => {
    const list = missionStatus?.Missions
    return (list) ? list[index] : false
  }, [missionStatus])

  return (
    <div className={styles.mission}>
      {missions?.map((cur, index) => (
        <div key={cur} className={styles.checkBox}>
          <CheckBox
            text={cur}
            style={{
              fontSize: '14px',
            }}
            circleStyle={{
              width: '14px',
              height: '14px',
            }}
            checkStyle={{
              right: '-1px',
              width: '6px',
              height: '15px',
            }}
            isCheckChangeColor
            check={checkValue(index)}
            setCheck={() => onChangeCheck(title, index)}
          /> 
        </div>
      ))}
    </div>   
  )
}
  
Mission.propTypes = {
  data: PropTypes.object,
  onChangeCheck: PropTypes.func,
  missionStatus: PropTypes.object,
}
      
Mission.defaultProps = {
  data: {},
  onChangeCheck: () => {},
  missionStatus: {},
}
            
export default Mission