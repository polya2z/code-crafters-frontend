import React,{useState} from 'react'
import Alert from '../components/Alert';
import Navbar from '../components/Navbar';

function Login() {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [msg, setmsg] = useState("");
    const [Loading, setLoading] = useState(false);
    async function loginUser(e) {
        e.preventDefault();
        setLoading(true);
        const api_data = await fetch("https://code-crafters-y4c1.onrender.com/admin/auth/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: UserName,
                password: Password
            }),
        });
        const data = await api_data.json();
        console.log(data);
        setLoading(false);
        if (data.success) {
            setUserName("");
            setPassword("");
            window.location.href = "/admin/dashboard";
            localStorage.setItem('admin_token', data.token);
        }
        setmsg(data.msg);
    }
    return (
        <>
        <Navbar/>
            <h1 class="mt-6 font-extrabold leading-tight text-center text-4xl sm:text-6xl">
                <span className="text-rose-600">Admin</span> Login
            </h1>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-1/2 md:w-full bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
                        <form onSubmit={loginUser}>
                    <img src='/admin.png'  className='w-52 rounded-full m-auto'/>
                            <h2 class="text-rose-600 text-lg font-medium title-font mb-5">Login | For Admin Users</h2>
                            {msg ? <Alert text={msg} /> : ""}
                            <div class="relative mb-4">
                                <label for="UserName" class="leading-7 text-sm text-gray-600">UserName</label>
                                <input type="name" id="UserName" name="UserName" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={UserName}
                                    onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div class="relative mb-4">
                                <label for="Password" class="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="Password" name="Password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={Password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button class="text-white bg-rose-500 border-0 py-2 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg">{Loading ? "" : "Login"}   <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="ml-2 animate-spin"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                                hidden={Loading ? false : true}
                            >
                                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65s.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                            </svg></button>
                            <div>
                                <a href='/' className="text-xs text-gray-500">Only Admin Members can Login.</a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login