import { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import { AvatarIcon } from "@radix-ui/react-icons";
import { EllipsisVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axiosInstance/axiosInstance";

interface NavBarProps {
    className?: string; // Optional className prop
}




const NavBar: React.FC<NavBarProps> = ({ className }) => {

    useEffect(()=>{


        const hitServerIndexRoute = async () =>{

            const response = await axiosInstance.get(`/`)
            console.log(response)
        }

        hitServerIndexRoute()




    },[])

    // Test auth state
    const [auth, setAuth] = useState(false);




    // State of NavBarDrawer width
    const [navBarDrawerWidth, setNavBarDrawerWidth] = useState('0px');


    // Page navigation
    const navigate = useNavigate()
    const handlePageNavigation = (page:string) =>{
        navigate(`${page}`)
        setNavBarDrawerWidth('0px')
    }

    // Hidden drawer contents for NavBar
    const NavBarDrawer = ()=>{
        return(

            <div id='navbar-drawer' style={{width: `${navBarDrawerWidth}`, transition: '0.25s'}} className="absolute z-10 top-0 left-0  h-screen bg-white border-black border-solid border-[1px]  overflow-x-hidden ">
                <div id='navbar-drawer-header' className="flex w-[100%] h-[50px] border-black border-dashed border-[1px] ">
                    {menuIconAndLogo('close')}
                </div>
                <div id='navbar-drawer-contents'>


                </div>
            </div> 
        )
    }


    // Menu icon and logo for NavBar
    const menuIconAndLogo = (toggle:string) =>{

        // Opens/Closes NavBarDrawer
        const toggleNavBarDrawer = () =>{
            if(toggle === 'open'){

                console.log('Navbar is open!')
                setNavBarDrawerWidth('300px')

            }else if(toggle === 'close'){

                console.log('Navbar is closed!')
                setNavBarDrawerWidth('0px')

            }
        }
        return(
            <div className='flex'>
                <div id='navbar-button'>
                    <MenuIcon className="mt-[10px] ml-[15px]" size={30} strokeWidth={2} onClick={()=>{toggleNavBarDrawer()}}/>
                </div>
                <div id='navbar-logo' className="h-[50px] ml-[10px] pt-[25px] text-[16px]">
                    <p onClick={()=>{handlePageNavigation('/')}} className="leading-[0px]">Logo</p>
                </div>
            </div>
        )

    }

    // Shows the search bar and login, or the user's avatar instead of login
    const searchBarAndUserDiv = () =>{

        const navbarUserDiv = () =>{
            if(auth === true){
                return(
                    <div id='navbar-user-div' className="flex h-[50px] w-[150px] border-black border-dashed border-[1px]">
                        {/* I need help here size is not an attribute. */}
                        <AvatarIcon className="w-[40px] h-[40px]"/>
                    </div>
                )
            }else{
                return(
                    <div id='navbar-user-div' className="flex justify-end w-[150px] h-[50px] border-black border-dashed border-[1px]">
                        <EllipsisVertical className="mt-[10px]"/>
                        <div id ='user-login-and-avatar' className="w-[auto] h-[50px] ml-[10px] mr-[15px] pt-[25px] text-[16px]">
                            <p onClick={()=>{handlePageNavigation('/user')}} className="leading-[0px]">Login</p>
                        </div>
                    </div>
                )

            }

        }
        return(
            <div id='search-bar-and-user-div' className="flex justify-end h-[50px] w-[100%] max-w-[1920px] border-black border-dashed border-[1px]">
                <div id='search-bar-user-div' className="h-[50px] w-[100%] max border-black border-dashed border-[1px]">

                </div>                
                {navbarUserDiv()}
            </div>
        )
    }



    // The visible NavBar
    return(
        <div id='navbar' className='flex relative w-[100%] h-[50px] border-black border-dashed border-[1px]'>
            {NavBarDrawer()}
            {menuIconAndLogo('open')}
            {searchBarAndUserDiv()}
        </div>
    )
}

export default NavBar;