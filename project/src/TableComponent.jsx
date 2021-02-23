import React, {Component} from 'react';



class TableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            albums : []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    albums : data 
                })
                console.log("album data ",this.state)
            })
    }

    render() { 
        var {albums} = this.state
        return(
        <table>
            <th>HEADER</th>
            <tbody>
                <tr> Row 1
                    <td>ID</td>
                    <td>ALBUM TITLE</td>
                    <td>OWNER USER ID</td>
                </tr>
                    {
                        albums.map(item => (
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.userId}</td>
                            </tr>
                        )
                        
                        )
                    }
            </tbody>
        </table>
        )
    }
}
export default TableComponent;