import { useEffect, useState } from "react";
import rantsService from "../services/rants"

const Feed = ({setProfile, search}) => {

    const [rants, setRants] = useState([])
    const [filteredRants, setFilteredRants] = useState([])

    useEffect(() => {
        rantsService.getAll()
            .then(response => {
                setRants(response)
                setFilteredRants(response)

                console.log(response)
            })
    }, [])

    useEffect(() => {
        const temp = rants.filter(rant => rant.content.includes(search) || rant.user.includes(search) || rant.date.substring(0, 10).includes(search))
        setFilteredRants(temp)
    }, [search])

    return (
        <div className = "feed">

            {filteredRants.map(rant => (
                <div key = {rant.id} className = "rant" onClick = {() => setProfile(rant.user)}>
                    <p> <strong> {rant.user} </strong> {`${rant.date.substring(0, 10)}`} </p>
                    <p> {rant.content} </p>
                </div>
            ))}

        </div>
    )

}

export default Feed