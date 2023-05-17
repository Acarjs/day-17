// const url =
//   'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science'

//1. syntax
// console.log('about to send request')
// const promise = fetch(url)

// promise.then((response) => {
//   const promiseData = response.json()
//   promiseData.then((data) => {
//     console.log(data)
//   })
// })

//2.syntax

// fetch(url).then((res) =>
//   res.json().then((data) => {
//     console.log(data.data.channel.title)
//   })
// )

//3. async-await

// console.log('A')

// const loadData = async () => {
//   console.log('D')
//   const response = await fetch(url) //only the code below this function -in this block- is blocked
//   const data = await response.json()
//   // console.log('i was blocked')
//   console.log('E')
//   console.log(data)
// }

// console.log('B')

// loadData()

// console.log('C')

//============================================

// console.log('A')

// const loadData = () => {
//   console.log('D')

//   console.log('E')
// }

// console.log('B')

// loadData()

// console.log('C')

//========================ASYNC-AWAIT===============================

// const url =
//   'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science'

// const loadData = async () => {
//   try {
//     const response = await fetch(url)
//     const data = await response.json()

//     const ul = document.createElement('ul')
//     document.body.appendChild(ul)

//     data.data.channel.item.forEach((info) => {
//       const li = document.createElement('li')
//       const a = document.createElement('a')
//       a.href = `${info.link}`
//       a.target = '_blank'
//       a.textContent = info.title
//       li.appendChild(a)
//       ul.appendChild(li)
//     })
//   } catch {
//     const msg = document.createElement('p')
//     msj.innerText = 'Sorry, unable to get the data'
//     document.body.appendChild(msg)
//   } finally {
//     console.log('executed everytime!')
//   }
// }

// loadData()

//===========================with FETCH===================

const url =
  'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science'

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const ul = document.createElement('ul')
    document.body.appendChild(ul)

    data.data.channel.item.forEach((info) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = `${info.link}`
      a.target = '_blank'
      a.textContent = info.title
      li.appendChild(a)
      ul.appendChild(li)
    })
  })
  .catch((e) => {
    console.log('error', e)
  })
  .finally(() => {
    console.log('everytime!')
  })

//===========================with FETCH===================
