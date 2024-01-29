import React from 'react'

const StepTwo = ({name, email, password, setStep }) => { // je fait destructuring ic ou props pour que je puisse récupérer ts les élem de stepTwo
  return (
    // Et les utilisés Ici (le destructuring)
    <div className='result'>
      <div>
        <span>Name :{name}</span> 
        <span>Email : {email}</span>
        <span>Password : {password}</span>
      </div>
     {/* ici, on retourne sur le Formulaire (step(1)) */}
      <button className='bac-button'
      onClick={() =>setStep(1)}>
   Edit your information
      </button>
      
    </div>
  )
}
 
export default StepTwo;
