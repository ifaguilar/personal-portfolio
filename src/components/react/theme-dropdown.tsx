import { CheckIcon, LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    {
      label: "System",
      value: "system",
      icon: LaptopIcon,
    },
    {
      label: "Light",
      value: "light",
      icon: SunIcon,
    },
    {
      label: "Dark",
      value: "dark",
      icon: MoonIcon,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
        <LaptopIcon />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {themeOptions.map((option) => {
          const DropdownIcon = option.icon;

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
            >
              <DropdownIcon />
              <span>{option.label}</span>
              {theme === option.value ? <CheckIcon /> : null}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
