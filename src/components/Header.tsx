import 'twin.macro'

import { Transition } from '@headlessui/react'
import { SearchIcon, SunIcon, MoonIcon, BellIcon, UserIcon, CogIcon, LogoutIcon, MenuIcon } from '@heroicons/react/solid'
import { useCallback, useState } from 'react';


export function Header({ toggleSideMenu, ...props }) {
    const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const dark = true;

    const clickProfileMenu = useCallback(() => setIsProfileMenuOpen(!isProfileMenuOpen), [isProfileMenuOpen]);
    const clickNotificationsMenu = useCallback(() => setIsNotificationsMenuOpen(!isNotificationsMenuOpen), [isNotificationsMenuOpen]);

    return (
        <header tw="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div tw="container max-w-7xl flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                {/* Mobile hamburger */}
                <button
                    tw="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:ring-offset-purple-500"
                    onClick={toggleSideMenu}
                    aria-label="Menu"
                >
                    <MenuIcon tw="w-6 h-6"/>
                </button>
                {/* Search input */}
                <div tw="flex justify-center flex-1 lg:mr-32">
                    <div tw="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                        <div tw="absolute inset-y-0 flex items-center pl-2">
                            <SearchIcon tw="w-4 h-4"/>
                        </div>
                        <input
                            tw="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md leading-5 dark:placeholder-gray-500 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white dark:focus:bg-gray-700 focus:border-purple-300 dark:focus:ring-gray-500 focus:ring-purple-100 focus:ring outline-none"
                            type="text"
                            placeholder="Search for projects"
                            aria-label="Search"
                        />
                    </div>
                </div>
                <ul tw="flex items-center flex-shrink-0 space-x-6">
                    {/* Theme toggler */}
                    <li tw="flex">
                        <button
                            tw="rounded-md focus:outline-none focus:ring-offset-purple-500"
                            //   @click="toggleTheme"
                            aria-label="Toggle color mode"
                        >
                            {dark && (<SunIcon tw="w-5 h-5"/>) || (<MoonIcon tw="w-5 h-5"/>)}
                        </button>
                    </li>
                    {/* Notifications menu */}
                    <li tw="relative">
                        <button
                            tw="relative align-middle rounded-md focus:outline-none focus:ring-offset-purple-500"
                            //   @click="toggleNotificationsMenu"
                            //   @keydown.escape="closeNotificationsMenu"
                            onClick={clickNotificationsMenu}
                            aria-label="Notifications"
                            aria-haspopup="true"
                        >
                            <BellIcon tw="w-5 h-5" />
                            {/* Notification badge */}
                            <span
                                aria-hidden="true"
                                tw="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                            ></span>
                        </button>
                        <Transition
                            show={isNotificationsMenuOpen}
                            leave="transition-opacity ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            // @click.away="closeNotificationsMenu"
                        >
                            <ul
                                // @keydown.escape="closeNotificationsMenu"
                                tw="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                            >
                                <li tw="flex">
                                    <a
                                        tw="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Messages</span>
                                        <span tw="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                            13
                                        </span>
                                    </a>
                                </li>
                                <li tw="flex">
                                    <a
                                        tw="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Sales</span>
                                        <span tw="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li tw="flex">
                                    <a
                                        tw="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Alerts</span>
                                    </a>
                                </li>
                            </ul>
                        </Transition>
                    </li>
                    {/* Profile menu */}
                    <li tw="relative">
                        <button
                            tw="align-middle rounded-full focus:ring-offset-purple-500 focus:outline-none"
                            //   @keydown.escape="closeProfileMenu"
                            onClick={clickProfileMenu}
                            aria-label="Account"
                            aria-haspopup="true"
                        >
                            <img
                                tw="object-cover w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                                alt=""
                                aria-hidden="true"
                            />
                        </button>
                        <Transition show={isProfileMenuOpen} leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <ul
                                // @click.away="closeProfileMenu"
                                // @keydown.escape="closeProfileMenu"
                                tw="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                                aria-label="submenu"
                            >
                                <li tw="flex">
                                    <a
                                        tw="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <UserIcon tw="w-4 h-4 mr-3"/>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li tw="flex">
                                    <a
                                        tw="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <CogIcon tw="w-4 h-4 mr-3"/>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li tw="flex">
                                    <a
                                        tw="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <LogoutIcon tw="w-4 h-4 mr-3"/>
                                        <span>Log out</span>
                                    </a>
                                </li>
                            </ul>
                        </Transition>
                    </li>
                </ul>
            </div>
        </header>
    )
}
