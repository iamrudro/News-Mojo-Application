import React from 'react'

const NewsItem = (latestnews) => {
    let { title, desc, imgurl, newsURL, author, date, source } = latestnews;
    return (
        <>
            <div className="my-3">
                <div className="card">
                    <img src={imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...<span className="badge bg-info text-dark">Source:{source}</span></h5>
                        <p className="card-text">{desc}...</p>
                        <p className="card-text"><small className="text-danger">By {author ? author : "unknown"} on {new Date(date).toUTCString()}</small></p>
                        {/* btn-sm = small button  */}
                        <a href={newsURL} target='_blank' rel="noreferrer" className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem;