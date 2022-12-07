import React from 'react'
import Tables from '../../components/Table'
import Timer from '../../components/Timer'
import './style.scss'

const AllRate = () => {
  return (
    <>
    <div className='wrapper GlobaWrapper'>
      <h2><Timer color={"black"}/></h2>
      <div className='table'>
      <h3>All users score</h3>
    <Tables/>
      </div>
    </div>
    </>
  )
}

export default AllRate