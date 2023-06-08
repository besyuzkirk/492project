import React from 'react'
import './ActivityLayout.scss'

function ActivityLayout(props) {
  return (
    <div className='activity-layout'>{props.children}</div>
  )
}

export default ActivityLayout