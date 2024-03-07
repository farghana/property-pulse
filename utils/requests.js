const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all properties
const fetchProperties = async () => {
	try {
		//handle the case where domain is not available yet
		if (!apiDomain) return [];
		const response = await fetch(`${apiDomain}/properties`);
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		return response.json();
	} catch (error) {
		console.log(error);
		return [];
	}
};

//fetch property
const fetchProperty = async (id) => {
	try {
		//handle the case where domain is not available yet
		if (!apiDomain) return null;
		const response = await fetch(`${apiDomain}/properties/${id}`);
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		return response.json();
	} catch (error) {
		console.log(error);
		return null;
	}
};

export { fetchProperties, fetchProperty };
