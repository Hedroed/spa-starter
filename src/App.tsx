import './main.css'

import { useState, useCallback } from 'react'

import { Button } from './components/Button'
import { Sidebar } from './components/Sidebar'
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
        <div className="dark dark:bg-slate-800 w-screen h-screen flex">
            <Sidebar open={isSideMenuOpen} closeSidebar={closeSidebar}/>
            <div className="flex flex-col flex-1 w-full">
                <Header toggleSideMenu={toggleSideMenu}/>
                <main className="h-full overflow-y-auto">
                    <div className="container max-w-7xl px-6 mx-auto">
                        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Dashboard
                        </h2>
                        <div className="text-center space-y-2">
                            <h1 className="dark:text-white">Hello world!</h1>
                            <Button onClick={click}>Click me {count}!</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
