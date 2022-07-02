import Login from '../../pages/login';
import styles from '../../styles/Login/Login.module.css'

export default function SeePassword(){

    let passwordInput = document.getElementById("senha");
    let inputTypePassword = passwordInput.type == "password"

    if(inputTypePassword){
        showPassword();
    }else{
        hidePassword();
    }

}

function showPassword(){
    passwordInput.setAttribute("type", "text");
}

function hidePassword(){
    passwordInput.setAttribute("type", "password")
}