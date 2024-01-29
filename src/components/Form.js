import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = ({setName, setEmail,setPassword, setConfirmPassword, setErrorPassword, name, email, password, confirmPassword, errorPassword, handleSubmit }) => { //destructuring d'objet (props)
 
 const [showPassword, setShowPassword] = useState(false);
 const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div>
       <form onSubmit={(e) => handleSubmit(e)}> 


        <span>Name</span>

            <input type='text' placeholder='jean Dupont' value={name} onChange={(e) =>setName(e.target.value)}></input>

            <span>email</span>
            <input type='email' placeholder='jeandupont@lereacteur.io' value={email} onChange={(e) =>setEmail(e.target.value)}></input>

            <span>Password</span>
            <div>
            <input 
            className={errorPassword ? 'error' : null}
            value={password}
            type={showPassword ? "text" : 'password' }
            placeholder="lErEaCtEuR2020"  onChange={(e) => {
              setErrorPassword(false)
              setPassword(e.target.value);
            }}

            />
            <FontAwesomeIcon
            icon='eye'
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            />
            </div>
            

            <span>Confirm your password</span>
             <div>
             <input
            className={errorPassword ? "error" : null}
             type={showConfirmPassword ? 'text' :  'password' }
             value={confirmPassword}
            placeholder="lErEaCtEuR2020" 
              onChange={(e) =>{
                setErrorPassword(false)
                setConfirmPassword(e.target.value);
              }}
            />
            <FontAwesomeIcon
            icon='eye'
            onClick={() => {
              setShowConfirmPassword(!showConfirmPassword);
            }}
            />
             </div>
             {errorPassword && ( <span className="error-message">
          Les mots de passe ne sont pas identiques
        </span>
        )}
            
         <input className='submit-button'
          value='Register' type='submit'

         />   
            <button type='submit'>Valider</button>
        </form>
      
    </div>
  )
}

export default Form;
