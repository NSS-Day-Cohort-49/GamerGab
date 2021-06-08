import { getArticles } from "./data.js"
import { getAuthors } from "./data.js"

// Make a function for diplaying our articles
export const Articles = () => {
  const articles = getArticles()
  // 1. Get authors data so we can access the authors and their names
  const authors = getAuthors()

  // 2. Add event listener for clicks on articles <--- figure out which one was clicked
  document.addEventListener("click",
  // 3. Callback function that loops through articles and authors to match them up
    (event) => {
        // a. Make sure we hooked up the event listener at all
        // console.log("something got clicked", event.target.id)
        // 1. Make sure we clicked on the right thing
        if (event.target.id.startsWith("article")) {

          // this...
          // const idArray = event.target.id.split("--")
          // const articleId = idArray[1]

          // ...is the same things as this
          const [, articleId] = event.target.id.split("--") //[ "article", "2" ]

          // let authorId = 0
          // for (const article of articles) {
          //   if (article.id === parseInt(articleId)) {
          //     authorId = article.authorId
          //   }
          // }

          // find method
          const clickedArticleObj = articles.find( (article) => article.id === parseInt(articleId))
          const foundAuthor = authors.find( (author) => author.id === clickedArticleObj.authorId )

          // 4. display the author name for the clicked article in a dreaded alert box
          window.alert(`Article author: ${foundAuthor.name}`)
        }
    })

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
