import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    console.log('error ', error.message);
    return (
        <h1>An Error Occurred! </h1>
    )
}
 
export default Error