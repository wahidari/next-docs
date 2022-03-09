export default function AlertOutline({ variant, children }) {

  return (
    variant == "success" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-emerald-500 dark:text-emerald-800 border border-emerald-500 dark:border-emerald-500" role="alert">
        {children}
      </div>
    : variant == "danger" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-red-500 dark:text-red-800 border border-red-500 dark:border-red-500" role="alert">
        {children}
      </div>
    : variant == "warning" ?
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-yellow-500 dark:text-yellow-800 border border-yellow-500 dark:border-yellow-500" role="alert">
        {children}
      </div>
    : variant == "dark" ?
            <div className="p-3 font-normal mb-4 text-sm rounded-lg text-gray-600 dark:text-gray-600 border border-gray-500 dark:border-gray-500" role="alert">
        {children}
      </div>
    : 
      <div className="p-3 font-normal mb-4 text-sm rounded-lg text-blue-500 dark:text-blue-800 border border-blue-500 dark:border-blue-500" role="alert">
        {children}
      </div>
  )
}