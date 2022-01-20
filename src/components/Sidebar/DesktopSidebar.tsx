import 'twin.macro'

import { SidebarContent } from "./SidebarContent"

export function DesktopSidebar() {
    return (
        <aside tw="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <SidebarContent/>
        </aside>
    )
}
