import React from "react";


function Loguearse() {

    return (<div>
        <h1>Login</h1>
        <div className="registro">
            <form action="#" method="GET">
                <label>
                    Email:
                </label>
                <br />
                <input type="email" name="email" required placeholder="email" />
                <br />
                <label>
                    Password:
                </label>
                <br />
                <input type="password" name="password" required placeholder="password" />
                <br />
                <input type="submit" />
            </form>
        </div>
    </div>
    );
}

export default Loguearse;