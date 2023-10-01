// footer.js

import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.google.com/">
          <img src="/images/github.svg" alt="logo" />
        </a>
        <a href="https://www.google.com/">
          <img src="/images/linkedin.svg" alt="logo" />
        </a>
        <Link href="/">Blog</Link>
        <Link href="/contact">Contact</Link>
        <p>©{new Date().getFullYear()} Hashiba</p>
      </div>
    </footer>
  );
};

export default Footer;
