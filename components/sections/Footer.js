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
    <footer className="grid-cols-2 px-6 py-6 text-sm border-t md:text-lg border-stone md:px-4 md:grid">
      <ul className="flex justify-start gap-x-2">
        {footerLinks.map((link, index) => (
          <Item key={index} href={link.href}>
            {link.text}
          </Item>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;