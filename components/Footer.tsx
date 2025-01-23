import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Bomwolle. All rights reserved.
            </p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

