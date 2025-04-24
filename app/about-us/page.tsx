
import Banner from "@/components/shared/Banner";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Banner
        img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60"
      />
      <main className="max-w-11/12 mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl w-full text-center font-bold text-purple-800 mb-10">
          About Us
        </h1>

        {/* Introduction with Image */}
        <section className="mb-12 flex flex-col lg:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
              alt="Tansen Holidays Journey"
              height={100}
              width={100}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Welcome to Tansen Holidays
            </h2>
            <p className="text-lg text-gray-700">
              At Tansen Holidays, we’re passionate about making travel simple,
              affordable, and memorable. Founded with a vision to connect people
              and places, we specialize in providing comfortable bus journeys
              across cities. Our commitment to customer satisfaction and
              sustainable travel drives everything we do.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-zinc-100 rounded-md p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver seamless and enjoyable travel experiences, ensuring
                every passenger feels valued and cared for.
              </p>
            </div>
            <div className="text-center bg-zinc-100 rounded-md p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To lead the way in innovative and sustainable bus travel,
                connecting communities with ease.
              </p>
            </div>
            <div className="text-center bg-zinc-100 rounded-md p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Our Values
              </h3>
              <p className="text-gray-600">
                Integrity, customer focus, and environmental responsibility guide
                our journey every day.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}