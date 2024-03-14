/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import myContaxt from "../../Context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../Components/loader/Loader";

const Signup = () => {
    const context = useContext(myContaxt)
    const {loading, setLoading } = context
    const navigate = useNavigate()

    const [userSignUp , setuserSignup] = useState({
        name:"" , 
        email:"", 
        password:"", 
        role:"user"
    })

 /**========================================================================
 user SignUp Function    
 *========================================================================**/

    const userSignupFunction = async() =>{
      if(userSignUp.name === "" || userSignUp.email=== " " || userSignUp.password=== ""){
      return   toast.error("All Filads Required")
      }
setLoading(true)



try {
    const users = await createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password);


    const user = {
        name: userSignUp.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignUp.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    }
    const userRefrence = collection(fireDB, "user")

    addDoc(userRefrence, user);


    setuserSignup({
        name: "",
        email: "",
        password: ""
    })
    
    toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login')

} catch (error) {
    console.log(error)
    setLoading(false);
    
}

    }
    return (
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}

            {loading && <Loader/>}
            <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                        value={userSignUp.name}
                        onChange={(e) => setuserSignup({
                            ...userSignUp,name:e.target.value
                        })}
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                        value={userSignUp.email}
                        onChange={(e) => setuserSignup({
                            ...userSignUp,email:e.target.value
                        })}
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                        value={userSignUp.password}
                        onChange={(e) => setuserSignup({
                            ...userSignUp,password:e.target.value
                        })}
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                        onClick={userSignupFunction}
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;