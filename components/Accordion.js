import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Accordion({title, body}) {
    return (
        <div className="w-full mt-4">
            <div className="w-full rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between align-middle w-full text-base font-medium text-left pl-4 pr-2 py-2 text-blue-500 rounded-lg bg-blue-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-blue-100">
                                <span>{title}</span>
                                <ChevronRightIcon
                                    className={`${open ? 'transform rotate-90 transition-transform duration-300' : 'transition-transform duration-300'
                                        } w-6 h-6 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-3 text-base pl-4 pr-2">
                                {body}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}