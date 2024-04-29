import connectDB from "@/config/database";
import Property from "@/models/Property";

//GET /api/properties/search

export const GET = async (request) => {
	try {
		await connectDB();
		const { searchParams } = new URL(request.url);
		const searchTerm = searchParams.get("search");
		const propertyType = searchParams.get("type");

        const searchPattern = new RegExp(searchTerm, 'i');

        // Match location pattern against database fields
        let query = {
            $or: [
                {name: searchPattern},
                {description: searchPattern},
                {'location.street': searchPattern},
                {'location.city': searchPattern},
                {'location.state': searchPattern},
                {'location.zipcode': searchPattern},
            ]
        }

        //only check for property type if it's not all
        if(propertyType && propertyType !== 'All'){
            const typePattern = new RegExp(propertyType, 'i');
            query.type = typePattern;
        }

		const properties = await Property.find(query);

		return new Response(JSON.stringify(properties), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Something went wrong", { status: 500 });
	}
};
