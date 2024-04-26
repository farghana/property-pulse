"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyNavigation from "@/components/PropertyNavigation";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";

import Spinner from "@/components/Spinner";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButton from "@/components/ShareButton";
import PropertyContactForm from "@/components/PropertyContactForm";

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
			{loading && <Spinner loading={loading} />}
			{!loading && property && (
				<>
					<PropertyHeaderImage image={property.images[0]} />
					<PropertyNavigation />
					<section className='bg-blue-50'>
						<div className='container m-auto py-10 px-6'>
							<div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
								<PropertyDetails propertyDetails={property} />
								{/* <!-- Sidebar --> */}
								<aside className='space-y-4'>
									<BookmarkButton property={property} />
									<ShareButton property={property} />
									<PropertyContactForm />
								</aside>
							</div>
						</div>
					</section>

					<PropertyImages images={property.images} />
				</>
			)}
		</>
	);
};

export default PropertyPage;
