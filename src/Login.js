import "./login.css"
function Login()
{
    return(
        <div className="login1">
            <div className="login2">
                <form>
                    <input type="text" placeholder="Enter Name"></input><br></br>
                    <br></br>
                    <input type="password" placeholder="Enter Passwrod"></input><br></br>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Login