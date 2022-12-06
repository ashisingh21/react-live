import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className="card my-3">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>{source} </span>
                <img src={!imageUrl ? "https://st1.bgr.in/wp-content/uploads/2022/12/Fortnite.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text mt-3" style={{ fontSize: '15px' }}><small className="text-muted">by {author} on {new Date(publishedAt).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>

                </div>
            </div >
        )
    }
}
