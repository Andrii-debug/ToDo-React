import React, {useState, useEffect} from "react";
import './App.css'
import ToDoInput from "./ToDoInput";
import Task from "./Task";

function App(props) {

    const [item, setItem] = useState([])
    

   

    useEffect(() => {
        const storedTextInfo = JSON.parse(localStorage.getItem('item'))
        if (storedTextInfo !== null && storedTextInfo.length >= 0  ) {
            setItem(storedTextInfo)
            
        }


    }, [])



    function getVal(InputData) {
        if (InputData.trim().length > 0) {
            setItem((ObjData) => {
                const updateTask = [...ObjData]
                
                updateTask.unshift({
                    text: InputData, id: Math.random().toString(),
                  
                  
                })
               
                localStorage.setItem('item', JSON.stringify(updateTask) )

                return updateTask
            })
            
        } else {
           alert('Write Task Please!')
        }
        
    }



    


    function deleteTaskHundler(InputID) {
        console.log(InputID);
        setItem((InputData) => {
            console.log('InputData: ', InputData);
            const updateTask = InputData.filter((item) => item.id !== InputID)
            localStorage.setItem('item', JSON.stringify(updateTask))
            return updateTask
        })
    }
    
    return (
        <div className="container">
            <ToDoInput onGetData={getVal}/>
            <div className="task_wrapper">
                {item.map((item) => (
                    <Task key={item.id} id={item.id}  onDelete={deleteTaskHundler} >
                        {item.text} 
                    </Task>
                ))}
                
            </div>
            
        </div>

    )
}


export default App;