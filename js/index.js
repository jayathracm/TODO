const BACKEND_ROOT_URL  = 'http://localhost:3001'

const list = document.querySelector('ul')
const input = document.querySelector('input')

input.disabled = true

const renderTask = (task) => {
  const li = document.createElement('li')
  li.setAttribute('class', 'list-group-item')
  li.innerHTML = task
  list.appendChild(li)
}

const getTasks = async () => {
  try {
    const response = await fetch(BACKEND_ROOT_URL)
    const json = await response.json()
    json.forEach(task => 
      renderTask(task.description))
  } catch (error) {
    alert("Error retrieving tasks" + error.message)
  }
}

const saveTask = async (task) => {
  saveTask(task).then((json)=>{
    renderTask(task)
    input.value = ''
  })
}

input.addEventListener('keypress',(event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    const task = input.value.trim()
    if (task !== ''){
        const li = document.createElement('li')
        li.setAttribute('class', 'list-group-item')
        li.innerHTML = task
        list.appendChild(li)
        input.value = ''
    }
    newItem.textContent = input.value;
    list.appendChild(newItem);
    input.value = '';
  }
});

getTasks()