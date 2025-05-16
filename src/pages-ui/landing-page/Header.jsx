'use client'

import { useState } from 'react'
import { Dialog,DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel} from '@headlessui/react'
import Icons from '@/components/ui/Icon'
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
]

const callsToAction = [
  { name: 'Watch demo', href: '#' },
  { name: 'Contact sales', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#0086ff21]">
      <nav
        aria-label="Global"
        className="mx-auto container flex  items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-black font-bold text-[24px]">
              <span className="text-[#0086FF]">Muhiris </span>Doctor
            </span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Icons  icon="tdesign:view-list" className="cursor-pointer text-2xl" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="
              relative text-[16px] font-semibold text-[#0086FF] 
              transform transition duration-300 ease-in-out
              hover:scale-105 hover:opacity-[0.85]
              after:block after:absolute after:-bottom-2 after:left-0 after:h-[2px] 
              after:bg-blue-500 after:transition-all after:duration-300 after:w-full
            "
          >
            Home
          </a>

          <Popover className="relative">
            <PopoverButton
              className="
                relative text-[16px] font-semibold text-gray-900
                transform transition duration-300 ease-in-out
                hover:scale-105 hover:opacity-[0.85]
                after:block after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
                after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full
              "
            >
              <a href="#">Specialties</a>
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="relative rounded-lg p-4 text-[16px] hover:bg-gray-50"
                  >
                    <a href={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center p-3 text-[16px] font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="#"
            className="
              relative text-[16px] font-semibold text-gray-900
              transform transition duration-300 ease-in-out
              hover:scale-105 hover:opacity-[0.85]
              after:block after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
              after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full
            "
          >
            Doctors
          </a>

          <a
            href="#"
            className="
              relative text-[16px] font-semibold text-gray-900
              transform transition duration-300 ease-in-out
              hover:scale-105 hover:opacity-[0.85]
              after:block after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
              after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full
            "
          >
            About Us
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex gap-3 lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="
              text-[16px] py-2 px-5 rounded-[14px] font-semibold text-white bg-[#0086FF] 
              hover:opacity-80 hover:scale-105 
              transition duration-300 ease-in-out transform
            "
          >
            Register
          </a>
          <a
            href="#"
            className="
              text-[16px] py-2 px-5 rounded-[14px] font-semibold text-white bg-[#0086FF] 
              hover:opacity-80 hover:scale-105 
              transition duration-300 ease-in-out transform
            "
          >
            Log in
          </a>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <span className="text-black font-bold text-[24px]">
              <span className="text-[#0086FF]">Muhiris </span>Doctor
            </span>
          </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              ✕
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="flex w-full justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-[16px] font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
