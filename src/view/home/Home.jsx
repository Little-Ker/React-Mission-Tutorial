import React, {
  useCallback, useState 
} from 'react'
import Button from '../../component/all/button/Button'
import Card from '../../component/all/card/Card'
import NoteBlock from '../../component/all/noteBlock/NoteBlock'
import CheckBox from '../../component/all/checkBox/CheckBox'
import Link from '../../component/all/link/Link'
import IconButton from '../../component/all/iconButton/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const Home = () => {
  const imgTest = useCallback((size) => {
    console.log('size', size)
    return (
      <img src="https://d1dwq032kyr03c.cloudfront.net/upload/images/20141023/2014102323190254491c6691dfd_resize_600.jpg" width={size} height={size} alt="" />
    )
  }, [])

  const [check, setCheck] = useState(false)
  return (
    <div>
      <h1>Home</h1>
      {imgTest('50px')}
      <NoteBlock
        title={'title'}
        content={imgTest('150px')}
        shadow
        isCircleDecoration
        icon={<CloseIcon />}
      />
      <CheckBox
        text={'test!!!'}
        check={check}
        setCheck={setCheck}
        isCheckChangeColor
      />
      <Link
        linkUrl={''}
        text={'test'}
      />
      <Button
        img={imgTest('50px')}
        text={'Next'}
        height={'80px'}
        icon={<KeyboardArrowRightIcon />}
      />
      <IconButton
        icon={<KeyboardArrowRightIcon />}
      />
      <Card
        height={'300px'}
        width={'240px'}
        content={imgTest('150px')}
      />
    </div>
  )
}

export default Home