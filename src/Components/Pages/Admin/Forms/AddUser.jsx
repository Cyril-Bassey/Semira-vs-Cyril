import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const endpoint = "http://localhost:4000/sign-up";

    async function signUp() {
        if (!FirstName || !LastName || !Email || !Password) {
            setErrorMessage("All fields are required.");
            return;
        }
        try {
            const payload = {
                FirstName,
                LastName,
                Email,
                Password,
                timestamps: true    
            };
            // console.log("Sending payload:", payload);

            const response = await axios.post(endpoint, payload,{
                     // headers:{
                // "Content-Type":"application/json", 
                // "Authorization":Bearer ${}
                // }
            });

            console.log(response.data);

            // Reset form inputs
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setErrorMessage("");
            setSuccessMessage("Account Created Successfully!");

        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage(error.response.data.message || "An error occurred. Please try again.");
            } else if (error.response && error.response.status === 409){
                setErrorMessage("User already signed up. Please use a different email address.");
            } else {
                setErrorMessage("Internal Server Error. Please try again later.");
            }
            setSuccessMessage("");
            console.log("Error:", error);
        }
    }

    return (
        <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
            <h6 className="text-center text-4xl font-bold">Add User</h6>
            
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            
            <div className='flex flex-row justify-between border p-6 items-center mb-4 mt-5'>
                <div className="flex flex-col w-[45%]">
                    <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type='text'
                        className="form-control w-[100%] mb-3 border border-dark rounded-lg"
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="flex flex-col w-[45%]">
                    <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        className="form-control w-[100%] mb-3 border border-dark rounded-lg"
                        placeholder="Last Name"
                        required
                    />
                </div>
            </div>

            <div className='flex flex-row justify-between border p-6 items-center mb-4 mt-5'>
                <div className="flex flex-col w-[45%]">
                    <label htmlFor="Email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control w-[100%] mb-3 border border-dark rounded-lg"
                        placeholder="Email Address"
                        required
                    />
                </div>
                <div className="flex flex-col w-[45%]">
                    <label htmlFor="Password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control w-[100%] mb-3 border border-dark rounded-lg"
                        placeholder="Password"
                        required
                    />
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <button onClick={signUp} className="bg-slate-900 text-white w-[100px] h-[40px] rounded-xl">Submit</button>
            </div>
        </div>
    );
};

export default SignUp;
