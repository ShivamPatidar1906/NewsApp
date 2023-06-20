import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgurl,newsurl,bg,author,publishedAt} = this.props
    return (
      <div>
        <div className={`card bg-${bg==='dark'?'dark':'light'}`} style={{width: "18rem"}}>
        <div className="card-header text-center text-danger" style={{backgroundColor:'white'}}>{this.props.sourceName}</div>
        <img src={imgurl?imgurl:'https://repete.cc/wp-content/themes/semplice4/assets/images/admin/preview_notfound.svg'} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className={`card-title text-${bg==='light'?'#060034':'light'}`}>{title}...</h5>
            <p className={`card-text text-${bg==='light'?'#060034':'light'}`}>{description}</p>
            <p className="card-text text-center text-danger"><small className="text-muted">Last updated {publishedAt} by {author===null?'Unknown':author}</small></p>
            <a href={newsurl} style={{backgroundColor:'#060034'}} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more here</a>
            
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
