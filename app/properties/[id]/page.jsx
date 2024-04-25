"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyNavigation from "@/components/PropertyNavigation";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";

import Spinner from "@/components/Spinner";

const PropertyPage = () => {
	const { id } = useParams();
	const [property, setProperty] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPropertyData = async () => {
			if (!id) return;
			try {
				const property = await fetchProperty(id);
				setProperty(property);
			} catch (error) {
				console.error("Error fetching property:", error);
			} finally {
				setLoading(false);
			}
		};

		if (property === null) {
			fetchPropertyData();
		}
	}, [id, property]);

	if (!property && !loading) {
		return (
			<h1
				className='text-center
				text-2xl
				font-bold
				mt-10'
			>
				Property Not found
			</h1>
		);
	}
	return (
		<>	
			{loading && <Spinner loading={loading}/> }
			{!loading && property && (
				<>
					<PropertyHeaderImage image={property.images[0]} />
					<PropertyNavigation />
					<PropertyDetails propertyDetails={property}/>
					<PropertyImages images={property.images} />
				</>
			)}
		</>
	);
};

export default PropertyPage;
