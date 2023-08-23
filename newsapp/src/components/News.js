import React from 'react'
import '../styles/News.css'
import NewsItems from './NewsItems'

const News = () => {
    return (
        <section id="news">
            <div className='news__container'>
                <h1 className='headline'>NewsWallah-Top News In General</h1>
                <NewsItems />
            </div>
        </section>

    )
}

export default News