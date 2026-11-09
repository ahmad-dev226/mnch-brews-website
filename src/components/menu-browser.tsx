"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { menuCategories, menuSections } from "@/data/brand";

export function MenuBrowser() {
  const [category, setCategory] = useState<(typeof menuCategories)[number]>("All");
  const reduceMotion = useReducedMotion();
  const sections = category === "All"
    ? menuSections
    : menuSections.filter((section) => section.category === category);

  return (
    <>
      <div className="menu-filters" aria-label="Filter menu categories">
        {menuCategories.map((item) => {
          const itemCount = item === "All"
            ? menuSections.reduce((total, section) => total + section.items.length, 0)
            : menuSections.find((section) => section.category === item)?.items.length ?? 0;

          return (
            <button
              key={item}
              type="button"
              className={category === item ? "menu-filter active" : "menu-filter"}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}<span>{String(itemCount).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
      <motion.div layout className="menu-grid">
        <AnimatePresence mode="popLayout">
          {sections.map((section, index) => (
            <motion.section
              className="menu-card"
              key={section.category}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
              aria-label={section.category}
            >
              <header className="menu-card-heading">
                <span className="menu-card-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow">MNCH / MENU</p>
                  <h2>{section.category}</h2>
                </div>
                <span className="menu-card-count">{String(section.items.length).padStart(2, "0")} SIPS</span>
              </header>
              <ul className="menu-item-list">
                {section.items.map((item) => (
                  <li className="menu-item" key={item.name}>
                    <span>{item.name}</span>
                    <span className="menu-item-rule" aria-hidden="true" />
                    <span className="menu-item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </AnimatePresence>
      </motion.div>
      <p className="menu-disclaimer">Prices are shown in PKR as listed on the MNCH menu references.</p>
    </>
  );
}
