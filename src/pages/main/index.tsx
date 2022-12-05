import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const Main : React.FC = () => {
    const select=useAppSelector(state=>state.posts)
    console.log(select)
  return (
    <div>
    </div>
  )
}

export default Main