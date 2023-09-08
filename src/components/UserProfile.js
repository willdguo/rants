import { useEffect, useState } from "react";
import usersService from "../services/user"
import rantsService from "../services/rants"



const UserProfile = ( {username, search} ) => {

    const [currUser, setCurrUser] = useState({username: "unknown", rants: []})
    const [currUserRants, setCurrUserRants] = useState([])
    const [filteredRants, setFilteredRants] = useState([])

    useEffect(() => {

        usersService.findUser(username).then(response => {
            setCurrUser(response)
        })

        rantsService.getFromUser(username).then(response => {
            setCurrUserRants(response)
            setFilteredRants(response)
        })

    }, [])

    useEffect(() => {
        const temp = currUserRants.filter(rant => rant.content.includes(search) || rant.user.includes(search) || rant.date.substring(0, 10).includes(search))
        setFilteredRants(temp)
    }, [search])

    return (
        <div className = "userProfile">
            <h1> {currUser.username} </h1>

            {filteredRants.length !== 0
                ? <div className = "pastRants">
                    <p> Total Rants: {currUserRants.length} </p>

                    <h3> Past Rants </h3>
                    {currUserRants.map(rant => (
                        <div key = {rant.id} className = "rant">
                            <p> <strong> {rant.user} </strong> {`${rant.date.substring(0, 10)}`} </p>
                            <p> {rant.content} </p>
                        </div>
                    ))}
                </div>
                : null
            }

            
        </div>
    )

}


export default UserProfile