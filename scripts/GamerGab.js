import { Authors } from "./Authors.js"
import { Articles } from "./Articles.js"

export const GamerGab = () => {
  return `
      <article class="authors column">
        <h2>Authors</h2>
        ${Authors()}
      </article>
      <article class="articles column">
        <h2>Articles</h2>
        ${Articles()}
      </article>
      <article class="categories column">
        <h2>Categories</h2>
        <p>Hello, Categories</p>
      </article>
  `
}
