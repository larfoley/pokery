import React from 'react'

const Login = props => (
    <div className="login">

    <div className="form">
        <form className="register">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>

            <p className="reg">Already registered?
                <a href="/login">Sign In</a>`
            </p>
        </form>

        <form className="login">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>

            <p className="reg">Not registered?
              <a href="/register">Create an account </a>
            </p>

        </form>
    </div>
</div>

)

export default Login
