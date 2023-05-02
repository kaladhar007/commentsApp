import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {
    obj,
    onClickDeleteComment,
    toggleIsFavorite,
    initialContainerBackgroundClassNames,
  } = props
  const {id, name, description, isFavorite} = obj
  const firstLetter = name[0]

  const onclick = () => {
    onClickDeleteComment(id)
  }

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  const ImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div>
        <div className="secondDiv">
          <h1 className="firstName">{firstLetter}</h1>
          <h3 className="name">{name}</h3>
          <p className="date">{formatDistanceToNow(new Date())}</p>
        </div>
        <p className="description">{description}</p>

        <button
          type="button"
          onClick={onClickFavoriteIcon}
          className="btnForIcon"
        >
          <img src={ImgUrl} alt="like" />
        </button>
        <button
          type="button"
          onClick={onclick}
          className="btnForIcon"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
