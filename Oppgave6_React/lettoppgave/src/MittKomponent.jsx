import { useState } from "react"
import './MittKomponent.css'

export default function MittKomponent() {

    const[name, setName] = useState ("");

    return (
            <>
            <h1>MittKomponent</h1>
            <Form>
              <label>
                <input>
                type="text" 
    	          value={name}
    	          onChange={(e) => setName(e.target.value)}
                </input>
              </label>
            </Form>
            </>

    )
}