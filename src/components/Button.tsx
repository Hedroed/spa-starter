import 'twin.macro'

import { BeakerIcon } from '@heroicons/react/solid'

export function Button({ children, ...props }) {
    return (
      <button tw="flex items-center space-x-1 p-2 rounded bg-blue-500 dark:bg-blue-300 hover:bg-blue-600 dark:hover:bg-blue-400 text-white dark:text-gray-800" {...props}>
        <BeakerIcon className="h-5 w-5"/>
        <div>{children}</div>
      </button>
    );
}