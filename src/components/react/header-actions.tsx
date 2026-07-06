import { NavigationDrawer } from "@/components/react/mobile-navigation";
import { ThemeDropdown } from "@/components/react/theme-dropdown";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <ThemeDropdown />

      <NavigationDrawer />
    </div>
  );
}
