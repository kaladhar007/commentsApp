import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {list: [], name: '', description: ''}

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      list: prevState.list.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
    console.log('................name.......................')
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
    console.log('................description.......................')
  }

  deleteComment = id => {
    const {list} = this.state
    const filteredData = list.filter(each => each.id !== id)
    this.setState({
      list: filteredData,
    })
  }

  addComment = event => {
    console.log('....................addComment.................')
    event.preventDefault()
    const {name, description} = this.state
    const newObj = {
      id: uuidv4(),
      name,
      description,
      isFavorite: false,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newObj],
      name: '',
      description: '',
    }))
  }

  render() {
    const {name, description, list} = this.state

    return (
      <>
        <div className="page">
          <form>
            <div className="card">
              <h1>Comments</h1>
              <p>say something about 4.0 Technologies</p>

              <input
                onChange={this.onChangeName}
                type="text"
                placeholder="Your Name"
                value={name}
              />
              <textarea
                onChange={this.onChangeDescription}
                type="text-area"
                placeholder="Your Comment"
                className="text-area"
                value={description}
              ></textarea>
              <button onClick={this.addComment} type="submit">
                Add Comment
              </button>
            </div>
            <hr />
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="mainImage"
            alt="comments"
          />
        </div>
        <div>
          <p className="commentCount">
            {list.length}
            <span>comments</span>
          </p>
          <ul>
            {list.map(eachObj => (
              <CommentItem
                key={eachObj.id}
                obj={eachObj}
                onClickDeleteComment={this.deleteComment}
                toggleIsFavorite={this.toggleIsFavorite}
                initialContainerBackgroundClassNames={
                  this.initialContainerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default Comments
