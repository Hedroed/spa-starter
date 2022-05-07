import { BeakerIcon } from '@heroicons/react/solid'

export function Button({ children, ...props }) {
    return (
      <button className="flex items-center space-x-1 p-2 rounded bg-blue-500 dark:bg-red-300 hover:bg-blue-600 dark:hover:bg-red-400 text-white dark:text-slate-800" {...props}>
        <BeakerIcon className="h-5 w-5"/>
        <div>{children}</div>
      </button>
    );
}