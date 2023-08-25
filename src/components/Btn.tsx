import {JSX , FC  } from 'react'
import '../App.css'

interface Prop {
  text:string,
  logo:string,
  alt:string,
}

const Btn:FC<Prop> = ({logo , text , alt}):JSX.Element => {
  return (
    <div >
      <button className='btn-signin'>
        <img src={logo} alt={alt} /> 
        <p>{text}</p>
      </button>
    </div>
  )
}

export default Btn;