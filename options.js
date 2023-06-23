const nameInput = document.getElementById('name');
const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener("click", () => {
  const name = nameInput.value
  chrome.storage.sync.set({
    name,
  }, () => {
    console.log(`name is set to ${name}`)
  })
    
})

chrome.storage.sync.get(["name"], (res) =>{
    console.log(res)
})