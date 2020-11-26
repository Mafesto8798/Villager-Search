import React,{useRef} from 'react'

export default function Contact() {
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
function submitForm(){
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
    alert("Successfully submitted! Thanks for your input!")
}

    return (
        <div className="contact-form">
            <form>
                <h1>Contact me!</h1>
                <input ref={nameRef} type="text" placeholder="First Name"/>
                <input ref={emailRef} type="text" placeholder="Email"/>
                <textarea ref={messageRef} id="message" type="text" placeholder="Message..."/>
                <div className="button" onClick={submitForm}>Submit</div>
            </form>
        </div>
    )
}
