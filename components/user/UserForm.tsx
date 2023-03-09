import React, {FormEvent, useEffect, useState} from "react";
import GoogleSignInButton from "@components/user/GoogleSignButton";
import axios from "axios";
import OtpForm from "@components/forms/OtpForm";


const LoginForm: React.FC<{ onClick: () => void }> = ({onClick}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative z-0 mb-6 w-full group">
                <input type="email" name="floating_email"
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                       placeholder=" " required/>
                <label htmlFor="floating_email"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                    address</label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
                <input type="password" name="floating_password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                       placeholder=" " required/>
                <label htmlFor="floating_password"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button
                type="submit"
                className="p-2 bg-orange-500 text-white rounded hover:bg-orange-700 transition-colors duration-300"
            >
                Login
            </button>
            <button
                type="button"
                onClick={onClick}
                className="text-sm text-gray-400 hover:underline">
                create a new account <span className={"text-orange-600 font-semibold "}>Sign Up</span>
            </button>
        </form>
    )
}

const RegisterForm: React.FC<{ onClick: () => void }> = ({onClick}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showOTP, setShowOTP] = useState(false)
    const [otp, setOtp] = useState<null | number>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/user/register', {
                name,
                email,
                password
            })
            setShowOTP(true)
        } catch (e) {
            console.log(e)
        }
    };

    const submitOtp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios.post(`/api/verify-otp?otp=${otp}`, {
                email,
                otp
            })
        } catch (err) {
            console.log(err)
        }

    }

    if (showOTP) {
        return (
            <OtpForm handleSubmit={submitOtp} otp={Number(otp)} setOtp={setOtp}/>
        )
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="name"
                       value={name}
                       onChange={(event) => setName(event.target.value)}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                       placeholder=" " required/>
                <label htmlFor="name"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input type="email" name="floating_email"
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                       placeholder=" " required/>
                <label htmlFor="floating_password"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                    / Phone</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input type="password" name="floating_password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                       placeholder=" " required/>
                <label htmlFor="floating_password"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button
                type="submit"
                className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300"
            >
                Register
            </button>
            <button
                type="button"
                onClick={onClick}
                className="text-sm text-gray-400 hover:underline">
                Already Have an account <span className={"text-orange-600 font-semibold "}>Sign Up</span>
            </button>
        </form>
    )
}


const userForm = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-2 lg:min-h-[400px] gap-10 "}>
            <div className={"bg-gradient-to-br from-orange-400 to-orange-800 p-10 text-2xl font-semibold text-white"}>
                Register Now <br/> To get The best offers
            </div>
            <div className={"p-10 space-y-4"}>
                <GoogleSignInButton/>
                {showRegisterForm ? (
                    <RegisterForm onClick={() => setShowRegisterForm(false)}/>
                ) : (
                    <LoginForm onClick={() => setShowRegisterForm(true)}/>
                )}
            </div>
        </div>
    )
}


export default userForm