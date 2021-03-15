import React from 'react'

const Colorbox = (props) => {
    const { colorsList } = props;
    return (
        <div>
            <h1>Boxes so far:</h1>
            <ul>{
                colorsList.map( (item, i) =>
                <li key={i}><div className="box" style={{backgroundColor: (item.colorToAdd), height: (item.height+ "px"), width: (item.width+"px")}}>{item.height} X {item.width}</div></li>
                )
            }</ul>
        </div>
    )
}

export default Colorbox
