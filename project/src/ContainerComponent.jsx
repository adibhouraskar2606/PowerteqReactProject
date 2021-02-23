import React, {Component} from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

class ContainerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
             isTableComponent : true
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        console.log("I am clicked")
        this.setState(prevState => {
            return {
                isTableComponent : !prevState.isTableComponent
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick = {this.handleChange}>This button changes between table view and form view</button>
                {(this.state.isTableComponent) ? <FormComponent /> : <TableComponent />}
            </div>
        )
    }
}
export default ContainerComponent;