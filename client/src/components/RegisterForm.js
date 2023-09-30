import React from 'react'


function RegisterForm({ style, newuser, setNewuser, error, handlesubmit, navigate }) {
    return (
        <div className={style.container}>
            <div className={style.leftsection}>
                <h1 className={style.header}>Create an account</h1>
                <p className={style.subheader}>Your personal job finder is here</p>
                <form>
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        value={newuser.name}
                        onInput={(e) => setNewuser({ ...newuser, name: e.target.value })}
                    />
                    {error && <p className={style.errortext}>Field is required</p>}
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={newuser.email}
                        onInput={(e) => setNewuser({ ...newuser, email: e.target.value })}
                    />
                    {error && <p className={style.errortext}>Field is required</p>}
                    <input
                        type="number"
                        placeholder="mobile"
                        name="mobile"
                        min="10"
                        max="10"
                        value={newuser.mobile}
                        onInput={(e) => setNewuser({ ...newuser, mobile: e.target.value })}
                    />
                    {error && <p className={style.errortext}>Field is required</p>}
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={newuser.password}
                        onInput={(e) =>
                            setNewuser({ ...newuser, password: e.target.value })
                        }
                    />
                    {error && <p className={style.errortext}>Field is required</p>}
                    <div
                        className={style.wrapper_check}
                        style={{ justifyContent: "flex start" }}
                    >
                        <input
                            type="checkbox"
                            name="checkbox"
                            className={style.checkbox}
                            onInput={(e) =>
                                setNewuser({ ...newuser, checkbox: e.target.checked })
                            }
                        />
                        <p className={style.checkbox_caption}>
                            By creating an account, I agree to our terms of use and privacy
                            policy
                        </p>
                    </div>
                    {error && (
                        <p className={style.errortext}>
                            Please check this box if you want to proceed
                        </p>
                    )}
                    <button type="submit" className={style.submit} onClick={handlesubmit}>
                        Create Account
                    </button>
                </form>
                <div className={style.login_register}>
                    <p className={style.login_caption}>
                        Already have an account?{" "}
                        <span
                            className={style.login_url}
                            onClick={() => navigate("/login")}
                        >
                            Sign In
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

export default RegisterForm