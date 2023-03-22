import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updatedSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    updatedSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <div className="suggestion-container">
        <p className="title">{suggestion}</p>
        <button type="button" onClick={onClickArrow} className="arrow-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
