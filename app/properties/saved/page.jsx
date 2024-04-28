"use client";
import { useState, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const SavedPropertiesPage = () => {
	const [loading, setLoading] = useState(true);
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		const fetchSavedProperties = async () => {
			try {
				const res = await fetch(`/api/bookmarks`);
				if (res.status === 200) {
					const data = await res.json();
					setProperties(data);
				} else {
					toast.error("Failed to fetch saved properties");
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchSavedProperties();
	}, []);

	if (loading) return <Spinner loading={loading} />;
	return (
		<section className='px-4 py-6'>
			<div className='container-xl lg:container m-auto px-4 py-6'>
				<h1 className='text-3xl font-bold mb-6'>Your Saved Properties</h1>
                {properties.length === 0 ? (
                    <p>No properties</p>
                ) : (
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{properties.map((property) => (
						<PropertyCard
							key={property._id}
							property={property}
						/>
					))}
				</div>
            )}
			</div>
		</section>
	);
};

export default SavedPropertiesPage;
