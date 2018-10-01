import React from 'react'

const ProjectDetails = props => {
  const { id } = props.match.params
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>
            Project Title - {id}
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem eligendi molestias dolorem voluptate ipsam quibusdam sint deleniti. Eveniet, incidunt aliquam. Rem sed in ipsam dolore ad sint tempora unde.
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2 am</div>
        </div>
      </div>

    </div>
  )
}

export default ProjectDetails
