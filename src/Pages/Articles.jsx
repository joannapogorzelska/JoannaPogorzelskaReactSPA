import React from "react"
import {Link} from "react-router-dom"

import "../style/articles.css"

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

function Articles() {
    const article = articles.map(article =>
        <li className="homeOne"key={article.id}>
            <Link to={`/article/${article.title}`}>
                <h2>{article.title}</h2>
                <img src={article.img}  alt=""/>
                <p>{article.text}</p>
            </Link>
            
        </li>)
    return (
    <section className=" home clearfix">
        <ul >{article}</ul>
    </section>
    )
}
export default Articles