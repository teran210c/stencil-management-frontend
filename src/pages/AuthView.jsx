import { useState } from "react"

export default function AuthView() {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                backgroundColor: "#F1F5F9"
            }}
        >

            <div
                className="card shadow-sm p-4"
                style={{
                    width: "100%",
                    maxWidth: "400px"
                }}
            >

                <h2 className="text-center mb-4">

                    {isLogin
                        ? "Login"
                        : "Create Account"}

                </h2>

                <form>

                    {!isLogin && (

                        <div className="mb-3">

                            <label
                                className="form-label"
                            >
                                Username
                            </label>

                            <input
                                type="text"
                                className="form-control"
                            />

                        </div>

                    )}

                    <div className="mb-3">

                        <label
                            className="form-label"
                        >
                            Username
                        </label>

                        <input
                            type="text"
                            className="form-control"
                        />

                    </div>

                    <div className="mb-3">

                        <label
                            className="form-label"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                        />

                    </div>

                    {!isLogin && (

                        <div className="mb-3">

                            <label
                                className="form-label"
                            >
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                            />

                        </div>

                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >

                        {isLogin
                            ? "Login"
                            : "Sign Up"}

                    </button>

                </form>

                <hr />

                <button
                    className="btn btn-link"
                    onClick={() =>
                        setIsLogin(!isLogin)
                    }
                >

                    {isLogin
                        ? "Need an account? Sign Up"
                        : "Already have an account? Login"}

                </button>

            </div>

        </div>
    )

}