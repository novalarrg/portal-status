import { Link } from "@inertiajs/inertia-react";

// import Avatar from "avataraaars";

const Navbar = ({ user }) => {
    // console.log("ini Iuser: ", user);
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    PortalStatus
                </a>
            </div>
            <div className="flex-none">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="avatar online placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                <span className="text-xl">P</span>
                            </div>
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Dasboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
