import { NavLink } from "react-router-dom";

export default function Navbar() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Ass-1', path: '/ass1' },
        { name: 'Active', path: '/active' },
    ];
    return (
        <nav className="text-white flex justify-center gap-4 bg-blue-600 py-3 shadow-md" >
{
    links.map((link)=>(
        <NavLink key={link.name} to={link.path}  className={({ isActive }) =>
            `px-4 py-2 rounded ${
              isActive ? 'bg-white text-blue-600 font-bold' : 'hover:bg-blue-800'
            }`
          }>
            {link.name}
          </NavLink>
    ))
}
        </nav>
    );
}
