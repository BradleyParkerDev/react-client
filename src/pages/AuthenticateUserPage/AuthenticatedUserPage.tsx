import { useParams } from "react-router-dom";


const AuthenticatedUserPage =  () => {

    const {userName} = useParams<{userName?:string}>()
    return (
        <div>
            <h1>AuthenticatedUserPage</h1>
            <p>Authenticated User: {userName}</p>

        </div>

    )
}

export default AuthenticatedUserPage;
