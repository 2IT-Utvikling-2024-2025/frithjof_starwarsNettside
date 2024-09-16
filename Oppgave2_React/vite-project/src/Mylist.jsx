import { useState } from "react"

const mylist =[
    { title: 'mat', id: 1},
    { title: 'svisf', id: 2},
    { title: 'mat', id: 3},
]


export default function Mylist () {


const Listitem = mylist.map(item =>
    <li key={item.id}>
        {item.title}
        <VoteButton></VoteButton>
    </li>



)

    return(

        <>
         <h1>Mylist</h1>
         <ui>{Listitems}</ui>
        </>




    ) 
}

function VoteButton() {
    const [vote, setVote] = useState(0)

    function handleClick() {
        setVote(vote + 1)

    }
   
   
   
    return (
        <button onClick={handleClick}>
                    Voted {vote} times
                </button>


    )



    
}