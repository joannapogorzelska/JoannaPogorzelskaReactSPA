import React from 'react'
import Articles from './ArticleID'
import { Link, useParams } from 'react-router-dom'

import imgHerbata from "../image/herbata384.jpg"
import imgCiasto from "../image/wieniec384.jpg"
import imgKubek from "../image/kubek384.jpg"

const articles = [
    {
        id: 1,
        title: "Zimow herbatka",
        img: imgHerbata,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nesciunt quis non reprehenderit ipsa voluptate aliquid corrupti aut id, laudantium dignissimos vero exercitationem, tempore distinctio iste similique. Debitis, aliquid impedit fugiat nihil quibusdam eligendi veritatis cum aperiam porro facere fugit......."  
    },
    {
        id: 2,
        title: "Drożdżowy wieniec",
        img: imgCiasto,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nesciunt quis non reprehenderit ipsa voluptate aliquid corrupti aut id, laudantium dignissimos vero exercitationem, tempore distinctio iste similique. Debitis, aliquid impedit fugiat nihil quibusdam eligendi veritatis cum aperiam porro facere fugit......."  
    },
    {
        id: 3,
        title: "Wino Grzane",
        img: imgKubek,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nesciunt quis non reprehenderit ipsa voluptate aliquid corrupti aut id, laudantium dignissimos vero exercitationem, tempore distinctio iste similique. Debitis, aliquid impedit fugiat nihil quibusdam eligendi veritatis cum aperiam porro facere fugit......."  
    }]

    
function News() {
    const params = useParams()
    console.log(params.articleId, articles[params.articleId-1])
    
    
    return (
        <div>
            <Link to="/news" > Powrót do aktualności</Link>
            <Articles
                title={articles[params.articleId - 1].title} 
                img={articles[params.articleId - 1].img} 
                text={articles[params.articleId - 1].text} />
            

        </div>)
}
    
export default News
