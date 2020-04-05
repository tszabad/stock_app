import React from 'react'
import {Link} from 'react-router-dom'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({stocks}) => {
  return (
    <div className="project-list section">
      { stocks && stocks.map(stock => {
        return (
          <Link to={'/stock/' + stock.id} key={stock.id}>
          <ProjectSummary stock={stock} key={stock.id} handleDelete={props.handleDelete}/>
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjectList
