import React from "react"
import ArticleList from "../ArticleList"

import renderer from "react-test-renderer"

describe("ArticleList", () => {

  const testProps = {
    articles: {
      a: {id: "a"},
      b: {id: "b"}
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  }

  const tree = renderer.create(
    <ArticleList
      {...testProps}
    />
  ).toJSON()

  console.log(tree)
})