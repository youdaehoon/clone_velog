import React from 'react'

interface IPros{
    data?:string
}
const Test :React.FC<IPros> = ({data}) => {
  return (
    <div>{data}</div>
  )
}

export default Test