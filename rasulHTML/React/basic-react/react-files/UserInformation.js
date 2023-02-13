import React, { useContext } from 'react'
import MyDataContext from './dataContext'

export default function UserInformation() {
  const {someValue} = useContext(MyDataContext)  
  return (
    <div>UserInformation - {someValue}</div>
  )
}
