import connectDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

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
		let isBookMarked = user.bookmarks.includes(propertyId);
		let message;
		if (isBookMarked) {
			//already bookmarked, remove it
			user.bookmarks.pull(propertyId);
			message = "Bookmark removed successfully";
			isBookMarked = false;
		} else {
			user.bookmarks.push(propertyId);
			message = "Bookmark added successfully";
			isBookMarked = true;
		}
		await user.save();
		return new Response(JSON.stringify({ message, isBookMarked }), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new Response("Failed to bookmark property", { status: 500 });
	}
};
