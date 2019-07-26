// Higher Order Component (HOC) - A component (HOC) that renders another component
import React from 'react'
import ReactDom from 'react-dom'

const Info = (props) =>{
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
}

const withAdminWarning = (WrappedComponent) =>{
return (props) =>{
    <div>
   {props.admin && <p>This is private info. Please don't share!</p> }
    <WrappedComponent {...props}/>
    </div>
}
}

// requireAuthentication
const requireAuthenication  = (wrappedComponent) => {
    return (props) =>(
    <div>
        { props.isAuthenticated ? <WrappedComponent {...props} /> :  <p> please login to view the info</p>}
       
    </div>
    )
    
}


const AdminInfo = withAdminWarning(info)
const AuthInfo = requireAuthenication(info)
// ReactDOM.render(<Info isAdmin = {true} info="There are details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated = {false} info="There are details" />, document.getElementById('app'))