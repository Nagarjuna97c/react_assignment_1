import './HistoryItem.css'

const HistoryItem = props => {
  const {item, deleteItem} = props

  const deleteHistoryItem = () => {
    console.log(item.id)
    deleteItem(item.id)
  }
  return (
    <li className="history-item-container">
      <div className="history-item-data-container">
        <p className="para time">{item.timeAccessed}</p>
        <img className="image2" alt="domain logo" src={item.logoUrl} />
        <p className="para">{item.title}</p>
        <p className="para1">{item.domainUrl}</p>
      </div>
      <button className="image3" onClick={deleteHistoryItem} testId="delete">
        <img
          alt="delete icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
