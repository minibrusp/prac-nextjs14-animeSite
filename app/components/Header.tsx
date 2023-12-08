'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/app/components/ui/navigation-menu';

export default function NavBar() {
  return (
    <header className='flex justify-start items-center gap-4 mx-auto mb-4 border-b border-primary max-w-[1440px]'>
      <NavigationMenu className=''>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href='/'>
              <h1 className='text-lg font-bold text-primary bg-primary-foreground p-4 leading-relaxed inline-block tracking-widest'>
                MEOW
              </h1>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
