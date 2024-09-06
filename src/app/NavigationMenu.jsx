import React from "react";
import styles from "./EastFelicianaParishChamber.module.css";

function NavigationMenu() {
  const navItems = [
    "Home",
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Page 5",
    "Page 6",
  ];

  return (
    <nav className={styles.navigation}>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase().replace(" ", "-")}`}
          className={styles.navItem}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

export default NavigationMenu;
