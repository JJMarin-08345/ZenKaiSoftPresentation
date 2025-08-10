import { Outlet } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <div className="absolute top-0 bg-gray-400 p-5 w-full">
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}