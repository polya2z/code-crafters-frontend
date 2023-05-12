async function Adminauth(token) {
    const api_data = await fetch("http://localhost:3030/admin/auth/", {
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
  