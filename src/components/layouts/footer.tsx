import { FooterDesktop } from "./footer-desktop";
import { FooterMobile } from "./footer-mobile";

type FooterProps = {
  isMobile: boolean;
};

export function Footer(props: FooterProps) {
  const { isMobile } = props;

  if (isMobile) {
    return <FooterMobile />;
  }
  return <FooterDesktop />;
}
