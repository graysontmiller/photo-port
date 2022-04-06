import React, { useState } from "react";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // name, email, and message make up the formState. The default value of these are set in the JSX for each.
    function handleChange(e) {
        // This function will sync the internal state of the component formState with the user input from the DOM. 
        // The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name.
        setFormState({...formState, [e.target.name]: e.target.value })
        // This is using the setFormState function to update the formState value for the target property.
    };

    function handleSubmit(e) {
        // Leaving this submit function blank because this project is only concerned with the front-end
        e.preventDefault();
        console.log(formState);
    }

    
    // JSX 
    return (
        <section>
            <h1> Contact Me </h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onChange={handleChange} name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
            </div>
            <button type="submit"> Submit </button>
            </form>
        </section>
    );
}

export default ContactForm;