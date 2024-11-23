import React from "react";

interface AppleMenuProps {
  shut: (e: React.MouseEvent<HTMLLIElement>) => void;
  restart: (e: React.MouseEvent<HTMLLIElement>) => void;
  sleep: (e: React.MouseEvent<HTMLLIElement>) => void;
  toggleAppleMenu: () => void;
  btnRef: React.RefObject<HTMLDivElement>;
}

export default function AppleMenu({
  shut,
  restart,
  sleep,
  toggleAppleMenu,
  btnRef
}: AppleMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { language } = useLanguageContext();
  useClickOutside(ref, toggleAppleMenu, [btnRef]);

  return (
    <div className="menu-box left-2 w-56" ref={ref}>
      <MenuItemGroup>
        <MenuItem>{language === "en" ? "About this Mac" : "Sobre este Mac"}</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem>
          {language === "en" ? "System Preferences..." : "Preferencias del Sistema..."}
        </MenuItem>
        <MenuItem>App Store...</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem>{language === "en" ? "Recent Items" : "Últimos Objetos"}</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem>Force Quit...</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem onClick={sleep}>
          {language === "en" ? "Sleep..." : "Suspender..."}
        </MenuItem>
        <MenuItem onClick={restart}>
          {language === "en" ? "Restart..." : "Reiniciar..."}
        </MenuItem>
        <MenuItem onClick={shut}>
          {language === "en" ? "Shut Down..." : "Apagar..."}
        </MenuItem>
      </MenuItemGroup>
    </div>
  );
}
