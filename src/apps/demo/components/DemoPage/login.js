import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './login.css';
import LoginImage from './images/login-uttower-resized.png';

export default class Login extends Component {
    
    styles = {
        minHeight: `100% !important` ,
        height: `100%`,
        // backgroundImage: `url(${LoginImage})`,
        backgroundImage:  "url(" + "https://media-exp1.licdn.com/dms/image/C511BAQExlCllFZktqw/company-background_10000/0?e=2159024400&v=beta&t=tOgyi4XqNBRW5VbDMHzALikIkebYoyz_H9HiU2h-BJI" + ")",
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        opacity: 0.9,
        overflowY: `hidden`,
         width: `100%`,
          
    }
    constructor(props){
        super(props)
        let loggedIn = false;
        this.state={
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault();
        const { username, password} = this.state
        // login magic
        if(username==="abc@example.com" && password==="abcdef"){
            localStorage.setItem("token", "qwertyuioghjghp")
            this.setState({
                loggedIn: true
            })
        }
    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to="/user" />
        }
        return(
            // <div>
            //     <h1> Login Page</h1>
            //     <form onSubmit={this.submitForm}>
            //         <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
            //         <br />
            //         <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
            //         <br />
            //         <input type="submit" />

            //     </form>
            // </div>

            <div  style ={this.styles}>
             <div className="inner-div">
                 <h4>Log-in or Sign-up</h4>
                 <form onSubmit={this.submitForm} className="form-style">
                     <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} className="input-style"/>
                     <br />
                     <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} className="input-style"/>
                     <br />
                     <button type="submit" className="submit-style">Submit</button>
 
                 </form>
             </div>
         </div>
        )
    }
}