import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <>
            <Navbar fluid rounded className="px-24 py-6">
                <NavbarBrand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        &lt;web effects/&gt;
                    </span>
                </NavbarBrand>
                <div className="hidden md:flex gap-8 list-none font-semibold text-gray-800">
                    {/* Replace href with NavLink */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/pricing"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="/become-contributor"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        Become a Contributor
                    </NavLink>
                </div>

                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded
                            />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </DropdownHeader>
                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownItem>
                            <div>
                                <NavLink
                                    to="/user-register"
                                >
                                    Register
                                </NavLink>
                            </div>
                        </DropdownItem>
                        <DropdownItem>Earnings</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem>Sign out</DropdownItem>
                    </Dropdown>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/pricing"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500"
                                : "text-gray-800 hover:text-blue-500"
                        }
                    >
                        Contact
                    </NavLink>
                </NavbarCollapse>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
