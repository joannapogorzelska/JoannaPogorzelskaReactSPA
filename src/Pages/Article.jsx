import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'

import ArticleID from './ArticleID'


function Article() {
    const params = useParams();


    
    return (
        <div>
            <Routes> 
                <Route
                    path={`/article/${params.articleId}`}>
                </Route>
            </Routes>
            <ArticleID/>
        </div>
)
}

export default Article
