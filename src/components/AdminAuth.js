async function Adminauth() {
  let token =  localStorage.getItem('admin_token');
    const api_data = await fetch("https://code-crafters-y4c1.onrender.com/admin/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          admin_token: token
      }),
    });
    const data = await api_data.json();
    return data;
  }
  
  export default Adminauth;
  