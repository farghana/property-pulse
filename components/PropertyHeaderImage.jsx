import Image from 'next/image'
import propertyImage from '@/assets/images/properties/a1.jpg'

const PropertyHeaderImage = ({image}) => {
  return (
    <>
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={propertyImage}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
          />
        </div>
      </div>
    </section>
    <section class="bg-blue-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">Apartment</div>
            <h1 class="text-3xl font-bold mb-4">Boston Commons Retreat</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i
                class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
              ></i>
              <p class="text-orange-700">
                120 Tremont Street Boston, MA 02111
              </p>
            </div>

            <h3 class="text-lg font-bold my-6 bg-gray-800 text-white p-2">
              Rates & Options
            </h3>
            <div class="flex flex-col md:flex-row justify-around">
              <div
                class="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
              >
                <div class="text-gray-500 mr-2 font-bold">Nightly</div>
                <div class="text-2xl font-bold">
                  <i class="fa fa-xmark text-red-700"></i>
                </div>
              </div>
              <div
                class="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
              >
                <div class="text-gray-500 mr-2 font-bold">Weekly</div>
                <div class="text-2xl font-bold text-blue-500">$1,100</div>
              </div>
              <div class="flex items-center justify-center mb-4 pb-4 md:pb-0">
                <div class="text-gray-500 mr-2 font-bold">Monthly</div>
                <div class="text-2xl font-bold text-blue-500">$4,200</div>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-lg font-bold mb-6">Description & Details</h3>
            <div
              class="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
            >
              <p>
                <i class="fa-solid fa-bed"></i> 3
                <span class="hidden sm:inline">Beds</span>
              </p>
              <p>
                <i class="fa-solid fa-bath"></i> 2
                <span class="hidden sm:inline">Baths</span>
              </p>
              <p>
                <i class="fa-solid fa-ruler-combined"></i>
                1,500 <span class="hidden sm:inline">sqft</span>
              </p>
            </div>
            <p class="text-gray-500 mb-4">
              This is a beautiful apartment located near the commons
            </p>
            <p class="text-gray-500 mb-4">
              We have a beautiful apartment located near the commons. It is a
              2 bedroom apartment with a full kitchen and bathroom. It is
              available for weekly or monthly rentals.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-lg font-bold mb-6">Amenities</h3>

            <ul
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
            >
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i> Wifi
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Full
                kitchen
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Washer &
                Dryer
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Free
                Parking
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Hot Tub
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>24/7
                Security
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i
                >Wheelchair Accessible
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Elevator
                Access
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i
                >Dishwasher
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i
                >Gym/Fitness Center
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Air
                Conditioning
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i
                >Balcony/Patio
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Smart TV
              </li>
              <li>
                <i class="fas fa-check text-green-600 mr-2 mt-3"></i>Coffee
                Maker
              </li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <div id="map"></div>
          </div>
        </main>

        {/* <!-- Sidebar --> */}
        <aside class="space-y-4">       
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
          >
            <i class="fas fa-bookmark mr-2"></i> Bookmark Property
          </button>
          <button
            class="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
          >
            <i class="fas fa-share mr-2"></i> Share Property
          </button>

          {/* <!-- Contact Form --> */}
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Contact Property Manager</h3>
            <form>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                for='name'
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
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email:
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  for='phone'
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
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="message"
                >
                  Message:
                </label>
                <textarea
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div>
                <button
                  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                  type="submit"
                >
                  <i class="fas fa-paper-plane mr-2"></i> Send Message
                </button>
              </div>
            </form>
          </div>
        </aside>
      </div>
    </div>
  </section>
  </>
  )
}

export default PropertyHeaderImage
