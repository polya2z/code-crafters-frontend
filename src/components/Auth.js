async function Auth() {
  let token =  localStorage.getItem('user_token');
    const api_data = await fetch("https://code-crafters-y4c1.onrender.com/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_token: token
    }),
  });
    const data = await api_data.json();
    return data;
  }
  
  export default Auth;
  