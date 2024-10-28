import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { pages } from "./pages";
const {Layout, HomePage, UserPage, AuthenticatedUserPage} = pages


const App =  () => {
  
    // create browser router
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />, 
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: '/user',
                    element: <UserPage />
                },
                {
                    path: '/user/:userName',
                    element: <AuthenticatedUserPage />
                }
            ]
        }
    ]);

    // Return RouterProvider make router available throughout application
    return <RouterProvider router={router} />
}

export default App;

