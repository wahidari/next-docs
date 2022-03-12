import { Tab } from '@headlessui/react'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Tabs({ tabsA, contentA, tabsB, contentB}) {
	return (
		<div className="w-full pt-4 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex p-1 space-x-1 bg-blue-50 dark:bg-neutral-900 rounded font-medium">
					<Tab
						className={({ selected }) =>
							classNames(
								'w-full py-2 text-base font-medium text-blue-500 rounded',
								selected
									? 'bg-blue-500 	text-white'
									: 'text-blue-500 hover:bg-blue-100 dark:hover:bg-neutral-800 hover:text-blue-600 dark:hover:text-blue-600'
							)
						}
					>
						{tabsA}
					</Tab>
					<Tab
						className={({ selected }) =>
							classNames(
								'w-full py-2 text-base font-medium text-blue-500 rounded',
								selected
									? 'bg-blue-500 	text-white'
									: 'text-blue-500 hover:bg-blue-100 dark:hover:bg-neutral-800 hover:text-blue-600 dark:hover:text-blue-600'
							)
						}
					>
						{tabsB}
					</Tab>
				</Tab.List>
				<Tab.Panels className="mt-2">
					<Tab.Panel className='rounded-xl p-3'>{contentA}</Tab.Panel>
					<Tab.Panel className='rounded-xl p-3'>{contentB}</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}