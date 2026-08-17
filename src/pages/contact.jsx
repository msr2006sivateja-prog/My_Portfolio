import ContactForm from '../components/ContactForm'

function Contact() {
    return (
        <main className="contact-page">

            <section className="contact-section">

                <h1>Contact Me</h1>

                <p className="contact-intro">
                    Have a question or want to work together?
                    Feel free to send me a message.
                </p>

                <ContactForm />

            </section>

        </main>
    )
}

export default Contact