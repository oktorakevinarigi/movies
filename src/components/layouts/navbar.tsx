"use client";
import { usePathname } from "next/navigation";
import { NavbarMobile } from "./navbar-mobile";

type NavbarProps = {
  isMobile: boolean;
};

export function Navbar(props: NavbarProps) {
  const { isMobile } = props;
  const pathName = usePathname();

  const newProps = {
    pathName,
  };

  if (isMobile) {
    return <NavbarMobile {...newProps} />;
  }
  return null;
}
