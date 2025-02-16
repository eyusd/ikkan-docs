import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="container flex flex-col justify-center items-center px-4 sm:px-16 py-16">
        <h1 className="mb-8 text-5xl sm:text-6xl md:text-7xl font-extrabold bg-fd-background">The type-safe way to APIs</h1>
        <p className="text-fd-muted-foreground md:text-lg font-light lg:max-w-[70ch] bg-fd-background">
          Built for{' '}
          <Link
            href="https://nextjs.org/"
            className="text-fd-foreground font-semibold underline"
          >
            Next.js
          </Link>{' '}.
          Effortlessly create API routes that are type-checked, handle schema validation with {' '}
          <Link
            href="https://zod.dev/"
            className="text-fd-foreground font-semibold underline"
          >
            Zod
          </Link>{' '}
          and control your components lifecycle with{' '}
          <Link
            href="https://swr.vercel.app/"
            className="text-fd-foreground font-semibold underline"
          >
            SWR
          </Link>.
        </p>
        <dl className="py-5 pt-5 block text-left mt-8">
          <dt className="font-medium text-3xl ">
            <span className="bg-fd-background">一貫</span>
          </dt>
          <dt className="text-xl text-fd-muted-foreground mt-3">
            <span className="bg-fd-background">いっかん</span>
          </dt>
          <dt className="text-xl text-fd-muted-foreground mt-1">
            <span className="bg-fd-background">ikkan</span>
          </dt>
          <dd>
            <ul>
              <li className="mt-4">
                <dl>
                  <dd className="text-xs text-fd-muted-foreground italic font-medium md:text-sm bg-fd-background">
                    noun (common) (futsuumeishi), noun or participle which takes the aux. verb suru
                  </dd>
                  <dd className="flex items-center space-x-2 mt-1">
                    <span className="bg-fd-muted-foreground w-1.5 h-1.5 rounded-full" />
                    <span className="text-fd-muted-foreground font-regular ml-1 md:text-lg bg-fd-background">
                      consistency; coherence; integration; integrity
                    </span>
                  </dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
        <div className="mt-5 inline-flex items-center gap-3 max-md:mx-auto">
          <Link 
            href="/docs"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-fd-primary to-fd-primary/60 text-fd-primary-foreground shadow-fd-background/20 hover:bg-fd-primary/90 h-11 px-6 rounded-full"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/eyusd/ikkan"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 border from-fd-primary/10 shadow-fd-primary/10 hover:bg-fd-accent hover:text-fd-accent-foreground h-11 px-6 rounded-full bg-fd-background"
          >
            Example
          </Link>
        </div>
      </div>
      <div className="absolute -z-10 inset-0 h-full w-full bg-[radial-gradient(var(--color-fd-foreground)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_50%_50%,#000000AA_0%,transparent_100%)]" />
    </main>
  );
}
