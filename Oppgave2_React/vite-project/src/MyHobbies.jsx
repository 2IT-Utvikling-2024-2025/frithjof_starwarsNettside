import { useState } from "react"
import './MyHobbies.css'

    
const hobbis = [
    { title: "Gameing", isFavorite: true, upVote: 0, id: 1},
    { title: "Swimming", isFavorite: true, upVote: 0, id: 2},

    ]


export default function MyHoppies() {
    const Listitem = hobbis.map(hobby =>
    
    <li key={hobby.id}> 
            {hobby.title}
            <VoteButton></VoteButton>
    </li>


    )

    return (        
        <>
        <h1 classname='header' >Frithjof</h1> 
        <ul>{Listitem}</ul>
       </> 
    )

    function VoteButton() {

        const [vote, setVote] = useState (0)

            function handleClick() {
                setVote (vote + 1)

            }

            return (

                <button className="button" onClick={handleClick}>
                    Voted {vote} times
                </button>
            ) 
        
        }
            
}


