import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import Container from "./Container";
import Link from 'next/link'
import cards from "../public/assets/cards.webp"

export default function Footer() {
  return (
    <div className="w-full bg-darkText text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer object-cover h-[80px] w-[80px]"
          />

          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            iste odit accusantium velit quibusdam, maxime mollitia labore,
            corrupti sunt commodi quasi consequatur ipsa totam, ratione sit
            dicta corporis ad distinctio!
          </p>

          {/* Social Media Links */}
          <div className="flex gap-x-2 items-center">
          <a href="https://github.com/Ometere-Godwin "target="_blank">
            <span
              className="socialLink">
              <BsGithub />
            </span>         
          </a>

          <a href="https://www.linkedin.com/in/ometere-oghene-godwin/ "target="_blank">
            <span
              className="socialLink">
              <BsLinkedin />
            </span>         
          </a>
          </div>
        </div>

        <div className="">
          <p className="text-lg">Latest Post</p>
          <ul className="flex gap-y-2 flex-col text-sm font-light">
           <li className="flex flex-col">
           <span className="text-slate-100 hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
           <span className="text-orange-600">January 1 2024</span>
           </li>

           <li className="flex flex-col">
           <span className="text-slate-100 hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
           <span className="text-orange-600">January 1 2024</span>
           </li>

           <li className="flex flex-col">
           <span className="text-slate-100 hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
           <span className="text-orange-600">January 1 2024</span>
           </li>

           <li className="flex flex-col">
           <span className="text-slate-100 hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
           <span className="text-orange-600">January 1 2024</span>
           </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <p>Links</p>
          <ul className="text-base font-medium mt-2 flex-col gap-y-2">
            <Link href="/">
            <li className="footerLinks">Home</li>
            </Link>
            <Link href="/cart">
            <li className="footerLinks">Cart</li>
            </Link>
            <Link href="/about">
            <li className="footerLinks">About</li>
            </Link>
            <li className="footerLinks">Newsletter</li>
            <li className="footerLinks">Contact</li>
          </ul>
        </div>

        <div>
          <p className="text-lg mb-2">Pay us with your trusted services</p>
          <Image src={cards} alt="payment methods"
          className="w-full h-10 object-cover"/>
        </div>
      </Container> 
    </div>
  );
}
