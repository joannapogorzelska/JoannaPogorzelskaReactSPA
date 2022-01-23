import React from 'react'; 

import '../style/login.css'

function Login() {

        return (
            <div>
                <label htmlFor=''>Podaj Login</label>
                <input type='text'></input>
                <label htmlFor=''>Podaj Hasło</label>
                <input type='password' ></input>
                <button>Zaloguj</button>
       
        </div>)
}
export default Login