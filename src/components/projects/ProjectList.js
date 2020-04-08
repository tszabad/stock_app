import React from 'react'
import {Link} from 'react-router-dom'

import ProjectSummary from './ProjectSummary'

const ProjectList = ( props) => {

  const {stocks} =props

  
  
  return (
    <div className="project-list section">
      { stocks && stocks.map(stock => {
        return (
          <Link to={'/stock/' + stock.id} key={stock.id}>
          <ProjectSummary stock={stock}  handleDelete={props.handleDelete}/>
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjectList
