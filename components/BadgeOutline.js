export default function BadgeOutline({ variant, children }) {

  return (
    variant == "success" ?
      <span className="text-xs font-semibold mr-2 px-2 py-1 rounded text-green-500 dark:text-green-800 border border-green-500 dark:border-green-500">
        {children}
      </span>
    : variant == "danger" ?
      <span className="text-xs font-semibold mr-2 px-2 py-1 rounded text-red-500 dark:text-red-800 border border-red-500 dark:border-red-500">
        {children}
      </span>
    : variant == "warning" ?
      <span className="text-xs font-semibold mr-2 px-2 py-1 rounded text-yellow-500 dark:text-yellow-800 border border-yellow-500 dark:border-yellow-500">
        {children}
      </span>
    : variant == "dark" ?
      <span className="text-xs font-semibold mr-2 px-2 py-1 rounded text-gray-600 dark:text-gray-600 border border-gray-500 dark:border-gray-500">
        {children}
      </span>
    : 
      <span className="text-xs font-semibold mr-2 px-2 py-1 rounded text-blue-500 dark:text-blue-800 border border-blue-500 dark:border-blue-500">
        {children}
      </span>
  )
}