
export async function searchUsers(usuarios) {
    const usersURL = `https://api.github.com/users/${usuarios}`;
  
    try {
      const response = await fetch(usersURL);
      
      if (!response.ok) {
        window.location.href = './src/pages/error.html';
      } else {
        const usuarioEncontrado = await response.json();
        localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
        window.location.href = './src/pages/profile.html';
      }
    } catch (error) {
      console.error(error);
      window.location = './src/pages/error.html';
    }
  }
 
 
  