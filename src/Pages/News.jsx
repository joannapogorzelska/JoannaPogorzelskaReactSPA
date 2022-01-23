import React from 'react'
import {Link} from 'react-router-dom'
import Article from './Article'
    
function News() {
    return (
        <div>
            < Article/>
            <Link to="/news" > Powrót do aktualności</Link>
        </div>)
}
    
export default News