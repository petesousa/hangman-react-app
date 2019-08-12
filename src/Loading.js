import React from 'react'
import Proptypes from 'prop-types'

export default function Loading({ theme }){
  return <div className={`loading${theme}`}><i className="fas fa-spinner fa-spin"></i></div>
}

Loading.propTypes = {
  theme: Proptypes.string.isRequired
}