import { Outlet } from "react-router-dom"
import Footer from "../HomeSection/Footer"




export default function Layout(){
    return(
        <>
        <div className="bg-white">
            <Outlet />            
        </div>

        <div >
            <Footer />         
        </div>
        </>
    )
    
}