import React, {
  useEffect 
} from 'react'
import axios from 'axios'
import {
  useDispatch 
} from 'react-redux'
import {
  addTodo 
} from '../redux/todoSlice'
import TodoList from '../component/test/TodoList'
import Button from '../component/button/Button'
import BookCard from '../component/bookCard/BookCard'

const ReduxEX = () => {
  const dispatch = useDispatch()

  const onClickTest = () => {
    console.log('test')
  }

  return (
    <div>
      <h2 style={{marginTop: '30px'}}>Redux 讀改資料</h2>
      <TodoList />
      <button onClick={() => dispatch(addTodo('test'))}>add</button>
      <Button title={'網頁設計'} onClickFn={onClickTest} />
      <BookCard /> 
            
    </div>
  )
}

const AxiosEx = () => {
  const [data, setData] = React.useState([])

  useEffect(() => {
    axios.get('/data/dataList.json').then((response) => {
      setData(response.data.titleData)
    })
  }, [])

  return (
    <div>
      <h2 style={{marginTop: '30px'}}>Axios</h2>
      {data.map((item, index) => (
        <p key={index}>{item.title} : {item.txt}</p>
      ))}
    </div>
  )
}

const ViewA = () => {
  return (
    <>
      <h1>ViewA</h1>
      <AxiosEx />
      <ReduxEX />
    </>
  )
}

export default ViewA