import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

export const GET = async (request) => {
	try {
		await connectDB();
		const properties = await Property.find({});
		//console.log(properties)
		return new Response(JSON.stringify(properties), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Something went wrong", { status: 500 });
	}
};

export const POST = async (request) => {
	try {
		await connectDB();
		const sessionUser = await getSessionUser();
		if (!sessionUser || !sessionUser.userId) {
			return new Response("User Id is required", { status: 401 });
		}
		const { userId } = sessionUser;
		const formData = await request.formData();
		const amenities = formData.getAll("amenities");
		const images = formData
			.getAll("images")
			.filter((image) => image.name !== "");

		//create propertyData object for database
		const propertyData = {
			type: formData.get("type"),
			name: formData.get("name"),
			description: formData.get("description"),
			location: {
				street: formData.get("location.street"),
				city: formData.get("location.city"),
				state: formData.get("location.state"),
				zipcode: formData.get("location.zipcode"),
			},
			beds: formData.get("beds"),
			baths: formData.get("baths"),
			square_feet: formData.get("square_feet"),
			amenities: amenities,
			rates: {
				weekly: formData.get("rates.weekly"),
				monthly: formData.get("rates.monthly"),
				nightly: formData.get("rates.nightly"),
			},
			seller_info: {
				name: formData.get("seller_info.name"),
				email: formData.get("seller_info.email"),
				phone: formData.get("seller_info.phone"),
			},
			//images: images,
			owner: userId,
		};

		console.log(formData);
		const newProperty = new Property(propertyData);
		await newProperty.save();

		return Response.redirect(`${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`)
		// return new Response(JSON.stringify({ message: "Property Added" }), {
		// 	status: 200,
		// });
	} catch (error) {
		return new Response("Failed to add property", { status: 500 });
	}
};
