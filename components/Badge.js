export default function Badge({ variant, children }) {

  return (
    variant == "success" ?
      <span className="text-xs font-semibold mr-2 px-2.5 pt-0.5 pb-1 rounded bg-green-200 text-green-700">
        {children}
      </span>
    : variant == "danger" ?
      <span className="text-xs font-semibold mr-2 px-2.5 pt-0.5 pb-1 rounded bg-red-200 text-red-700">
        {children}
      </span>
    : variant == "warning" ?
      <span className="text-xs font-semibold mr-2 px-2.5 pt-0.5 pb-1 rounded bg-yellow-200 text-yellow-700">
        {children}
      </span>
    : variant == "dark" ?
      <span className="text-xs font-semibold mr-2 px-2.5 pt-0.5 pb-1 rounded bg-gray-200 text-gray-700">
        {children}
      </span>
    : 
      <span className="text-xs font-semibold mr-2 px-2.5 pt-0.5 pb-1 rounded bg-blue-200 text-blue-700">
        {children}
      </span>
  )
}