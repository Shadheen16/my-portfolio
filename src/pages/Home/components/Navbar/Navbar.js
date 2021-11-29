import { Link, NavLink } from 'react-router-dom';
import { Disclosure} from '@headlessui/react'
import Logo from '../../../Shared/Logo/Logo'
import { Fragment, useEffect, useState } from 'react';
import { saveAs } from "file-saver";

const navigation = [
  { name: 'HOME', link: '/', current: false },
  { name: 'ABOUT', link: '/about', current: false },
  { name: 'PROJECTS', link: '/projects', current: false },
  { name: 'CONTACT ME', link: '/contact', current: false },
];

///download resume
const saveFile = () => {
    console.log("initiate download")
    saveAs(
      "https://drive.google.com/file/d/1_nTUAcDCB7pTE5OGsKr4yohgazyYB8nO/view?usp=sharing",
      "example.pdf"
    );
  };


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [whiteNav, setWhiteNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setWhiteNav(true);
      } else {
        setWhiteNav(false);
      }
    })
    // return () => {
    //   window.removeEventListener("scroll")
    // }
  }
    , [])
  return (
    <Disclosure as="nav" className="sm:mt-0 fixed top-0 w-full  z-50  mr-auto rounded-sm bg-clr-nav text-gray-400 tracking-wider antialiased-subpixel border-b-2 border-white ring-2 ring-white ring-opacity-50 md:px-10  transform transition-all duration-500 ease-in shadow-md sm:w-[100%] sm:left-[0%]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
              <div className="mx-auto sm:mx-0 sm:mr-auto">
                <Logo />
              </div>
              <div className="flex ">
                <div className="hidden sm:inline-flex sm:items-center ">
                  <div className="flex space-x-4 md:space-x-10 mr-10 lg:space-x-20 ">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.link}
                        activeClassName="active"
                        className="text-[2vh] transform transition duration-300 ease-out nav-link"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <button onClick={saveFile}>download resume</button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                    type="button"
                    className="bg-red-400 lg:hidden p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>

                  </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:translate-x-2 transition-all duration-300 ease-out hover:text-gray-700',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              
                <button onClick={saveFile}>download resume</button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
