import { MenuIcon } from "lucide-react";

import { NavigationMenu } from "@/components/react/navigation-menu";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export function NavigationDrawer() {
  return (
    <Drawer>
      <DrawerTrigger
        render={<Button variant="outline" size="icon" className="lg:hidden" />}
      >
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <NavigationMenu />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
