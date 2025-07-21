"use client";

import Image from "next/image";
import Link from "next/link";
import favicon from "@/app/favicon.ico";
import { IconCross, IconMenu } from "./Icons";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<nav className="flex justify-between items-center py-5 px-7 text-2xl">
				<span className="flex gap-2 items-center">
					<Image
						src={favicon}
						width={30}
						height={20}
						alt="Logo of the website"
					/>
					<h1>techschool</h1>
				</span>
				{/*desktop menu*/}
				<span className="gap-2 md:flex hidden">
					<Link className="hover:underline" href="/courses">
						Courses
					</Link>
					<p>/</p>
					<Link className="hover:underline" href="/bootcamps">
						Free technology education for everyone Bootcamps
					</Link>
				</span>

				{/*mobile icons*/}
				<span
					className="text-white md:hidden"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					{isOpen ? (
						<IconCross width={20} />
					) : (
						<IconMenu width={20} />
					)}
				</span>

				{/*mobile menu*/}
				{isOpen && <MobileMenu />}
			</nav>
		</header>
	);
}

export function MobileMenu() {
	return (
		<menu className="absolute top-18 px-5 pt-5 pb-10 flex flex-col gap-2 bg-black border-b-gray-600 border-b left-0 w-full text-center">
			<li>
				<Link href="/courses">Courses</Link>
			</li>
			<li>
				<Link href="/bootcamps">Bootcamps</Link>
			</li>
			<li>
				<a href="https://github.com/" target="_blank">
					Github
				</a>
			</li>
		</menu>
	);
}
