import {useState} from 'react'
function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setError('')
        setSuccess('')
        if(name === '' || email === '' || message === ''){
            setError('Please fill in all the fields')
            return
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!emailPattern.test(email)) {
            setError('Please enter a valid email address')
            return
        }

        setSuccess('Message Sent Successfully')

        setname('')
        setEmail('')
        setMessage('')
    }
    return (
        <form onSubmit = {handleSubmit}>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <div>
                <label>Name</label>
                <input 
                    type = "text"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type = "Email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Message</label>
                <textarea
                    value = {message}
                    onChange = {(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <button type = "submit">
                Send Message
            </button>
        </form>
    )
}

export default ContactForm