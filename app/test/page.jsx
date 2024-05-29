import React from 'react'



export default function page() {

    const handleForm = async (formData) => {
        "use server"
        console.log(formData)
        const username =formData.get("username")
        console.log("hello",username);
    };
    return (
        <div>

            <form action={handleForm}>
                <input type="text" name="username" />
                <button>Send</button>

            </form>
        </div>
    )
}
