import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <header className="w-full border-b bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between  px-6 py-4">

                {/* Logo / App Name */}
                <h1 className="text-xl font-semibold text-gray-800 items-center">
                    Task Manager
                </h1>

                {/* Navigation */}
                <nav className="flex gap-6">
                    {/* <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                            }`
                        }
                    >
                        Home
                    </NavLink> */}

                    <NavLink
                        to="/task"
                        className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                            }`
                        }
                    >
                        Tasks
                    </NavLink>
                    {/* <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                            }`
                        }
                    >
                        signup
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                            }`
                        }
                    >
                        login
                    </NavLink> */}
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                            }`
                        }
                    >
                        <CgProfile  size={30}/>

                    </NavLink>
                </nav>

            </div>
        </header>
    );
};

export default Header;
