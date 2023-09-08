import { useState } from "react";
import rantsService from "../services/rants"


const CreateRant = () => {

    const [content, setContent] = useState('')
    const [message, setMessage] = useState(null)

    const handleCreateRant = async () => {
        console.log("entering with ", content)
        console.log(new Date())

        if(content.trim().length < 400){
            setMessage("Content too short! Rants must be >400 chars")
            setTimeout(() => {
                setMessage(null)
            }, 5000)

            return
        }

        const addedRant = {
            content: content,
            date: new Date()
        }

        await rantsService.create(addedRant)
        console.log(addedRant)

        setContent('')

        setMessage("Added rant!")

    }


    const inputStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        // backgroundColor: noteColors[randColor],
        border: "1px solid black",
        width: "80%",
        height: "300px",
        margin: '10px',
        position: 'relative'
    }

    return (
        <div className = "create-rant">
            <h1> New Rant </h1>

            {message !== null ? <p className = "create-error"> {message} </p> : null}

            <textarea style = {inputStyle} value={content} onChange={(e) => setContent(e.target.value)} /> 
            <button onClick = {handleCreateRant}> Submit </button>

        </div>
    )
}

export default CreateRant