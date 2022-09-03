import splitbee from "@splitbee/web";

const Footer = () => {

  const footerLinks = [
    {
      href: "https://www.twitter.com/typicalmitul",
      text: "Twitter",
    },
    {
      href: "https://www.instagram.com/typicalmitul",
      text: "Instagram",
    },
    // {
    //   href: "https://500px.com/typicalmitul",
    //   text: "500px",
    // },
    {
      href: "mailto:typicalmitul@gmail.com",
      text: "Mail",
    },
  ]

  const Item = ({ href, children }) => (
    <li className="underline underline-offset-2">
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </li>
  );
  
  return (
    <footer className="flex flex-col px-6 py-6 text-sm border-t md:text-lg border-stone md:px-4">
      <ul className="flex gap-x-2">
        {footerLinks.map((link, index) => (
          <Item key={index} href={link.href}>
            {link.text}
          </Item>
        ))}
      </ul>
      <div className="mt-4 text-xs max-w-prose">
        This website was designed and built by myself, lots of water and Playboi
        Carti on repeat. <br /> If you have any feedback, I{"'"}d appreciate it!
        You can also visit the{" "}
        <a
          href="https://github.com/mitul-s/typicalmitul.com"
          onClick={() =>
            splitbee.track("Social Click", {
              location: "Github",
            })
          }
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          GitHub repo
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;