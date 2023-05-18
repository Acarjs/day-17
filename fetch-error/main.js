const btn = document.querySelector('button')
const url = 'https://jsonplaceholder.typicode.com/todos/x'

const clickHandler = async () => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Network response was not OK')
    }
    const data = await res.json()
    console.log(data)
  } catch {
    const message = document.createElement('p')
    message.textContent = 'Error: fookin hell'
    document.body.appendChild(message)
  }
}

btn.addEventListener('click', clickHandler)
