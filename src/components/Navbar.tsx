import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";

interface linkProps {
    to: string;
    title: string;
    children?: React.ReactNode;
}

const LinkElement: React.FC<linkProps> = ({ to, title, children }) => {
    return (
        <a
            href={to}
            className="hover:bg-blue-600 hover:text-white font-bold p-2 px-6 rounded-3xl"
        >
            <li className="flex flex-row items-center gap-2">
                {children}
                {title}
            </li>
        </a>
    );
};

export const Navbar = () => {
    return (
        <nav className="w-full flex flex-row py-5 px-10 justify-between bg-white shadow-lg">
            <a className="hover:cursor-pointer" href={"/"}>
                <Image alt="logo" src="/logo.png" width={50} height={5} />
            </a>
            <div>
                <ul className="flex flex-row gap-10">
                    <LinkElement to="#about" title="About" />
                    <LinkElement to="#services" title="Our Services" />
                    <LinkElement to="#contact" title="Contact" />
                    <LinkElement to="#login" title="Login">
                        <FaUserAlt />
                    </LinkElement>
                </ul>
            </div>
        </nav>
    );
};
