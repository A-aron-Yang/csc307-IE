// src/Form.jsx
import React, { useState } from "react";

function Form(props) {
    const [person, setPerson] = useState({
        name: "",
        job: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "job")
            setPerson({ name: person["name"], job: value });
        else setPerson({ name: value, job: person["job"] });
    }

    function submitForm() {
        props.handleSubmit(person);
        setPerson({ name: "", job: "" });
    }

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={person.name}
                onChange={handleChange}
            />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={person.job}
                onChange={handleChange}
            />

            {/*using an onClick instead of an onSubmit since we’re not using the standard submit functionality
            (i.e., we’re not sending the form to a backend component over the network)*/}
            <input type="button" value="Submit" onClick={submitForm} />
            
        </form>
    );
}

export default Form;