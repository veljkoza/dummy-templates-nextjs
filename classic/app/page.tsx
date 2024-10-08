import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <main className="flex h-full flex-col">
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            {process.env.AGENCY_TITLE}
          </h1>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            This is a classic theme from Placely
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>
      </section>
      <footer className="mt-auto">
        <hr></hr>
        <div className="p-10 text-right">
          <pre className="text-sm">Classic theme</pre>
        </div>
      </footer>
    </main>
  )
}
