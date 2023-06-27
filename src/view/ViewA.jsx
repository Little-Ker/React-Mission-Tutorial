import React, { useEffect } from "react"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import TodoList from '../component/test/TodoList'

const ReduxEX = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2 style={{marginTop: '30px'}}>Redux 讀改資料</h2>
            <TodoList />
            <button onClick={() => dispatch(addTodo('test'))}>add</button>
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