'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useLocation } from "react-router-dom";
import profileImg from '/images/profileIcon.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerOpacity, setHeaderOpacity] = useState("bg-opacity-5")
  const [headerText, setHeaderText] = useState("text-gray-300")
  const location = useLocation();
  
  
  const handleScroll = () => {
    if(location.pathname==="/portfolio/")
    {
      if (window.scrollY > 0) {
        setHeaderOpacity("bg-opacity-100");
        setHeaderText("text-gray-700");
      } else {
        setHeaderOpacity("bg-opacity-5");
        setHeaderText("text-gray-300");
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/portfolio/") {
      // If on the index page ("/")
      setHeaderOpacity("bg-opacity-5");
      setHeaderText("text-gray-300");
    } else {
      // For any page that is not "/"
      setHeaderOpacity("bg-opacity-100");
      setHeaderText("text-gray-700");
    }
  }, [location]);

  // Set up the event listener for scrolling when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener when the component unmounts
    };
  }, []);

  return (
    <header className={`bg-white fixed top-0 left-0 w-full ${headerOpacity} z-50`}>
      <nav aria-label="Global" className="mx-auto flex 2xl:max-w-[1536px] xl:max-w-[1280px] lg:max-w-[1024px] items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Daphne Song</span>
            <img alt="" src={profileImg} className="w-auto h-8" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className={`h-6 w-6 ${headerText}`} />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/#/about" className={`text-sm font-semibold leading-6 ${headerText}`}>
            About Me
          </a>
          <a href="/#/experience" className={`text-sm font-semibold leading-6 ${headerText}`}>
            Experiences
          </a>
          <a href="/#/projects" className={`text-sm font-semibold leading-6 ${headerText}`}>
            Projects
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Daphne Song</span>
              <img
                alt=""
                src={profileImg}
                className="w-auto h-8"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <a
                  href="/#/about"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  About Me
                </a>
                <a
                  href="/#/experience"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Experiences
                </a>
                <a
                  href="/#/projects"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
