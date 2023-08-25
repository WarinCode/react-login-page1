import {  JSX , useState , useEffect , useRef } from 'react'
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'
import ios from '../assets/ios-apple.svg'
import '../App.css'
import Btn from './Btn'

interface User {
    email:string | null,
    password:string | null,
    time?:string,
}

interface JsonData {
    "email":string | null,
    "password":string | null,
}

const Form = ():JSX.Element => {
    const [eye , setEye] = useState<boolean>(false);
    const [type , setType] = useState<string>('password');
    const[user , setUser] = useState<User>({ email: null , password: null });
    const[data , setData] = useState<JsonData>({ "email": null , "password": null})
    const email = useRef<string | null>('');
    const password = useRef<string | null>('');

    useEffect(():void => {
        const isOpen:boolean = eye;
        isOpen ? setType('text') : setType('password');
    } , [eye]);

    const handleClick = ():void => {
        setEye((b:boolean):boolean => !b);
    }

    const submitForm = ():void => {
        event?.preventDefault();
        try {
            setUser({
                email: email?.current?.value,
                password: password?.current?.value
            })
            setData(JSON.stringify({...user}));            
        }catch(err){
            console.error(err);
        }finally{
            console.log(data);
            setTimeout(():void => alert('บันทึกข้อมูลผู้ใช้งานเรียบร้อย!') , 2000);
        }
    }
  return (
    <form className='container'>
        <header>Let's sign you in</header>
        <div className='item'>
            <input type='email' id="email" placeholder='Enter your email' ref={email} required />            
        </div>
        <div className='item'>
            <input type={type} id="password" placeholder='Enter your password' ref={password} required/> 
            <span className='bi-group' onClick={handleClick}>
            { eye ? <i className="bi bi-eye-fill"></i>: <i className="bi bi-eye-slash"></i>}
            </span>     
        </div>
        <a href='#' target='_blank' className='fotgot_password' rel="noopener noreferrer">Forgot password?</a>      
        <button className='btn-login' type='submit' onClick={submitForm}>Login</button>
            <Btn text='Sign In with Facebook' logo={facebook} alt={facebook.toString()} />
            <Btn text='Sign In with Google' logo={google} alt={google.toString()}/>
            <Btn text='Sign In with IOS' logo={ios} alt={ios.toString()} />
            <footer>
                <p>Create an Acccount ?</p>
                <a href="#" target="_blank" rel="noopener noreferrer">Register</a>
            </footer>
    </form>
  )
}

export default Form;