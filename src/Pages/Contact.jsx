import React, { useState } from 'react';
/*import {Prompt} from 'react-router-dom'*/ 

import '../style/contact.css'


function Contact() {
    const [formData, setFormData] = useState({ value: " " });
    
    const handleOnChange = (e) => {
        setFormData({ value: e.target.value })
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        
        setFormData({value:" "})

    }
        return (
        <>
            <div className='contact'>
                    <form onSubmit={handleOnSubmit}>
                        <h3>Napisz do mnie:</h3>
                        <textarea value={formData.value} onChange={handleOnChange} placeholder='Wpisz wiadomość'></textarea>
                        <button>Wyślij</button>
                </form>
            </div>
            {/*<Prompt
                when={true}
                message="Masz niewysłany formularz, czy na pewno chcesz opuścić stronę?"
            />*/}
            <div className="findme">
                <h2>Znajdź mnie na:</h2>
                    <ul>
                        <li><h5>Facebook</h5><i className="fab fa-facebook-square"></i></li>
                        <li><h5>Instagram</h5><i className="fab fa-instagram"></i></li>
                    </ul>
            </div>
        </>)
}
export default Contact