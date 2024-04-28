import connectDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

export const GET = async () => {
	try {
		await connectDB();
		//get user
		const sessionUser = await getSessionUser();
		if (!sessionUser || !sessionUser.userId) {
			return new Response("User Id is required", { status: 401 });
		}
		const { userId } = sessionUser;
		// Find user in database
		const user = await User.findOne({ _id: userId });
		//get user's bookmarks
		const bookmarks = await Property.find({_id:{$in: user.bookmarks}});
		return new Response(JSON.stringify(bookmarks), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Failed to fetch bookmarks", { status: 500 });
	}
};

export const POST = async (request) => {
	try {
		await connectDB();
		//get user
		const sessionUser = await getSessionUser();
		if (!sessionUser || !sessionUser.userId) {
			return new Response("User Id is required", { status: 401 });
		}
		const { userId } = sessionUser;
		// Find user in database
		const user = await User.findOne({ _id: userId });
		const { propertyId } = await request.json();

		//check if user is bookmarked
		let isBookmarked = user.bookmarks.includes(propertyId);
		let message;
		if (isBookmarked) {
			//already bookmarked, remove it
			user.bookmarks.pull(propertyId);
			message = "Bookmark removed successfully";
			isBookmarked = false;
		} else {
			user.bookmarks.push(propertyId);
			message = "Bookmark added successfully";
			isBookmarked = true;
		}
		await user.save();
		return new Response(JSON.stringify({ message, isBookmarked }), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new Response("Failed to bookmark property", { status: 500 });
	}
};
