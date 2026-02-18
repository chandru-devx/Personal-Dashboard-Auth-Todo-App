import { signInWithEmailAndPassword } from "firebase/auth"
import Card from "../ui/Card"
import { useState } from "react"
import { auth } from "../../service/firebase"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate();


    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [validaction, setValidaction] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // simple validation
        if (!emailId) {
            setValidaction("Enter email");
            return;

        }

        if (!password) {
            setValidaction("Enter password");
            return;
        }

        try {
            // login user
            const res = await signInWithEmailAndPassword(auth, emailId, password);

            const user = res.user;
            // console.log("Login success:", user.uid);
            toast.success("Login successful");
            setEmailId("")
            setPassword("")
            navigate("/task");


        } catch (error) {
            console.log(error.message);
            setValidaction(error.message);
        }
    };



    return (

        <>

            <Card>
                <div className='grid grid-cols-1'>
                    <form className=" sm:p-8 p-6 w-full" onSubmit={handleSubmit} >
                        <div className="md: mb-8">
                            <h1 className="text-slate-900 text-3xl font-semibold">Login</h1>
                        </div>

                        <div className="grid lg:grid-cols-1 gap-8">

                            <div>
                                <label className="text-slate-800 text-sm font-medium mb-2 block">Email Id</label>
                                <input name="email" type="text" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-2.5 rounded-md border border-gray-200 focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter email" value={emailId} autoComplete="off" onChange={(e) => setEmailId(e.target.value)} />
                            </div>

                            <div>
                                <label className="text-slate-800 text-sm font-medium mb-2 block">Password</label>
                                <input name="password" type="password" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-2.5 rounded-md border border-gray-200 focus:bg-transparent focus:border-black outline-none transition-all" placeholder="Enter password" value={password} autoComplete="new-password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            {validaction && <p className="text-red-600 mt-2 text-sm">{validaction}</p>}


                        </div>
                        <div className="mt-8">
                            <button type="submit" className="py-2.5 px-6 text-sm tracking-wide rounded-md text-white font-medium bg-slate-800 hover:bg-slate-900 focus:outline-none transition-all cursor-pointer">
                                Sign in
                            </button>


                            <div>
                                <p className="text-slate-900 text-sm mt-6 text-center">
                                    Don't have an account?
                                    <Link
                                        to="/signup"
                                        className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                                    >
                                        Register here
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </form>
                </div>
            </Card>

        </>
    )
}

export default Login