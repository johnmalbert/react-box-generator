import React from 'react'

const Form = (props) => {
    const { changeHandler, submitHandler, color } = props;
    return (
        <div>
            <h1>Start creating beautiful boxes!</h1>
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="color">Color: </label>
                    <input type="text" name="colorToAdd" onChange={ changeHandler } value={color.colorToAdd}/>
                </div>
                <div>
                    <label htmlFor="height">Height: (in pixels)</label>
                    <input type="number" name="height" onChange={ changeHandler } value={color.height} placeholder="Enter number in pixels"/>
                </div>
                <div>
                    <label htmlFor="width">Width: (in pixels)</label>
                    <input type="number" name="width" onChange={ changeHandler } value={color.width} placeholder="Enter number in pixels"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
