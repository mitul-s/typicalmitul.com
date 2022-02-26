import NextLink  from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-4 font-medium uppercase border-b bg-eggshell border-dark">
      <a className="uppercase">Typical Mitul</a>
      <ul className="flex gap-x-4">
        <li>
          <NextLink href="/">Home</NextLink>
        </li>
        <li>
          <NextLink href="/about">About</NextLink>
        </li>
        <li>
          <NextLink href="/contact">Contact</NextLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;