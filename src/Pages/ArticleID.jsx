import React, { Fragment } from 'react'


function ArticleID(props) {

    return (
        <Fragment>
            
                <h2>{props.title}</h2>
                <img src={props.img}  alt=""/>
                <p>{props.text} </p>
            
        </Fragment>
    )
}
export default ArticleID