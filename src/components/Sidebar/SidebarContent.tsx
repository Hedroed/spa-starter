import { HomeIcon, ChartPieIcon, ClipboardListIcon, CollectionIcon, CursorClickIcon, DuplicateIcon, ViewListIcon, TemplateIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { useCallback, useState } from 'react'
import { Transition } from '@headlessui/react'

export function SidebarContent() {
    const [open, setOpen] = useState(false)

    const toggleBar = useCallback(() => {
        setOpen(!open)
    }, [open])

    return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
                <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                    Windmill
                </a>
                <ul className="mt-6">
                    <li className="relative px-6 py-3">
                        <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                        <a
                            className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                            href="index.html"
                        >
                            <HomeIcon className="h-5 w-5" />
                            <span className="ml-4">Dashboard</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="forms.html">
                            <ClipboardListIcon className="h-5 w-5" />
                            <span className="ml-4">Forms</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="cards.html">
                            <CollectionIcon className="h-5 w-5" />
                            <span className="ml-4">Cards</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="charts.html">
                            <ChartPieIcon className="h-5 w-5" />
                            <span className="ml-4">Charts</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="buttons.html">
                            <CursorClickIcon className="h-5 w-5" />
                            <span className="ml-4">Buttons</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="modals.html">
                            <DuplicateIcon className="h-5 w-5" />
                            <span className="ml-4">Modals</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="tables.html">
                            <ViewListIcon className="h-5 w-5" />
                            <span className="ml-4">Tables</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <button
                            className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                            onClick={toggleBar}
                            aria-haspopup="true"
                        >
                            <span className="inline-flex items-center">
                                <TemplateIcon className="h-5 w-5" />
                                <span className="ml-4">Pages</span>
                            </span>
                            {(open && <ChevronDownIcon className="h-4 w-4" />) || <ChevronUpIcon className="h-4 w-4" />}
                        </button>
                        <Transition
                            show={open}
                            enter="transition-all ease-in-out duration-300"
                            enterFrom="opacity-25 max-h-0"
                            enterTo="opacity-100 max-h-xl"
                            leave="transition-all ease-in-out duration-300"
                            leaveFrom="opacity-100 max-h-xl"
                            leaveTo="opacity-0 max-h-0"
                        >
                            <ul
                                className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                                aria-label="submenu"
                            >
                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/login.html">
                                        Login
                                    </a>
                                </li>
                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/create-account.html">
                                        Create account
                                    </a>
                                </li>
                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/forgot-password.html">
                                        Forgot password
                                    </a>
                                </li>
                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/404.html">
                                        404
                                    </a>
                                </li>
                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/blank.html">
                                        Blank
                                    </a>
                                </li>
                            </ul>
                        </Transition>
                    </li>
                </ul>
                <div className="px-6 my-6">
                    <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:outline-purple-500">
                        Create account
                        <span className="ml-2" aria-hidden="true">
                            +
                        </span>
                    </button>
                </div>
            </div>
    )
}