import React, { useState } from 'react'
import "./loginApp.style.css"
import Message from '../message/Message';

const credentials = {
    password: "12345",
    username: "geek"
}
const LoginApp = () => {

const [tryCount,SetTryCount]=useState(3)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmited, setIsSubmited] =useState(false)
    const [isSuccess, setIsSuccess] = useState(false);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (username === credentials.username && password === credentials.password) {
            setIsSubmited(true)
            setIsSuccess(true)
        } else {
            setIsSubmited(true)
            setIsSuccess(false)
            setPassword("")
            setUsername("")
            SetTryCount(tryCount -1)
        }



        console.log("form submited" ,username ,password)
    }

    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const showErrorMessage = () => {
        if (tryCount > 0) {
            return (<Message type={"error"}> try again! { tryCount} attempts left!</Message>)
        } else {
            return <Message type={"error"}>Your account is locked </Message>
        }
    }

  return (
      <div className='container'>
          {isSubmited && isSuccess ? (<Message type={"success"}>Success</Message>) : (
              <form onSubmit={onSubmitHandler}>
                  <div className='.form-item'>
                      <label>Username</label>
                      <input
                          name='username'
                          value={username}
                          onChange={onUsernameChange} />
                  </div>
                  <div className='form-item'>
                  
                      <label>Password</label>
                      <input
                          name='password'
                          value={password}
                          type='password'
                          onChange={onPasswordChange}
                      />
                  </div>

                  <button disabled={tryCount === 0} type='submit'>Login</button>
                  {isSubmited && !isSuccess ? showErrorMessage(): null}

              </form>
          )}
    </div>
  )
}

export default LoginApp