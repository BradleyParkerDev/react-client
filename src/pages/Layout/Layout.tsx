import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout =  () =>{

    // Use useEffect to safely modify the DOM
    useEffect(() => {
        // Set the body class
        document.body.classList.add('bg-[blue]', 'flex', 'justify-center') 

        // Cleanup function to remove the class when the component unmounts
        return () => {
            document.body.classList.remove('bg-[blue]', 'flex', 'justify-center')  // Reset the class when Layout is unmounted
        };
    }, []); // Empty dependency array to run the effect once
    return(
        <div id='container' className='bg-[white] w-[100vw] max-w-[1440px] h-[100vh] '>
            <Outlet/>
        </div>
    )

}

export default Layout;

