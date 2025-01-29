import React ,{useRef,useState}from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggeSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

const message = checkValidData(emailValue,passwordValue);
setErrorMessage(message);

//Sign in/Sing up logic
    
  }


  return (
    <div>
<Header/>

<div className='absolute'>
<img  src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg" alt="Logo"/>
</div>

<form 
   onSubmit={(e) => e.preventDefault()}

className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-xl py-4'> {isSignInForm ? "Sign In":"Sign Up"} </h1>

    {!isSignInForm &&
        
        <input type="text"
    
        
        placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
      <input type="text" 
      ref={email}
      
      placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>

 




      <input type="password"
      
      ref={password}
      placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>

<p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>





      <p className='py-4 cursor-pointer' onClick={toggeSignInForm}>

      {isSignInForm ? " New to Netflix? Sign Up Now":"Already registered ?Sign Up In Now"}
        </p>
</form>

    </div>

  )
}

export default Login
