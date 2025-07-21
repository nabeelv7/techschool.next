import Link from "next/link";

export default function SectionHero() {
	return (
		<main className="py-30">
			<div className="max-w-screen-md mx-auto text-center flex flex-col gap-5 justify-center items-center px-5">
				<h1 className="md:text-6xl text-4xl font-bold text-balance">
					Free technology education for&nbsp;
					<span className="underline decoration-wavy decoration-primary">
						everyone
					</span>
				</h1>
				<p className="md:text-xl text-md opacity-80">
					Go from zero to your first job without any financial loss
				</p>
				<span className="flex justify-center items-center flex-wrap gap-2">
					<Link
						href="/courses"
						className="bg-primary hover:opacity-90 text-primary-content w-fit py-3 px-5 rounded-md text-xl"
					>
						Explore Courses
					</Link>
					<Link
						href="/courses"
						className="hover:opacity-90 w-fit py-3 px-5 rounded-md text-xl"
					>
						View Bootcamps
					</Link>
				</span>
			</div>
		</main>
	);
}
