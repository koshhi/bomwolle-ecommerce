import Link from "next/link"
import { useLanguageContext } from "@/contexts/LanguageContext"

const Footer = () => {
  const { currentLocale, t } = useLanguageContext()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Bomwolle. {t.common.allRightsReserved}
            </p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <div className="flex space-x-6">
              <Link
                href={`/${currentLocale}/privacy-policy`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t.common.privacyPolicy}
              </Link>
              <Link
                href={`/${currentLocale}/terms-of-service`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t.common.termsOfService}
              </Link>
              <Link href={`/${currentLocale}/contact`} className="text-sm text-muted-foreground hover:text-foreground">
                {t.common.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

