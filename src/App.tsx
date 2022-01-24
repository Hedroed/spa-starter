import { useState, useCallback } from 'react'

import './main.css'
import { Button } from './components/Button'
// import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

export function App() {
    const [count, setCount] = useState(0)

    const click = useCallback(() => setCount(count + 1), [count])

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    const toggleSideMenu = useCallback(() => {
        setIsSideMenuOpen(!isSideMenuOpen)
    }, [isSideMenuOpen])
    const closeSidebar = useCallback(() => {
        setIsSideMenuOpen(false)
    }, [])

    return (
        <div className="dark" styleName="w-screen h-screen flex dark:bg-slate-800">
            {/* <Sidebar open={isSideMenuOpen} closeSidebar={closeSidebar}/> */}
            <div styleName="flex flex-col flex-1 w-full">
                <Header toggleSideMenu={toggleSideMenu}/>
                <main styleName="h-full overflow-y-auto">
                    <div styleName="container max-w-7xl px-6 mx-auto">
                        <h2 styleName="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Dashboard
                        </h2>
                        <div styleName="text-center space-y-2">
                            <h1 styleName="dark:text-white">Hello world!</h1>
                            <Button onClick={click}>Click me {count}!</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
