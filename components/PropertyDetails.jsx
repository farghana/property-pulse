import {
	FaBed,
	FaBath,
	FaRulerCombined,
	FaMoneyBill,
	FaMapMarker,
	FaTimes,
	FaCheck,
} from "react-icons/fa";
import PropertyMap from "./PropertyMap";

const PropertyDetails = ({ propertyDetails }) => {
	const { location, amenities, rates } = propertyDetails;
	return (
		<section className='bg-blue-50'>
			<div className='container m-auto py-10 px-6'>
				<div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
					<main>
						<div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
							<div className='text-gray-500 mb-4'>
								{propertyDetails.type}
							</div>
							<h1 className='text-3xl font-bold mb-4'>
								{propertyDetails.name}
							</h1>
							<div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
								<FaMapMarker className='fa-solid fa-location-dot text-lg text-orange-700 mr-2' />
								<p className='text-orange-700'>
									{location.street}, {location.city} ,{" "}
									{location.state} {location.zipcode}
								</p>
							</div>

							<h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
								Rates & Options
							</h3>
							<div className='flex flex-col md:flex-row justify-around'>
								<div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
									<div className='text-gray-500 mr-2 font-bold'>
										Nightly
									</div>
									<div className='text-2xl font-bold text-blue-500'>
										{rates?.nightly ? (
											`$${rates.nightly.toLocaleString()}`
										) : (
											<FaTimes className='fa fa-xmark text-red-700' />
										)}
									</div>
								</div>
								<div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
									<div className='text-gray-500 mr-2 font-bold'>
										Weekly
									</div>
									<div className='text-2xl font-bold text-blue-500'>
										{rates?.weekly ? (
											`$${rates.weekly.toLocaleString()}`
										) : (
											<FaTimes className='fa fa-xmark text-red-700' />
										)}
									</div>
								</div>
								<div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
									<div className='text-gray-500 mr-2 font-bold'>
										Monthly
									</div>
									<div className='text-2xl font-bold text-blue-500'>
										{rates?.monthly ? (
											`$${rates.monthly.toLocaleString()}`
										) : (
											<FaTimes className='fa fa-xmark text-red-700' />
										)}
									</div>
								</div>
							</div>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
							<h3 className='text-lg font-bold mb-6'>
								Description & Details
							</h3>
							<div className='flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9'>
								<p>
									<FaBed className='inline-block mr-2' />
									{propertyDetails.beds}{" "}
									<span className='hidden sm:inline'>
										Beds
									</span>
								</p>
								<p>
									<FaBath className='inline-block mr-2' />
									{propertyDetails.baths}{" "}
									<span className='hidden sm:inline'>
										Baths
									</span>
								</p>
								<p>
									<FaRulerCombined className='inline-block mr-2' />
									{propertyDetails.square_feet}{" "}
									<span className='hidden sm:inline'>
										sqft
									</span>
								</p>
							</div>
							<p className='text-gray-500 mb-4 text-center'>
								{propertyDetails.description}
							</p>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
							<h3 className='text-lg font-bold mb-6'>
								Amenities
							</h3>

							<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
								{amenities.map((amenity, index) => (
									<li key={index}>
									<FaCheck className='text-green-600 inline-block mr-1' />{" "}
									{amenity}
								</li>
								))}
								
								
							</ul>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
							<PropertyMap property={propertyDetails}/>
						</div>
					</main>

					{/* <!-- Sidebar --> */}
					<aside className='space-y-4'>
						<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
							<i className='fas fa-bookmark mr-2'></i> Bookmark
							Property
						</button>
						<button className='bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
							<i className='fas fa-share mr-2'></i> Share Property
						</button>

						{/* <!-- Contact Form --> */}
						<div className='bg-white p-6 rounded-lg shadow-md'>
							<h3 className='text-xl font-bold mb-6'>
								Contact Property Manager
							</h3>
							<form>
								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										htmlFor='name'
									>
										Name:
									</label>
									<input
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='name'
										type='text'
										placeholder='Enter your name'
										required
									/>
								</div>
								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										htmlFor='email'
									>
										Email:
									</label>
									<input
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='email'
										type='email'
										placeholder='Enter your email'
										required
									/>
								</div>
								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										htmlFor='phone'
									>
										Phone:
									</label>
									<input
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='phone'
										type='text'
										placeholder='Enter your phone number'
									/>
								</div>
								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										htmlFor='message'
									>
										Message:
									</label>
									<textarea
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
										id='message'
										placeholder='Enter your message'
									></textarea>
								</div>
								<div>
									<button
										className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
										type='submit'
									>
										<i className='fas fa-paper-plane mr-2'></i>{" "}
										Send Message
									</button>
								</div>
							</form>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default PropertyDetails;
