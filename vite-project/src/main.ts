import './style.css';

let btns = document.querySelectorAll<HTMLButtonElement>('.btn');
let userName = document.querySelector<HTMLInputElement>(".user_input")!;
let firstName = document.querySelector<HTMLInputElement>(".first_name")!;
let lastName = document.querySelector<HTMLInputElement>(".last_name")!;
let email = document.querySelector<HTMLInputElement>(".email input")!;
let pass = document.querySelector<HTMLInputElement>(".pass input")!;


let userNameRegEx = new RegExp ('^[a-zA-Z0-9]+$');
let nameRegExp = /^[a-zA-Z]+$/;
let emailRegExp = /^[a-zA-Z0-9_-]@gmail.com+$/;
let passRegExp = /^[a-zA-Z0-9$@.!#]{8,}$/;




var width = 0;
btns.forEach((btn)=> {
    btn.addEventListener("click", ()=> { 
        
        btn.removeAttribute('data-bs-target');
        btn.removeAttribute('data-bs-slide');

        if(namesMatching() || emailRegExp.test(email.value) || passRegExp.test(pass.value)) {
            width += 25;
            document.querySelector<HTMLDivElement>(".steps")!.style.setProperty('--after-width', `${width}%`);
            
            switch (width) {
                case 25:
                    document.querySelector<HTMLElement>(".user_icon i")!.style.backgroundColor = "rgb(12, 148, 12)";
                    break;
            
                case 50:
                    document.querySelector<HTMLElement>(".email_icon i")!.style.backgroundColor = "rgb(12, 148, 12)";                
                    break;
            
                case 75:
                    document.querySelector<HTMLElement>(".pass_icon i")!.style.backgroundColor = "rgb(12, 148, 12)";                
                    break;
    
                case 100:
                    document.querySelector<HTMLElement>(".compelete_icon i")!.style.backgroundColor = "rgb(12, 148, 12)";                
                    break;
            
                default:
                    break;
            }

            const userData: IUser = {
                username: userName.value,
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value,
                pass: pass.value
            }
            document.getElementById("user")!.innerHTML = `User Name: ${userData.username} <br>
            Name: ${userData.firstname} ${userData.lastname} <br>
            Email: ${userData.email} <br>
            Password: ${userData.pass}
            `;
        }

    });
});




function namesMatching() {
    if(userNameRegEx.test(userName.value) && nameRegExp.test(firstName.value) && nameRegExp.test(lastName.value)) {
        return true
    }else {
        return false;
    }
}

interface IUser {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    pass: string;
}

