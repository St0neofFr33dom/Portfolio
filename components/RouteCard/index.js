import React from 'react'

const RouteCard = ({title,image}) => {
    return (
        <div style={{backgroundImage: image}}>
            <h2>{title}</h2>
        </div>
    )
}

export default RouteCard