import { useState } from "react";
import { MenuIcon } from "lucide-react";

const NavBar =  ()=>{

    // State of NavBarDrawer width
    const [navBarDrawerWidth, setNavBarDrawerWidth] = useState('0px');


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
                <div id='navbar-logo' className="ml-[10px] mt-[18px] p-0 text-[16px]  border-black border-dashed border-[1px]">
                    <p className="p-0">Logo</p>
                </div>
            </div>
        )

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

    return(


        <div id='navbar' className='flex relative w-[100%] h-[50px] border-black border-dashed border-[1px]'>
            {NavBarDrawer()}
            {menuIconAndLogo('open')}
            <div id='navbar-search-bar'>


            </div>
            <div id='navbar-user-div'> 


            </div>
        </div>
    )
}

export default NavBar;