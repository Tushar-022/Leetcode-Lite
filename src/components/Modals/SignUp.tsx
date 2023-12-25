import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '@/atoms/authModalAtom'
import { getDisplayName } from 'next/dist/shared/lib/utils';
import { log } from 'console';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { auth, firestore } from "@/firebase/firebase";
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {

	const setAuthModalState=useSetRecoilState(authModalState);

	const router=useRouter();

	const [inputs,setInputs]=useState({
		email:'',displayName:'',password:''
	})

	
	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

	
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		
		
	};

	const handleClick=(  )=>{
		setAuthModalState((prev)=>(
			{
				...prev,type:"login"
			}
		))
	}


	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(inputs);
	
		if (!inputs.email || !inputs.password || !inputs.displayName) {
			alert("Please fill all fields");
			return;
		}
	
		try {
			toast.loading("Creating your account", { position: "top-center", toastId: "loadingToast" });
	
			const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
			console.log('hi');
			console.log(newUser);
	
			if (!newUser) {
				return;
			}
	
			const userData = {
				uid: newUser.user.uid,
				email: newUser.user.email,
				displayName: inputs.displayName,
				createdAt: Date.now(),
				updatedAt: Date.now(),
				likedProblems: [],
				dislikedProblems: [],
				solvedProblems: [],
				starredProblems: [],
			};
	
			console.log(userData);
	
			await setDoc(doc(firestore, "users", newUser.user.uid), userData);
			router.push("/");
		} catch (error: any) {
			toast.error(error.message, { position: "top-center" });
		} finally {
			toast.dismiss("loadingToast");
		}
	};
	
		
		
		

	useEffect(()=>{
		if(error)
		alert(error.message)
	},[error])
	
	


  return (
   <>
        <form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}
        
         >
			<h3 className='text-xl font-medium text-white'>Register to LeetClone</h3>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Email
				</label>
				<input
					 onChange={handleChangeInput}
					type='email'
					name='email'
					id='email'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='name@company.com'
				/>
			</div>
			<div>
				<label htmlFor='displayName' className='text-sm font-medium block mb-2 text-gray-300'>
					Display Name
				</label>
				<input
					 onChange={handleChangeInput}
					type='displayName'
					name='displayName'
					id='displayName'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Krishna'
				/>
			</div>
			<div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
					Password
				</label>
				<input
					 onChange={handleChangeInput}
					type='password'
					name='password'
					id='password'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Password'
				/>
			</div>

			<button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        '
			>
				{/* Register */}
				{loading ? "Registering..." : "Register"}
			</button>

			<div className='text-sm font-medium text-gray-300'>
				Already have an account?{" "}
				<a href='#' className='text-blue-700 hover:underline'
                  onClick={handleClick}
                 >
					Log In
				</a>
			</div>

            {/* <form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'
			//  onSubmit={handleReset}
			 >
			<h3 className='text-xl font-medium  text-white'>Reset Password</h3>
			<p className='text-sm text-white '>
				Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you
				to reset it.
			</p>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Your email
				</label>
				<input
					type='email'
					name='email'
					// onChange={(e) => setEmail(e.target.value)}
				     id='email'
					className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
					placeholder='name@company.com'
				/>
			</div>

			<button
				type='submit'
				className={`w-full text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                bg-brand-orange hover:bg-brand-orange-s `}
			>
				Reset Password
			</button>
		</form> */}
		</form>
   </>
  )
}
