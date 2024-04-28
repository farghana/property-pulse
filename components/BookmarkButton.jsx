"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";

const BookmarkButton = ({ property }) => {
	const { data: session } = useSession();
	const userId = session?.user?.id;
	const [isBookmarked, setIsBookmarked] = useState(false);

	const handleClick = async () => {
		if (!userId) {
			toast.error("You need to login");
			return;
		}
		try {
			const res = await fetch(`/api/bookmarks`, {
				method: "POST",
				body: JSON.stringify({
					propertyId: property._id,
				}),
			});
			if (res.status === 200) {
				const data = await res.json();
				toast.success(data.message);
				setIsBookmarked(data.isBookmarked);
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	return (
		<button
			onClick={handleClick}
			className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
		>
			<FaBookmark className='mr-1' />
			Bookmark Property
		</button>
	);
};

export default BookmarkButton;
