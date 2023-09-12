import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";

interface linkProps {
    to: string;
    title: string;
    children?: React.ReactNode;
}

const LinkElement: React.FC<linkProps> = ({ to, title, children }) => {
    return (
        <div className="hover:bg-blue-600 hover:text-white  p-2 px-6 rounded-3xl">
            <li className="flex flex-row items-center gap-2">
                {children}
                <a href={to}>{title}</a>
            </li>
        </div>
    );
};

export const Navbar = () => {
    return (
        <nav className="flex flex-row py-5 px-10 justify-between">
            <div>
                <Image alt="logo" src="/logo.png" width={50} height={5} />
            </div>
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
