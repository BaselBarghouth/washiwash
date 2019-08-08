import React from 'react';
import Login from '../../Components/LoginForm/Login.js'
class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
  render(){
      return(
          <div>
         
              <Login {...this.props} />
          </div>
      )
  }  
}
export default LandingPage;