import {
  React, useEffect 
} from 'react'
import {
  useSelector, useDispatch 
} from 'react-redux'
import {
  fetchTitleData 
} from '../redux/todoAxiosSlice'

const TodoAxiosList = () => {
  const dispatch = useDispatch()
  const titleDate = useSelector(state => state.todoAxios.titleData)// <-- 拿取資料

  useEffect(() => {
    dispatch(fetchTitleData())
  }, [dispatch])

  return (
    <ul>
      <h2 style={{marginTop: '30px'}}>Redux - 使用 axios 讀取資料</h2>
      {titleDate.map((val, index) => (
        <li key={index}>{val.title} : {val.txt}</li>
      ))}
    </ul>
  )
}

const ViewB = () => {
  return (
    <>
      <h1>ViewB</h1>
      <TodoAxiosList />
    </>
  )
}

export default ViewB