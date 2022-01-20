import 'twin.macro'

import {DesktopSidebar} from './DesktopSidebar'
import {MobileSidebar} from './MobileSidebar'

export function Sidebar({open, closeSidebar}) {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar open={open} closeSidebar={closeSidebar}/>
    </>
  )
}