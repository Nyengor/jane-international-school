import Image from "next/image";
import { RiHome2Line, RiServiceLine, RiContactsLine, RiArrowRightLine } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="object-contain"
                />

                {/* Nav Links */}
                <ul className="flex space-x-8">
                    <li className="flex flex-col items-center cursor-pointer">
                        <RiHome2Line size={20} />
                        <span className="text-sm">Home</span>
                    </li>
                    <li className="flex flex-col items-center cursor-pointer">
                        <IoPeopleSharp size={20} />
                        <span className="text-sm">About</span>
                    </li>
                    <li className="flex flex-col items-center cursor-pointer">
                        <RiServiceLine size={20} />
                        Services
                    </li>
                    <li className="flex flex-col items-center cursor-pointer">
                        <RiContactsLine size={20} />
                        Contact
                    </li>
                </ul>

                {/* Enroll Now */}
                <div className="flex flex-row items-center justify-between">
                    <button className="flex items-center gap-2 text-2xl text-white px-4 py-2 bg-green-900 rounded-lg hover:">
                        Enroll Now
                        <RiArrowRightLine size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
