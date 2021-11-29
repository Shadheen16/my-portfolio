import { Link, NavLink } from 'react-router-dom';
import { Disclosure} from '@headlessui/react'
import Logo from '../../../Shared/Logo/Logo'
import { Fragment, useEffect, useState } from 'react';
import { saveAs } from "file-saver";
import { DownloadIcon } from '@heroicons/react/solid';
const navigation = [
  { name: 'HOME', link: '/', current: false },
  { name: 'ABOUT', link: '/about', current: false },
  { name: 'PROJECTS', link: '/projects', current: false },
  { name: 'CONTACT ME', link: '/contact-me', current: false },
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
    <Disclosure as="nav" className="font-robo sm:mt-0 fixed top-0 w-full  z-50 border-b border-clr-primary  mr-auto rounded-sm text-clr-dark tracking-wider antialiased-subpixel  md:px-10  transform transition-all duration-500 ease-in sm:w-[100%] sm:left-[0%]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-clr-nav focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
              <div className="flex">
                <div className="hidden sm:inline-flex sm:items-center ">
                  <div className="flex space-x-4 md:space-x-10 lg:space-x-20 ">
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
                  </div>
                  <button className="my-auto flex items-center ml-20 border-2 border-clr-accent bg-clr-primary py-2 px-3 hover:bg-clr-accent hover:text-clr-primary" onClick={saveFile}><span><DownloadIcon className="w-6 h-6 animate-bouncer"/></span><small>download resume</small></button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="text-clr-dark hover:translate-x-2 transition-all duration-300 ease-out hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button className="ml-5 mt-5 mb-10 border-2 border-clr-accent bg-clr-primary py-2 px-3 hover:bg-clr-accent hover:text-clr-primary" onClick={saveFile}><span></span> download resume</button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
