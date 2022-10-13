import { Outlet, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/posts">Articles</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/photos">Photos</NavLink>
                </nav>
            </header>
            <Outlet />
      </>
    );
};

export { Nav };