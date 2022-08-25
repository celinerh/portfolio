/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import NavigationListItem from "./NavigationListItem";

const NavigationListItems = [
  { title: "Om", navLinkTo: "/" },
  { title: "Projekter", navLinkTo: "/projekter" },
];

export default function Example() {
  return (
    <Disclosure as="nav" className="mb-16 md:mb-32">
      {({ open }) => (
        <>
          <div className="flex px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex w-full">
              <div className="flex items-center flex-shrink-0">
                <Link to="/">
                  <svg
                    width="205"
                    height="86"
                    viewBox="0 0 205 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block w-auto mt-4 h-14"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="203"
                      height="67"
                      stroke="#52525B"
                      strokeWidth="2"
                    />
                    <rect x="45" y="56" width="116" height="30" fill="white" />
                    <path
                      d="M45.3764 29.9844H39.777C39.6747 29.2599 39.4659 28.6165 39.1506 28.054C38.8352 27.483 38.4304 26.9972 37.9361 26.5966C37.4418 26.196 36.8707 25.8892 36.223 25.6761C35.5838 25.4631 34.8892 25.3565 34.1392 25.3565C32.7841 25.3565 31.6037 25.6932 30.598 26.3665C29.5923 27.0312 28.8125 28.0028 28.2585 29.2812C27.7045 30.5511 27.4276 32.0937 27.4276 33.9091C27.4276 35.7756 27.7045 37.3437 28.2585 38.6136C28.821 39.8835 29.6051 40.8423 30.6108 41.4901C31.6165 42.1378 32.7798 42.4616 34.1009 42.4616C34.8423 42.4616 35.5284 42.3636 36.1591 42.1676C36.7983 41.9716 37.3651 41.6861 37.8594 41.3111C38.3537 40.9276 38.7628 40.4631 39.0866 39.9176C39.419 39.3722 39.6491 38.75 39.777 38.0511L45.3764 38.0767C45.2315 39.2784 44.8693 40.4375 44.2898 41.554C43.7188 42.6619 42.9474 43.6548 41.9759 44.5327C41.0128 45.402 39.8622 46.0923 38.5241 46.6037C37.1946 47.1065 35.6903 47.358 34.0114 47.358C31.6761 47.358 29.5881 46.8295 27.7472 45.7727C25.9148 44.7159 24.4659 43.1861 23.4006 41.1832C22.3438 39.1804 21.8153 36.7557 21.8153 33.9091C21.8153 31.054 22.3523 28.625 23.4261 26.6222C24.5 24.6193 25.9574 23.0937 27.7983 22.0455C29.6392 20.9886 31.7102 20.4602 34.0114 20.4602C35.5284 20.4602 36.9347 20.6733 38.2301 21.0994C39.5341 21.5256 40.6889 22.1477 41.6946 22.9659C42.7003 23.7756 43.5185 24.7685 44.1491 25.9446C44.7884 27.1207 45.1974 28.4673 45.3764 29.9844ZM56.5459 47V20.8182H74.1879V25.3821H62.0814V31.6207H73.2803V36.1847H62.0814V42.4361H74.2391V47H56.5459ZM85.7889 47V20.8182H91.3244V42.4361H102.549V47H85.7889ZM118.95 20.8182V47H113.415V20.8182H118.95ZM152.604 20.8182V47H147.822L136.432 30.5213H136.24V47H130.704V20.8182H135.562L146.864 37.2841H147.094V20.8182H152.604ZM164.377 47V20.8182H182.019V25.3821H169.913V31.6207H181.112V36.1847H169.913V42.4361H182.07V47H164.377Z"
                      fill="#52525B"
                    />
                    <path
                      d="M56.0114 75V63.3636H58.4716V68.1648H63.4659V63.3636H65.9205V75H63.4659V70.1932H58.4716V75H56.0114ZM81.842 69.1818C81.842 70.4508 81.6015 71.5303 81.1205 72.4205C80.6432 73.3106 79.9917 73.9905 79.1659 74.4602C78.3439 74.9261 77.4197 75.1591 76.3932 75.1591C75.3591 75.1591 74.4311 74.9242 73.6091 74.4545C72.7871 73.9848 72.1375 73.3049 71.6602 72.4148C71.183 71.5246 70.9443 70.447 70.9443 69.1818C70.9443 67.9129 71.183 66.8333 71.6602 65.9432C72.1375 65.053 72.7871 64.375 73.6091 63.9091C74.4311 63.4394 75.3591 63.2045 76.3932 63.2045C77.4197 63.2045 78.3439 63.4394 79.1659 63.9091C79.9917 64.375 80.6432 65.053 81.1205 65.9432C81.6015 66.8333 81.842 67.9129 81.842 69.1818ZM79.3477 69.1818C79.3477 68.3598 79.2246 67.6667 78.9784 67.1023C78.736 66.5379 78.3932 66.1098 77.95 65.8182C77.5068 65.5265 76.9879 65.3807 76.3932 65.3807C75.7985 65.3807 75.2795 65.5265 74.8364 65.8182C74.3932 66.1098 74.0485 66.5379 73.8023 67.1023C73.5598 67.6667 73.4386 68.3598 73.4386 69.1818C73.4386 70.0038 73.5598 70.697 73.8023 71.2614C74.0485 71.8258 74.3932 72.2538 74.8364 72.5455C75.2795 72.8371 75.7985 72.983 76.3932 72.983C76.9879 72.983 77.5068 72.8371 77.95 72.5455C78.3932 72.2538 78.736 71.8258 78.9784 71.2614C79.2246 70.697 79.3477 70.0038 79.3477 69.1818ZM86.8645 75V63.3636H89.3247V72.9716H94.3134V75H86.8645ZM99.9949 63.3636L102.807 72.2045H102.915L105.734 63.3636H108.461L104.449 75H101.279L97.2619 63.3636H99.9949ZM113.061 75V63.3636H120.902V65.392H115.522V68.1648H120.499V70.1932H115.522V72.9716H120.925V75H113.061ZM126.058 75V63.3636H130.649C131.528 63.3636 132.278 63.5208 132.899 63.8352C133.524 64.1458 134 64.5871 134.325 65.1591C134.655 65.7273 134.82 66.3958 134.82 67.1648C134.82 67.9375 134.653 68.6023 134.32 69.1591C133.986 69.7121 133.503 70.1364 132.871 70.4318C132.242 70.7273 131.481 70.875 130.587 70.875H127.513V68.8977H130.189C130.659 68.8977 131.049 68.8333 131.359 68.7045C131.67 68.5758 131.901 68.3826 132.053 68.125C132.208 67.8674 132.286 67.5473 132.286 67.1648C132.286 66.7784 132.208 66.4527 132.053 66.1875C131.901 65.9223 131.668 65.7216 131.354 65.5852C131.043 65.4451 130.651 65.375 130.178 65.375H128.518V75H126.058ZM132.342 69.7045L135.234 75H132.518L129.689 69.7045H132.342ZM139.315 65.392V63.3636H148.872V65.392H145.309V75H142.878V65.392H139.315Z"
                      fill="#52525B"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex w-full h-[60.5px] ml-3 border-b border-zinc-600">
                <div className="hidden sm:ml-auto sm:flex sm:space-x-8">
                  <ul className="flex items-center gap-5 pr-6 ml-auto md:pr-16 md:gap-16">
                    {NavigationListItems.map((listItem) => (
                      <NavigationListItem
                        title={listItem.title}
                        key={listItem.title}
                        navLinkTo={listItem.navLinkTo}
                      />
                    ))}
                  </ul>

                  <div className="hidden sm:flex sm:items-center text-zinc-600">
                    <ul className="flex items-center gap-3 pr-3 text-2xl ">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/celinerh"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank" rel="noreferrer">
                          <FaGithubSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center ml-auto -mr-2 sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 mr-3 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon
                        className="block w-6 h-6 text-zinc-600"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon
                        className="block w-6 h-6 text-zinc-600"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {NavigationListItems.map((listItem) => (
                <NavLink
                  to={listItem.navLinkTo}
                  key={listItem.title}
                  className="block py-2 pl-3 pr-4 text-base font-medium tracking-wide text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                >
                  {listItem.title}
                </NavLink>
              ))}
            </div>
            <div className="mb-8 border-t border-gray-300">
              <div className="flex items-center py-4 border-b border-zinc-600">
                <ul className="flex items-center gap-3 mx-auto text-2xl ">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/celinerh"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" rel="noreferrer">
                      <FaGithubSquare />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
