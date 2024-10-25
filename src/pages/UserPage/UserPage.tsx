import { forms } from "@/components";
const {LoginForm, RegistrationForm} = forms
const UserPage = () => {
    return (
        <div>
            <p>UserPage</p>
            <br/>
            <LoginForm />
            <br/>
            <RegistrationForm />
        </div>

    )
}

export default UserPage;
