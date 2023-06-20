// api key :- https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=96420dcdf7ca4ab9acccb40320de0f43&page=${this.state.page}&pageSize=${this.props.pageSize}

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export class News extends Component {
  articles = [
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }
async updateNews()
{
  this.props.setProgress(10)
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=96420dcdf7ca4ab9acccb40320de0f43&page=${this.state.page}&pageSize=${this.props.pageSize}`
  this.setState({loading:true})
  let data = await fetch(url);
  this.props.setProgress(30)
  let parsedData = await data.json()
  this.props.setProgress(70)
  this.setState({loading:false})
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100)
}
  componentDidMount()
  {
    this.updateNews()
  }

  handlenextclick = () => {
    this.updateNews()
    this.setState({page:this.state.page+1})
  }
  handleprevclick = () => {
    this.updateNews()
    this.setState({page:this.state.page-1})
  }

  render() {
    let {bg} = this.props
    return (
      <div className="container my-4" style={{ marginLeft: "180px" }}>
        <h1 className={`mx-4 text-${bg==='light'?'#060034':'light'} text-center`} ><span className="badge badge-secondary">{this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} News</span></h1>
        <hr  className={`bg-${bg==='light'?'dark':'light'} text-center`}></hr>
        {this.state.loading && <Spinner/>}
        <div className="row my-4">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-3 mx-4" key={element.url}>
                <NewsItem title={element.title} sourceName={element.source.name} author={element.author} publishedAt={element.publishedAt} bg={bg} description={element.description} imgurl={element.urlToImage} newsurl={element.url}/>
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} onClick={this.handleprevclick} className="btn btn-primary" type="button">&larr; Previous</button>
          <button disabled={this.state.page>=(Math.ceil((this.state.totalResults))/this.props.pageSize)} onClick={this.handlenextclick} className="btn btn-primary" style={{marginLeft:'960px'}} type="button">Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
