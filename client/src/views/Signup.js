import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Signup({ onLogin }) {

    const [errors, setErrors] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //   const [image_url, setImage_url] = useState('')
    //  const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [showSignUp, setSignUp] = useState(true);

    const handleSignup = (e) => {
        e.preventDefault()
        setErrors([]);
        setIsLoading(true);
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password

            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
            // navigate('/signin')
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }


    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)
    // const handleChangeImage = e => setImage_url(e.target.value)

    return (
        <>
            {showSignUp ? (
                
                    <div className="signup-page">
                        <div className="form-container">
                            <form onSubmit={handleSignup}>
                                <div className="form-header">Sign Up</div>
                                {/* {formError && <div className="form-error">{formError}</div>} */}
                                <input type="text" name="username" placeholder="username..." className="form-input" value={username} onChange={handleChangeUsername} />
                                <input type="password" name="password" placeholder="password..." className="form-input" value={password} onChange={handleChangePassword} />
                                {/* <input type="text" className="form-input" onChange={handleChangeImage} value={image_url} placeholder='image url...' /> */}
                                <button type="submit" className="form-button">{isLoading ? "Loading..." : "Sign Up"}</button>
                            </form>
                            {/* <a href="/" className='form-button' > signIN</a> */}
                            <p>
                                Already Have an Account? <a onClick={setSignUp(false)}>Sign in!</a>
                            </p>
                        </div>
                    </div>
                
            ) : (
                <>
                    <div className='signup-page'>
                        <div className="form-container">
                            <form onSubmit={handleLogin}>
                                <div className="form-header">Welcome</div>
                                <h1 className='form-header'>Please Sign-in or <a onClick={setSignUp(true)} >Sign-Up</a></h1>
                                <p style={{ color: 'red' }}>{errors ? errors : null}</p>
                                {/* {formError && <div className="form-error">{formError}</div>} */}
                                <input type="text" name="username" placeholder="username..." className="form-input" value={username} onChange={handleChangeUsername} />
                                <input type="password" name="password" placeholder="password..." className="form-input" value={password} onChange={handleChangePassword} />
                                <button type="submit" className="form-button">Sign In</button>
                            </form>
                            <p>
                             Don't Have An Account? <a onClick={setSignUp(true)}> Sign Up! </a>
                            </p>
                        </div>
                    </div >
                </>
            )}
        </>
    );
}
        // <div className="signup-page">
        //     <div className="form-container">
        //         <form onSubmit={handleSignup}>
        //             <div className="form-header">Sign Up</div>
        //             {/* {formError && <div className="form-error">{formError}</div>} */}
        //             <input type="text" name="username" placeholder="username..." className="form-input" value={username} onChange={handleChangeUsername} />
        //             <input type="password" name="password" placeholder="password..." className="form-input" value={password} onChange={handleChangePassword} />
        //             <input type="text" className="form-input" onChange={handleChangeImage} value={image_url} placeholder='image url...' />
        //             <Button type="submit" className="form-button">{isLoading ? "Loading..." : "Sign Up"}</Button>
        //         </form>
        //         {/* <a href="/" className='form-button' > signIN</a> */}
        //         <p>
        //             <a>Already Have an Account? Sign in!</a>
        //         </p>
        //     </div>
        // </div>