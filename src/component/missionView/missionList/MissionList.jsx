import React, {
  useCallback, useEffect, useState, useMemo
} from 'react'
import CheckBox from '../../../component/all/checkBox'
import ProgressBar from '../../../component/all/progressBar'
import IconButton from '../../all/iconButton/IconButton'
import Card from '../../all/card/Card'
import MissionCard from '../missionCard/MissionCard'
import MissionNavigation from '../missionNavigation/MissionNavigation'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import FilterListIcon from '@mui/icons-material/FilterList'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import {
  Swiper, SwiperSlide 
} from 'swiper/react'
import {
  Pagination, Navigation
} from 'swiper/modules'
import clsx from 'clsx'
import data from '../data'
import styles from './missionList.module.sass'

function MissionList() {
  const [swiper, setSwiper] = useState(null)

  const [openMissionNavigation, setOpenMissionNavigation] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [checkTypeList, setCheckTypeList] = useState({
    undone: true,
    complete: true,
  })

  const [checkMissionList, setCheckMissionList] = useState({})

  const onResetTypeCheck = useCallback(() => {
    setOpenFilter(true)
    setCheckTypeList(() => {
      return {
        undone: true,
        complete: true,
      }
    })
  }, [])

  const onChangeTypeCheck = useCallback((type) => {
    setCheckTypeList((prev) => {
      return {
        undone: (type === 'undone') ? !prev.undone : prev.undone,
        complete: (type === 'complete') ? !prev.complete : prev.complete,
      }
    })
  }, [])

  const onClickShowFilter = useCallback(() => {
    setOpenFilter(!openFilter)
  }, [openFilter])

  const onChangeCheck = useCallback((chapter, index) => {
    setCheckMissionList((prev) => {
      const checkObj = { ...prev }
      const missions = checkObj[chapter]?.Missions
      missions[index] = !missions[index]
      checkObj[chapter].isFinish = missions.filter(cur => !cur).length === 0
      return checkObj
    })
  }, [])
  
  const finishCount = useMemo(() => {
    let missionCount = 0
    Object.keys(checkMissionList).forEach((cur) => {
      missionCount += checkMissionList[cur]?.Missions?.filter(cur => cur === true)?.length
    })
    return missionCount
  }, [checkMissionList])

  const totalCount = useMemo(() => {
    let missionCount = 0
    Object.keys(checkMissionList).forEach((cur) => {
      missionCount += checkMissionList[cur]?.Missions?.length
    })
    return missionCount
  }, [checkMissionList])

  const showMissionList = useMemo(() => {
    const missionList = []
    Object.keys(checkMissionList)?.forEach((cur, index) => {
      const isFinish = checkMissionList[cur].isFinish
      if ((checkTypeList.undone && !isFinish) || (checkTypeList.complete && isFinish)) {
        missionList.push(data.mission[index]) 
      }
    })
    return missionList
  }, [checkMissionList, checkTypeList])

  useEffect(() => {
    const obj = {}
    data.mission.forEach((cur) => {
      obj[cur.title] = {
        Missions: cur.missions.map(() => false),
        isFinish: false,
      }
    })
    setCheckMissionList(obj)
  }, [])

  return (
    <div className={styles.missionList}>
      <div className={styles.buttonList}>
        <div className={styles.filterBtn}>
          <div className={styles.filterOverlay}>
            <div className={clsx(styles.filter, openFilter && styles.showFilter)}>
              <p className={styles.title}>{'顯示任務類型'}</p>
              <CheckBox
                check={checkTypeList.undone}
                setCheck={() => onChangeTypeCheck('undone')}
                text={'未完成'}
                style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              />
              <CheckBox
                check={checkTypeList.complete}
                setCheck={() => onChangeTypeCheck('complete')}
                text={'已完成'}
                style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              />
            </div>
          </div>
          <IconButton
            onClickFn={onClickShowFilter}
            icon={<FilterListIcon />}
            tipText={'顯示任務類型設定'}
          />
        </div>
        <IconButton
          onClickFn={() => setOpenMissionNavigation(true)}
          icon={<FormatListNumberedIcon />}
          tipText={'顯示全任務清單'}
        />
      </div>
      <div className={styles.missionSwiper}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          onSwiper={setSwiper}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<a class="${className}"></a>`
            },
          }}
          navigation={{
            prevEl: '#prevBtn',
            nextEl: '#nextBtn',
          }}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          {showMissionList.map((cur, index) => (
            <SwiperSlide
              key={cur.title}
              className={clsx(styles.swiperSlide)}
              id={(checkMissionList[cur.title]?.isFinish && checkTypeList.complete) ? 'clear' : 'show'}
            >
              <Card
                content={
                  <MissionCard
                    data={cur}
                    missionStatus={checkMissionList[cur.title]}
                    onChangeCheck={onChangeCheck}
                  />
                }
                style={{
                  width: '340px',
                  maxHeight: '500px',
                  minHeight: '500px',
                  marginBottom: '3.5rem',
                  overflow: 'hidden auto',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <a id={'prevBtn'} className={styles.swiperButton}>
          <ArrowBackIosIcon fontSize='large' />
        </a>
        <a id={'nextBtn'} className={clsx(styles.swiperButton, styles.swiperNextBtn)}>
          <ArrowBackIosIcon fontSize='large' />
        </a>
      </div>
      <MissionNavigation
        swiper={swiper}
        openNavigation={openMissionNavigation}
        setOpenNavigation={setOpenMissionNavigation}
        onResetTypeCheck={onResetTypeCheck}
      />
      <ProgressBar
        finishCount={finishCount}
        totalCount={totalCount}
      />
    </div>
  )
}
        
export default MissionList