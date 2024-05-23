import {GoogleLogin} from 'react-google-login'
const clientId="30381816463-4fksmg0ngp7aa46gtme8rsgl0vk12m4p.apps.googleusercontent.com";
function Logout(){
    const onSuccess=()=>{
        console.log('Log out Successful!');
    }
    return(
        <div id='signOutButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
export default Logout;