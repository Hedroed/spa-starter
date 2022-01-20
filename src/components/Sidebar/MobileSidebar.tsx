import { h } from 'preact'
import 'twin.macro'

import { Transition } from '@headlessui/react'

import { SidebarContent } from './SidebarContent'

export function MobileSidebar({ open, closeSidebar }) {
    return (
        <>
            <Transition
                show={open}
                enter="transition ease-in-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in-out duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div onClick={closeSidebar} tw="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center md:hidden"/>
            </Transition>
            <Transition
                show={open}
                enter="transition ease-in-out duration-150"
                enterFrom="opacity-0 transform -translate-x-20"
                enterTo="opacity-100"
                leave="transition ease-in-out duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 transform -translate-x-20"
                // @click.away="closeSideMenu"
                // @keydown.escape="closeSideMenu"
            >
                <aside tw="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
                    <SidebarContent />
                </aside>
            </Transition>
        </>
    )
}
