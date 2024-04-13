import { title } from "@/components/primitives";

import Image from 'next/image';

export default function DocsPage() {
	return (
		<div>
			
			<h1 className={title()}>Docs [Coming Soon]</h1>
			<div className="flex flex-col items-center justify-center m-6">
				<Image
					src="/joker.jpg"
					alt="Coming Soon"
					className="rounded-xl border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
					width={200}
					height={100}
				/>
				<p className="text-center text-gray-500 dark:text-gray-400">
					We are working hard to bring you the best documentation for our projects.
				</p>
				<p className="text-center text-gray-500 dark:text-gray-400">
					Please check back later for more information.
				</p>
				<p className="text-center text-gray-500 dark:text-gray-400">
					Thank you for your patience!
				</p>
				<p className="text-center text-gray-500 dark:text-gray-400">
					- JoKeR
				</p>

			</div>
		</div>
	);
}
