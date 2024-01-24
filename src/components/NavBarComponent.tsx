import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { SocialsComponent } from "./SocialsComponent";
import useMobileView from "../hooks/useMobileView";
import { Menu, Transition } from "@headlessui/react";
import { LogoComponent } from "./LogoComponent";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/portfolio", label: "Portafolio" },
  // { href: "/about", label: "Sobre mi" },
  { href: "/contact", label: "Contacto" },
];

export const NavBarComponent = () => {
  const { isMobile } = useMobileView();

  return (
    <div className="opacity-95 fixed top-0 w-full px-5 h-[75px] flex center-items z-30 bg-slate-100 shadow-md">
      {isMobile ? (
        <Menu as="div" className="relative grid w-full">
          <div className="z-50 flex justify-between self-center">
            <Link to="/">
              <LogoComponent />
            </Link>
            <Menu.Button className="transition rounded-lg shadow font-medium bg-slate-400 bg-opacity-70 hover:bg-opacity-30 px-3 py-2">
              Menu
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className="h-full w-full fixed top-[75px] right-0 z-40">
              <div className="h-full flex flex-col gap-7 items-end px-3 pb-3 pt-10 from-slate-100 from-35% bg-gradient-to-bl">
                {links.map((link) => (
                  <Menu.Item key={link.href}>
                    <Link
                      key={link.href}
                      to={link.href}
                      className="transition w-[90px] text-right border-slate-400 border-b-2 rounded-t hover:bg-slate-400 hover:bg-opacity-20 px-3 py-2"
                    >
                      {link.label}
                    </Link>
                  </Menu.Item>
                ))}
                <Menu.Item>
                  <SocialsComponent />
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <div className="grid grid-cols-4 w-full items-center text-slate-700 xl:gap-5 gap-2 md:gap-1">
          <Link to="/">
            <LogoComponent />
          </Link>
          <div className="col-span-2 flex gap-4 justify-self-center">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="transition rounded-t border-slate-400 border-b-2 font-medium hover:bg-slate-300 md:px-2 lg:px-3 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="col-end-auto justify-self-end">
            <SocialsComponent />
          </div>
        </div>
      )}
    </div>
  );
};
