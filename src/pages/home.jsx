import { useEffect, useState } from 'react'
import profilePic from '../assets/naruto.jpg'
function Home() {
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    },[])

    if(loading) {
        return (
            <div className = "loading-screen">
                <h2>Loading...</h2>
            </div>
        )
    }
    return (
        <main className="home">

            <section className="hero">

                <div className="hero-content">
                    
                    <img
                        src={profilePic}
                        alt="Siva Teja"
                        className="profile-image"
                    />

                    <p className="intro">Hi, I'm</p>

                    <h1>Siva Teja</h1>

                    <h2>Computer Science Engineering Student</h2>

                    <p className="hero-description">
                        I'm a B.Tech CSE student at NIT Warangal,
                        interested in software development, problem solving,
                        and building useful applications.
                    </p>

                    <div className="hero-buttons">
                        <a href="/Projects" className="primary-button">
                            View My Projects
                        </a>

                        <a href="/Contact" className="secondary-button">
                            Contact Me
                        </a>
                    </div>

                </div>

            </section>

        </main>
    )
}

export default Home