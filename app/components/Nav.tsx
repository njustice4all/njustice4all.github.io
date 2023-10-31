import { NavLink, useLocation } from '@remix-run/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const activeClassName = 'selected navlink';
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : 'navlink';

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className={activeStyleCallback}>
        Home
      </NavLink>
      {/* <NavLink to="/blog" className={activeStyleCallback}>
        Blog
      </NavLink> */}
      <NavLink to="/project" className={activeStyleCallback}>
        Project
      </NavLink>
      <NavLink
        to="https://career.programmers.co.kr/pr/urdlove_160"
        className={activeStyleCallback}
        target="_blank"
      >
        Resume
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <>
        {isOpen && (
          <div className="mt-4 basis-full md:hidden">
            <div>
              <NavLink to="/" className={activeStyleCallback}>
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/blog" className={activeStyleCallback}>
                Blog
              </NavLink>
            </div>
            <div>
              <NavLink to="/project" className={activeStyleCallback}>
                Project
              </NavLink>
            </div>
            <div>
              <NavLink
                to="https://career.programmers.co.kr/pr/urdlove_160"
                className={activeStyleCallback}
                target="_blank"
              >
                Resume
              </NavLink>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Nav;
