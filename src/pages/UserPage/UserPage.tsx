import { forms } from "@/components";
const {LoginForm, RegistrationForm1, RegistrationForm2} = forms
const UserPage = () => {
    return (
        <div>
            <p>UserPage</p>
            <br/>
            <LoginForm />
            <br/>
            <RegistrationForm1 />
            <br/>
            <RegistrationForm2 />
        </div>

    )
}

export default UserPage;
