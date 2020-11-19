import React from 'react'

export default function Contact() {

function submitForm(){
    alert("Successfully submitted! Thanks for your input!")
}

    return (
        <div className="contact-form">
            <form action={submitForm}>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Email"/>
                <textarea id="message" type="text" placeholder="Message..."/>
                <div className="button">Submit</div>
            </form>
        </div>
    )
}
