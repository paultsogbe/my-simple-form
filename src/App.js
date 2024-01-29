import React,{useState} from 'react';
import './App.css';


import Form from "./components/Form.js"
import StepTwo from './components/StepTwo.js';
import Footer from './components/Footer.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faKey } from '@fortawesome/free-solid-svg-icons';
library.add( faKey);

// Etapes à suivre :
//1  HTML
//2 ÉtATS
//3 Interactions
// 4 CSS

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [step, setStep] = useState(1)
  const [errorPassword, setErrorPassword] = useState('')

  const handleSubmit = (e) => { // de ne pas faire disparaittre la page quand sa se rafflechire
    e.preventDefault();
    if (password !== confirmPassword || password === "" || confirmPassword === "") {
      setErrorPassword(true);
      // alert("Vos deux mots de passe ne sont pas identiques");
      
    }else {
      setErrorPassword(false);
      console.log('Ce qu il y a dans le state: ', [name, email, password]);
         setStep(2);
    }
    
  }
 
  return (
    <div className='container'>
 {/* ICI , je tranmettre toutes propriétées de form à form et je les recois en props dans son composent qui est form*/}
 {step === 1 ? (<h1>Create account</h1>) : step === 2 ? (<h1>Results</h1>) : null}

 {step === 1 ? (
  <Form 
  handleSubmit={handleSubmit}
  name={name}
  email={email}
  password={password}
  confirmPassword={confirmPassword}
  step={step}
  errorPassword={errorPassword}
  setName={setName}
  setEmail={setEmail}
  setPassword={setPassword}
  setConfirmPassword={setConfirmPassword}
  setErrorPassword={setErrorPassword}
  />
 ) : step === 2 ? ( //je transmettre ttes les propriétées de step2 ici et le recupérer ds le composant stepTwo
  <StepTwo
  setStep={setStep}
  name={name}
  email={email}
  password={password}
  />
 ) : null}

 <Footer/>

      
      
    </div>
  );
}

export default App;
