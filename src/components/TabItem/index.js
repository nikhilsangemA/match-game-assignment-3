import './index.css'

const TabItem = props => {
  const {tabDetails, passTab} = props
  const {tabId, displayText} = tabDetails
  const changeTab = () => {
    passTab(tabId)
  }
  return (
    <li>
      <button type="button" className="btn-size" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
