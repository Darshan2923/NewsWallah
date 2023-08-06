import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    const handleClick = () => {
        const menuBtn = document.querySelector('.menu-btn');
        const navigation = document.querySelector('.navigation');
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    };
    return (
        <section id="nav">
            <div className='navbar-container'>
                <header>
                    <a href="/" className='brand'>NewsWallah</a>
                    <div className="menu-btn" onClick={handleClick}></div>
                    <div className="navigation" onClick={handleClick}>
                        <div className="navigation-items">
                            <a href="#nav" className='general'>General</a>
                            <a href="#section__title" className="science">Science</a>
                            <a href="#explore" className='entertainment'>Entertainment</a>
                            <a href="/" className="sports">Sports</a>
                            <a href="/" className="tech">Technology</a>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    )
}

export default Navbar