import PropTypes from 'prop-types'
import './task.css'

const Task = (props) => {
  return (
    <div className="task-task">
      <span className="task-issue Heading3">
        <span>
          Diseño de Footer
        </span>
      </span>
      <span className="task-team Body3">
        <span>Diseño UX/UI</span>
      </span>
      <div className="task-collaborators">
        <img
          alt="collaborator image"
          src={props.collaboratorImageSrc}
          className="task-collaborator-image"
        />
        <img
          alt="collaborator image"
          src={props.collaboratorImageSrc1}
          className="task-collaborator-image1"
        />
      </div>
      <div className="task-container">
        <div className="task-status">
          <div className="task-in-progress"></div>
          <span className="task-text3 Label1">
            <span>En curso</span>
          </span>
        </div>
        <div className="task-container1">
          <img
            alt="message-icon"
            src="/assets/message-icon.svg"
            className="task-message-icon"
          />
          <span className="task-text5 Heading3">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

Task.defaultProps = {
  text: '3',
  collaboratorImageSrc: '/external/collaborator-image2-200h.png',
  collaboratorImageSrc1: '/external/collaborator-image3-200h.png',
}

Task.propTypes = {
  text: PropTypes.string,
  collaboratorImageSrc: PropTypes.string,
  collaboratorImageSrc1: PropTypes.string,
}

export default Task
