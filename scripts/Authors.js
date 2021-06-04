import { getAuthors } from "./data.js"

export const Authors = () => {
  const authors = getAuthors()
  let htmlRepresentationofAuthors = ""

  for (const author of authors) {
    htmlRepresentationofAuthors += `
        <div class="author">
          <h4 class="author__name" id="author--${author.id}">${author.name}</h4>
          <p class="author__bio">${author.bio}</p>
        </div>
    `
  }

  return htmlRepresentationofAuthors;
}
