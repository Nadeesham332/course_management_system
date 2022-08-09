import { useRef, useState, useEffect} from 'react';

const Login = () => {
    const userRef = useRef();
    const errorRef = useRef();
    
    const [user_ID, setUser_ID] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [user_ID, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user_ID, password);
        setUser_ID('');
        setPassword('');
        setSuccess(true);
    }

    return (
      <div className="Login-form-container">
      <form className="Login-form">
        <div className="Login-form-content">
        <>
            {success ? (
                <section>
                    <h1>You are successfully logged in!</h1>
                    <br />
                    <p>
                        <a href='#'>Go to Home</a>
                    </p>
                </section>
            ) : (
        <section>
            <p ref = {errorRef} className = {errorMessage ? "errorMessage" : "offscreen"} aria-live = "assertive"> {errorMessage} </p>
            <h3 className="Login-form-title">Log In</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userID">
                <div className="form-group mt-3">User ID:</div>
                <h3> </h3>
                </label>
                <input
                   type="email"
                   className="form-control mt-1"
                   placeholder="Enter the email address "
                   id = "userID"
                   ref={userRef}
                   autoComplete = "off"
                   onChange = {(e) => setUser_ID(e.target.value)}
                   value = {user_ID}
                   required
                />
                <h3> </h3> 
            

                <label htmlFor="password">Password:</label>
                <h3> </h3>
                <input
                    type = "password"
                    className="form-control mt-1"
                    placeholder="Enter the password"
                    id = "password"
                    onChange = {(e) => setPassword(e.target.value)}
                    value = {password}
                    required
                />

                <h1> </h1>
                <div className="d-grid gap-2 mt-3">
                  <button className="button" type="submit" >Log In</button>
                </div>
            </form>
        </section>
        )}
        </>
        </div>
      </form>
    </div>
    )
}

export default Login