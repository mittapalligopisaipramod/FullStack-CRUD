import {GoogleLogin} from 'react-google-login'
const clientId="30381816463-4fksmg0ngp7aa46gtme8rsgl0vk12m4p.apps.googleusercontent.com";
function Login(){
    const onSuccess=(res)=>{
        console.log('Login Success!',res.profileObj);
    }
    const onFailure=(res)=>{
        console.log('Login Faliure',res);
    }
    return(
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_orign'}
                isSignedIn={true}
            />
        </div>
    )
}
export default Login;