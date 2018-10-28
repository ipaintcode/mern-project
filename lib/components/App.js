import React, { Component } from "react"

import ArticleList from "./ArticleList"

import DataApi from "../DataApi"
import { data } from "../testData"

const api = new DataApi(data)

class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  }
  
  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          authors={this.state.authors}
        />
      </div>
    )
  }
}

export default App