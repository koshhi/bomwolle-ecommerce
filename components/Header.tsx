"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useLanguageContext } from "@/contexts/LanguageContext"
import CartButton from "@/components/CartButton"
import { LanguageSelector } from "@/components/LanguageSelector"

const Header = () => {
  const pathname = usePathname()
  const { currentLocale, t } = useLanguageContext()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={`/${currentLocale}`}>
              <span className="sr-only">Bomwolle</span>
              <img className="h-8 w-auto sm:h-10" src="/logo.svg" alt="Bomwolle" />
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t.common.products}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={`/${currentLocale}/products`}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">{t.common.featuredCollection}</div>
                          <p className="text-sm leading-tight text-muted-foreground">{t.common.discoverLatest}</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href={`/${currentLocale}/products/bags`}>{t.common.bags}</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href={`/${currentLocale}/products/wallets`}>{t.common.wallets}</a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href={`/${currentLocale}/products/belts`}>{t.common.belts}</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/${currentLocale}/products`} legacyBehavior passHref>
                  <NavigationMenuLink>{t.common.allProducts}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/${currentLocale}/about`} legacyBehavior passHref>
                  <NavigationMenuLink>{t.common.about}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/${currentLocale}/blog`} legacyBehavior passHref>
                  <NavigationMenuLink>{t.common.blog}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <CartButton />
            <LanguageSelector />
            <Button variant="outline" className="ml-8">
              {t.common.signIn}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

