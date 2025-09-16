import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: IProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`hover:text-gray-300 ${
        pathName === `/${href}` || pathName === href
          ? "text-gray-300 border-b-2 border-gray-300"
          : "border-b-2 border-transparent"
      } `}
    >
      {text}
    </Link>
  );
};

export default NavLink;
