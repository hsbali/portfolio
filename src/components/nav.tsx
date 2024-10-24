import Link from "next/link";

const navItems = {
  // "/": {
  //   name: "home",
  // },
  "/about": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
  // "/work": {
  //   name: "work",
  // },
  // "/blog": {
  //   name: "blog",
  // },
};

export default function Navbar() {
  return (
    // <nav className="-ml-[11px] mb-16 mt-2">
    <header className="mb-20 mt-4">
      <div className="app-container sticky top-0">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="grow">
            <Link href="/" className="text-xl font-semibold py-1 px-2 -ml-2">
              Harmeet S.
            </Link>
          </div>
          <div className="flex items-center flex-row -mr-3">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-slate-800 dark:hover:text-slate-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
