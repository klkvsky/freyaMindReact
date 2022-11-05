import { NavLink } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button
                className="fixed top-10 right-4 lg:hidden flex flex-col items-center justify-center gap-[5px] z-50"
                id="mobileButtonMenu"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div
                    className={`w-[28px] h-[3px] bg-white rounded-full lg:group-hover:bg-black transition-all duration-300 ${
                        isOpen && "translate-y-[6px] -rotate-45 bg-black opacity-0 "
                    }`}
                />
                <div
                    className={`w-[28px] h-[3px] bg-white rounded-full lg:group-hover:bg-black transition-all duration-300 ${
                        isOpen && "rotate-45 bg-black"
                    }`}
                />
                <div
                    className={`w-[28px] h-[3px] bg-white rounded-full lg:group-hover:bg-black transition-all duration-300 ${
                        isOpen && "-translate-y-[8px] -rotate-45 bg-black"
                    }`}
                />
            </button>

            <div
                className={`w-screen h-screen fixed z-50 ${
                    isOpen ? "top-0" : "-top-[100rem]"
                } right-0 transition-all duration-200`}
            >
                <div className="bg-white w-full pb-20 z-40 relative">
                    <ul className="text-lg uppercase text-neutral-500 font-light flex flex-col items-center justify-center gap-4 pt-28 mb-10">
                        <NavLink to="/" className="font-bold text-neutral-600">
                            Freya Mind
                        </NavLink>
                        <NavLink
                            to="/aboutus"
                            className={(navData) => (navData.isActive ? "font-bold" : "")}
                        >
                            О нас
                        </NavLink>
                        <NavLink
                            className={(navData) => (navData.isActive ? "font-bold" : "")}
                            to="/pricing"
                        >
                            Цена
                        </NavLink>
                        {/* <li>
              <details>
                <summary className="text-center flex flex-row items-end justify-center gap-[8px]">
                  Помогаем{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-[6px] aspect-square rotate-90"
                  >
                    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
                  </svg>
                </summary>
                <ul className="text-base flex flex-col items-center justify-center gap-4 mt-4">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "font-bold" : ""
                    }
                    to="/eatingdisorder"
                  >
                    Помогаем
                  </NavLink>
                  <li>ЙОГА</li>
                  <li>Беспокойство</li>
                  <div className="w-96 h-px bg-neutral-500 opacity-50"></div>
                </ul>
              </details>
            </li> */}
                        <NavLink to="/1-Euro-Group-Therapy">
                            ГРУППОВАЯ ТЕРАПИЯ
                        </NavLink>
                        {/* <NavLink
              className={(navData) => (navData.isActive ? "font-bold" : "")}
              to="/livestream"
            ></NavLink> */}
                        <NavLink
                            className={(navData) => (navData.isActive ? "font-bold" : "")}
                            to="/contactus"
                        >
                            Свяжитесь с нами
                        </NavLink>
                    </ul>
                    <div className="flex items-center justify-center gap-2 absolute bottom-8 left-0 w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-8 fill-black"
                        >
                            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                            <circle cx="11.994" cy="11.979" r="3.003"></circle>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-8 fill-black"
                        >
                            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                        </svg>
                    </div>
                </div>
                {/* <div
          className={`bg-black w-screen h-screen ${
            isOpen ? "opacity-50" : "opacity-0"
          } z-0 fixed top-0 left-0 transition-all duration-300`}
        ></div> */}
            </div>
        </div>
    );
}
