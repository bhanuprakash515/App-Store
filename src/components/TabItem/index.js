import './index.css'

const TabItem = props => {
  const {itemDetails, updateTabElement, isActive} = props
  const {displayText, tabId} = itemDetails
  const onClickTab = () => {
    updateTabElement(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-list-container">
      <button
        className={`button ${activeTabClassName}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
