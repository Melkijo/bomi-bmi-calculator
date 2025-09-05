import { Dribbble, Github, Twitter, Wheat } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy"
  }
];

const Footer = () => {
  return (
    <footer className="bg-background border-t px-6 py-2">
      <div className="mx-auto w-full max-w-screen-2xl divide-y">
        <div className="flex flex-col items-center justify-between gap-4 px-2 pt-3 pb-5 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/bomi-logo.png" alt="Company Logo" width={100} height={50} />
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-4 px-2 pt-4 pb-2 sm:flex-row">
          <p className="text-muted-foreground text-sm font-medium">
            Copyright &copy; {new Date().getFullYear()} Bloxxee. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Dribbble className="text-muted-foreground h-5 w-5" />
            </Link>
            <Link href="/">
              <Twitter className="text-muted-foreground h-5 w-5" />
            </Link>
            <Link href="/">
              <Github className="text-muted-foreground h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
