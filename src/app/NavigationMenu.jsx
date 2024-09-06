"use client";

import React, { useState } from "react";
import styles from "./EastFelicianaParishChamber.module.css";

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Page 5",
    "Page 6",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle between true and false
  };

  return (
    <nav className={styles.navigation}>
      {/* Dropdown Button */}
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Items */}
      <div className={`${styles.navItems} ${isOpen ? styles.open : ""}`}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className={styles.navItem}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavigationMenu;
