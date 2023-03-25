import React from 'react'

const NewItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card my-3">
        <img style={{ height: "200px" }} src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <div style={{ display: 'flex', position: 'absolute', top: '0', justifyContent: 'flex-end', right: '0' }}>
            <span className="badge rounded-pill bg-success"> {source} </span>
          </div>

          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewItem