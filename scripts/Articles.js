import { getArticles } from "./data.js"

// Make a function for diplaying our articles
export const Articles = () => {
  const articles = getArticles()
  let htmlRepresentationofArticles = ""

  for (const article of articles) {
    htmlRepresentationofArticles += `
        <div class="article card">
          <h4 class="article__headline" id="article--${article.id}">${article.headline}</h4>
        </div>
    `
  }

  return htmlRepresentationofArticles
}
