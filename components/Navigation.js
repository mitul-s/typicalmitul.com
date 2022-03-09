import NextLink  from "next/link";
import { Link } from "@components"

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-4 font-medium uppercase border-b bg-eggshell border-dark">
      <NextLink href="/" passHref>
        <Link>Typical Mitul</Link>
      </NextLink>
      <ul className="flex gap-x-4">
        <li>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/about" passHref>
            <Link>About</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/contact" passHref>
            <Link>Contact</Link>
          </NextLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;