import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
const ProjectDetails = props => {
  const { project } = props
  return (
    <div className='container section project-details'>
      {project
        ? <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>
              {project.title}
            </span>
            <p>
              {project.content}
            </p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>
                Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>2nd September, 2 am</div>
          </div>
        </div>
        : <div className='container center'>
          <p>Loading content</p>
        </div>}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params
  const { projects } = state.firestore.data
  const project = projects && projects[id]
  return {
    project
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails)
