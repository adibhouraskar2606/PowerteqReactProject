import React, {Component} from 'react';
import {PostData} from './PostData' 
import Conditional from './Conditional'


class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name : "",
            email : "",
            clicked : false,
            responseJSON : []
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }    
    login(e){
        e.preventDefault()
        console.log("in login function",this.state)
        PostData(this.state).then ((result) =>{
            this.setState({
                responseJSON : result,
                clicked : true
            })
            console.log("in login after post data ", this.state)
        })
        

    }

    onChange(elem){
        this.setState({
            [elem.target.name] : elem.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <div>
                    <label>Your Name: </label>
                    <input label="Your Name" type="text" name="name" onChange = {this.onChange} />
                </div>
                <div>
                    <label>Your Email: </label>
                    <input label="Your Email" type="text" name="email" onChange = {this.onChange}/>
                </div>
                <div>
                    <input type="submit" value="Submit" onClick = {this.login} />
                    {this.state.clicked ? <Conditional response = {this.state.responseJSON}/> : null}
                </div>
            </form>
        )
    }
}
export default FormComponent;