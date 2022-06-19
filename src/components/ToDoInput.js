import React, {useState} from 'react'
import './ToDoInput.css'


function ToDoInput(props) {

    const [item, setItem] = useState('')

    function readInputHandlerVal(event) {
        setItem(event.target.value)
    }

    function FormSubmitHandler(event) {
        event.preventDefault()
        props.onGetData(item)
        setItem('')
    }

    return (
        <form className='form_input' onSubmit={FormSubmitHandler}>
            <div className='input__block'>
                <input 
                className='mainInput' 
                type="text" 
                value={item} 
                placeholder='Write here...' 
                onChange={readInputHandlerVal}/>
                <button type='submit' className='button-add'>Add</button>
            </div>
        </form>
    )
}

export default ToDoInput;
