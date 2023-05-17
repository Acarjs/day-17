const url = 'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php'

const loadData = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    const categories = data.data
    // console.log(categories)

    const ul = document.querySelector('.categories')
    ul.innerHTML = ''

    categories.map((category) => {
      const menu = document.createElement('li')
      menu.innerHTML = category
      ul.appendChild(menu)

      const loadArticles = async () => {
        const url2 = `https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`
        const categoryResponse = await fetch(url2)
        const categoryData = await categoryResponse.json()
        console.log(categoryData.data.channel.item)

        const articles = document.querySelector('.articles')
        articles.innerHTML = ''

        categoryData.data.channel.item.map((element) => {
          const articleList = document.createElement('li')
          const a = document.createElement('a')
          a.href = `${element.link}`
          a.target = '_blank'
          a.innerHTML = `${element.title}`
          articleList.appendChild(a)
          articles.appendChild(articleList)
        })
      }

      menu.addEventListener('click', () => {
        loadArticles()
      })
    })
  } catch {
    const msg = document.createElement('p')
    msj.innerText = 'Sorry, unable to get the data'
    document.body.appendChild(msg)
  }
}

loadData()
