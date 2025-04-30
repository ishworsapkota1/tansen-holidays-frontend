import Banner from "@/components/shared/Banner";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Banner
        title="About Us"
        button="Our Services"
        img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60"
      />
      <main className="w-11/12 mx-auto py-8 px-3">
        <h1 className="text-3xl w-full text-center font-bold text-purple-800 mb-10">
          About Us
        </h1>

        {/* Introduction with Image */}
        <section className="mb-12 flex flex-col lg:flex-row items-center gap-8 w-full mx-auto">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am91cm5leXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Tansen Holidays Journey"
              height={100}
              width={100}
              className="w-full h-[20rem] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Welcome to Tansen Holidays
            </h2>
            <p className="text-lg text-gray-700">
              At Tansen Holidays, we are deeply passionate about transforming
              the travel experience into something simple, affordable, and truly
              unforgettable. We take pride
              in being a trusted name in the travel industry. Our core focus
              lies in offering comfortable, reliable, and enjoyable bus journeys
              that connect cities and communities, making travel accessible to
              everyone.
            </p>
            <p className="text-lg text-gray-700">
              Our mission goes beyond just getting you from one destination to
              another. From the moment you book your trip to the time you reach your
              destination, our dedicated team works tirelessly to ensure every
              detail is taken care of, providing a seamless and stress-free
              journey.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-12 w-full mx-auto">
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
                Integrity, customer focus, and environmental responsibility
                guide our journey every day.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
