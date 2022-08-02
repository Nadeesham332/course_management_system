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
        <>
            {success ? (
                <section>
                    <h1>You are successfully logged in!</h1>
                    <br />
                    <p>
                        <a href='/'>Go to Home</a>
                    </p>
                </section>
            ) : (
        <section>
            <p ref = {errorRef} className = {errorMessage ? "errorMessage" : "offscreen"} aria-live = "assertive"> {errorMessage} </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userID">userID:</label>
                <input
                    type = "text"
                    id = "userID"
                    ref={userRef}
                    autoComplete = "off"
                    onChange = {(e) => setUser_ID(e.target.value)}
                    value = {user_ID}
                    required
                />

                <label htmlFor="password">password:</label>
                <input
                    type = "password"
                    id = "password"
                    onChange = {(e) => setPassword(e.target.value)}
                    value = {password}
                    required
                />

                <button>Sign In</button>
            </form>
        </section>
        )}
        </>
    )
}

export default Login