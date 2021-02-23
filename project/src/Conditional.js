import React from "react"

function Conditional(props) {
    return(
        <div>
            {props.response.length === 0 ? <h3>No user found</h3> : <h3>{JSON.stringify(props.response[0])}</h3>}
        </div>
    )
}

export default Conditional 