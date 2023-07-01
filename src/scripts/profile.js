import { searchUsers } from "./profile.js";

export async function gitUsers () {
    const buttonSearchUsers = document.querySelector(".index__button");
    const usuarios = document.querySelector(".index__input")
   
    buttonSearchUsers.addEventListener('click', (event) => {
      event.preventDefault()
      const value = usuarios.value

      searchUsers(value)
      console.log(searchUsers(value))
    })
} 

gitUsers()
