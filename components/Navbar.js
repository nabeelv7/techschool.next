import Image from "next/image";
import Link from "next/link";
import favicon from "@/app/favicon.ico";

export default function Navbar() {
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
				<span className="flex gap-2">
					<Link className="hover:underline" href="/courses">
						Courses
					</Link>
					<p>/</p>
					<Link className="hover:underline" href="/bootcamps">
						Bootcamps
					</Link>
				</span>
			</nav>
		</header>
	);
}
