import { BeakerIcon } from '@heroicons/react/solid'

import '../main.css'

export function Button({ children, ...props }) {
    return (
      <button styleName="flex items-center space-x-1 p-2 rounded bg-blue-500 dark:bg-blue-300 hover:bg-blue-600 dark:hover:bg-blue-400 text-white dark:text-slate-800" {...props}>
        <BeakerIcon styleName="h-5 w-5"/>
        <div>{children}</div>
      </button>
    );
}