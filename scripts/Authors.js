import { getAuthors } from "./data.js"
import { getArticles } from "./data.js"

export const Authors = () => {
  const authors = getAuthors()
  let htmlRepresentationofAuthors = ""

  document.addEventListener("click",
    (event) => {
      if (event.target.id.startsWith("author")) {
        // Start small. First, just log whether the click works or not
        console.log("hello, click!", event)

        // 1. figure out which author was clicked on
        // array destructuring assignment
        const [, authorId] = event.target.id.split("--") //[ "author", "2" ]

        // authorId: "2" changed to a number
        const authorIdNumber = parseInt(authorId)

        // 2. find how many articles that author has written
        const articles = getArticles()
        let counter = 0
        for (const article of articles) {
          if ( article.authorId === authorIdNumber) {
            counter++
          }
        }
        console.log("article total:", counter)

        // 3. display that number to the user
        window.alert(`${event.target.innerText}'s article total: ${counter}.`)

      }
    }
  )

  for (const author of authors) {
    htmlRepresentationofAuthors += `
        <div class="author card">
          <h4 class="author__name" id="author--${author.id}">${author.name}</h4>
          <p class="author__bio">${author.bio}</p>
        </div>
    `
  }

  return htmlRepresentationofAuthors;
}
