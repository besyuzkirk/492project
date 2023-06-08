import React from 'react'
import ReactLoading from 'react-loading';
import './Loading.scss' 

function Loading() {
  return (
    <ReactLoading className='loading' type={'spinningBubbles'} color={"red"} height={'20%'} width={'20%'}  />
  )
}

export default Loading