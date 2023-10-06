import React from 'react'

const BreadCrum = ({title, name, content}) => {
  return (
    <div className="row page-titles mx-0">
    <div className="col-lg-12 p-md-0">
      <h4 className="text-primary">
        {title} <span className="names">{name}</span>
      </h4>
      <p className="mb-0">
       {content}
      </p>
    </div>
  </div>
  )
}

export default BreadCrum