import React from 'react'

function LoginForm({ style, user, setUser, error, handlelogin, navigate }) {
    return (
        <div className={style.container}>
            <div className={style.leftsection}>
                <h1 className={style.header}>Already have an account?</h1>
                <p className={style.subheader}>Your personal job finder is here</p>
                <form action="">
                    <input
                        type="email"
                        placeholder="email"
                        value={user.email}
                        onInput={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    {error && <p className={style.errortext}>Field is required</p>}
                    <input
                        type="password"
                        placeholder="password"
                        value={user.password}
                        onInput={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    {error && <p className={style.errortext}>Field is required</p>}
                    <button className={style.submit} onClick={handlelogin}>
                        Sign in
                    </button>
                </form>
                <div className={style.login_register}>
                    <p className={style.login_caption}>
                        Don’t have an account?{" "}
                        <span
                            className={style.login_url}
                            onClick={() => navigate("/register")}
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
            <div className={style.rightsection}>
                {/* <img alt="" /> */}
                <p className={style.title}>Your Personal Job Finder</p>
            </div>
        </div>
    )
}

export default LoginForm