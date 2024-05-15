const Notification = props => {
  const {containerName, className} = props
  return (<div>
  <img />
  <p className='{`containerName ${className}`}'>{containerName}</p>
  </div>
  )
}

const element = (
  //  Write your code here.
  <div className='main-container'>
    <h1 className='heading'>Notifications</h1>
    <Notification className='information' containerName='Information message' />
    <Notification className='success' containerName='Success message' />
    <Notification className='warning' containerName='Warning message' />
    <Notification className='error' containerName='Error message' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
