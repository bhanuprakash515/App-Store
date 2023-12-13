import './index.css'

const AppItem = props => {
  const {appItems} = props
  const {imageUrl, appName} = appItems
  return (
    <li className="app-container">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
