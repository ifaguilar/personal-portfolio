import type { ComponentProps } from "react";

import { navItems } from "@/config/constants";

export function NavigationMenu(props: ComponentProps<"nav">) {
  return (
    <nav {...props}>
      <ul className="grid grid-cols-2 gap-4 lg:flex lg:grid-cols-none">
        {navItems.map((item) => (
          <li key={item.label} className="flex">
            <a
              href={item.href}
              className="hover:text-primary flex h-9 items-center px-4 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
