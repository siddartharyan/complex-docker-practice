import React from 'react'
import {Link} from 'react-router-dom'
function Other(){
    return(
    <div>
        <div>
            I'm the other page
            <Link to="/">Go back to home page</Link>
        </div>
    </div>)
}
export default Other