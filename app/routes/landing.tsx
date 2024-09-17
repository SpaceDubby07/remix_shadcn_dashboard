import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';
import { Button } from '~/components/ui/button';

export default function landing() {
  return (
    <main className="max-w-2xl mx-auto mt-10">
      <section
        id="landing-nav"
        className="bg-primary-foreground flex items-center justify-between py-4 mb-10 border border-white border-opacity-25 rounded-lg"
      >
        <div className="flex items-center">
          <h3 className="px-6">PalLine</h3>
        </div>
        <div className="px-6 flex items-center">
          <Button variant="ghost">
            <HamburgerMenuIcon />
          </Button>
        </div>
      </section>
      <section
        id="landing-header"
        className="text-center tracking-wide"
      >
        <h1 className="text-4xl mb-10">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-red-400 via-indigo-400 to-blue-400 inline-block text-transparent bg-clip-text">
            PalLine
          </span>
        </h1>
        <p className="mb-10">
          PalLine is your destination for finding and creating lasting
          connections in the state of Connecticut.
        </p>
        <Link to={'/sign-up'}>
          <Button>Sign Up Today</Button>
        </Link>
      </section>
      <section id="landing-featured" className="mt-20 text-center">
        <h2 className="text-xl mb-10">Features</h2>
      </section>
    </main>
  );
}
