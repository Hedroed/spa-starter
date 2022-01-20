import { h } from 'preact'
import 'twin.macro'

import { HomeIcon, ChartPieIcon, ClipboardListIcon, CollectionIcon, CursorClickIcon, DuplicateIcon, ViewListIcon, TemplateIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { useCallback, useState } from 'react'
import { Transition } from '@headlessui/react'

export function SidebarContent() {
    const [open, setOpen] = useState(false)

    const toggleBar = useCallback(() => {
        setOpen(!open)
    }, [open])

    return (
    <div tw="py-4 text-gray-500 dark:text-gray-400">
                <a tw="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                    Windmill
                </a>
                <ul tw="mt-6">
                    <li tw="relative px-6 py-3">
                        <span tw="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                        <a
                            tw="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                            href="index.html"
                        >
                            <HomeIcon tw="h-5 w-5" />
                            <span tw="ml-4">Dashboard</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li tw="relative px-6 py-3">
                        <a tw="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="forms.html">
                            <ClipboardListIcon tw="h-5 w-5" />
                            <span tw="ml-4">Forms</span>
                        </a>
                    </li>
                    <li tw="relative px-6 py-3">
                        <a tw="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="cards.html">
                            <CollectionIcon tw="h-5 w-5" />
                            <span tw="ml-4">Cards</span>
                        </a>
                    </li>
                    <li tw="relative px-6 py-3">
                        <a tw="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="charts.html">
                            <ChartPieIcon tw="h-5 w-5" />
                            <span tw="ml-4">Charts</span>
                        </a>
                    </li>
                    <li tw="relative px-6 py-3">
                        <a tw="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="buttons.html">
                            <CursorClickIcon tw="h-5 w-5" />
                            <span tw="ml-4">Buttons</span>
                        </a>
                    </li>
                    <li tw="relative px-6 py-3">
                        <a tw="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="modals.html">
                            <DuplicateIcon tw="h-5 w-5" />
                            <span tw="ml-4">Modals</span>
                        </a>
                    </li>
                    <li tw="relative px-6 py-3">
                        <a tw="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="tables.html">
                            <ViewListIcon tw="h-5 w-5" />
                            <span tw="ml-4">Tables</span>
                        </a>
                    </li>
                    <li tw="relative px-6 py-3">
                        <button
                            tw="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                            onClick={toggleBar}
                            aria-haspopup="true"
                        >
                            <span tw="inline-flex items-center">
                                <TemplateIcon tw="h-5 w-5" />
                                <span tw="ml-4">Pages</span>
                            </span>
                            {(open && <ChevronDownIcon tw="h-4 w-4" />) || <ChevronUpIcon tw="h-4 w-4" />}
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
                                tw="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                                aria-label="submenu"
                            >
                                <li tw="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a tw="w-full" href="pages/login.html">
                                        Login
                                    </a>
                                </li>
                                <li tw="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a tw="w-full" href="pages/create-account.html">
                                        Create account
                                    </a>
                                </li>
                                <li tw="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a tw="w-full" href="pages/forgot-password.html">
                                        Forgot password
                                    </a>
                                </li>
                                <li tw="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a tw="w-full" href="pages/404.html">
                                        404
                                    </a>
                                </li>
                                <li tw="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a tw="w-full" href="pages/blank.html">
                                        Blank
                                    </a>
                                </li>
                            </ul>
                        </Transition>
                    </li>
                </ul>
                <div tw="px-6 my-6">
                    <button tw="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-offset-purple-500">
                        Create account
                        <span tw="ml-2" aria-hidden="true">
                            +
                        </span>
                    </button>
                </div>
            </div>
    )
}