const data = {
  authors: [
      {
          name: "Christina",
          bio: "Been gaming since I could say 'uno'!",
          id: 1
      },
      {
          name: "Shep",
          bio: "Used to play video games, but blew out my thumb. Now I chuck dice and take names.",
          id: 2
      },
      {
          name: "Bryan",
          bio: "Pretty fly for a bry guy",
          id: 3
      }
  ],
  articles: [
      {
          id: 1,
          date_created: "2020-04-20",
          author: 2,
          headline: "Top 10 2-player Games to Play in Quarantine",
          body: "Non voluptas delectus earum voluptatem tempore culpa suscipit. Numquam nesciunt sint nemo velit sint tenetur voluptatem ipsum. Eligendi repellendus non exercitationem error unde incidunt corrupti et.",
          categoryId: 2
      },
      {
          id: 2,
          date_created: "2021-05-27",
          authorId: 1,
          headline: "Magic: The Gathering -- Peak Nerd?",
          body: "Ea ut ut dolorem numquam quo quia asperiores. Voluptas sunt ducimus consequuntur fugit. Voluptas quaerat est est velit non cupiditate aut molestiae. Aut ad ut enim assumenda expedita sit maiores. Aut enim quod sunt aut non et cum sit.",
          categoryId: 1
      },
      {
          id: 3,
          date_created: "2021-04-19",
          authorId: 3,
          headline: "Can One Own Too Many Games?",
          body: "Ea ut ut dolorem numquam quo quia asperiores. Voluptas sunt ducimus consequuntur fugit. Voluptas quaerat est est velit non cupiditate aut molestiae. Aut ad ut enim assumenda expedita sit maiores. Aut enim quod sunt aut non et cum sit.",
          categoryId: 1
      },
      {
          id: 4,
          date_created: "2021-04-19",
          authorId: 3,
          headline: "Coming Soon: Blade Runner the Board Game",
          body: "Ea ut ut dolorem numquam quo quia asperiores. Voluptas sunt ducimus consequuntur fugit. Voluptas quaerat est est velit non cupiditate aut molestiae. Aut ad ut enim assumenda expedita sit maiores. Aut enim quod sunt aut non et cum sit.",
          categoryId: 3
      }
  ],
  categories: [
      {
          id: 1,
          name: "The Tabletop Lifestyle"
      },
      {
          id: 2,
          name: "Top 10 Lists"
      },
      {
          id: 3,
          name: "Industry News"
      }
  ]
}

export const getAuthors = () => {
  const copyOfAuthors = [...data.authors] //... is the spread operator. We are copying the contents of the data.authors array into a brand new array
  return copyOfAuthors
}

export const getArticles = () => {
  const copyOfArticles = [...data.articles]
  return copyOfArticles
}

export const getCategories = () => {
  const copyOfCategories = [...data.categories]
  return copyOfCategories
}
