export interface NewsArticle {
    id: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    image: string;
    slug: string;
    content: string;
  }
  
  export const newsArticles: NewsArticle[] = [
    {
      id: "1",
      title: "Tansen Holidays Launches New Luxury Bus Fleet",
      date: "April 15, 2025",
      author: "Suresh Sharma",
      excerpt:
        "Experience unmatched comfort with our new deluxe buses, featuring Wi-Fi, reclining seats, and onboard entertainment.",
      image: "https://images.unsplash.com/photo-1702206244130-c29bcefe6aa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHN8ZW58MHx8MHx8fDA%3D",
      slug: "new-luxury-bus-fleet",
      content:
        "Tansen Holidays is thrilled to announce the launch of our new luxury bus fleet, designed to elevate your travel experience across Nepal. These state-of-the-art buses feature spacious reclining seats, high-speed Wi-Fi, onboard entertainment systems, and climate control for maximum comfort. Whether you're traveling from Kathmandu to Pokhara or exploring new routes, our deluxe buses ensure a journey that’s as enjoyable as the destination. Book now to experience the future of road travel with Tansen Holidays!",
    },
    {
      id: "2",
      title: "Travel Tips for Exploring Nepal in 2025",
      date: "April 10, 2025",
      author: "Anita Rai",
      excerpt:
        "Discover the best times to visit Nepal, must-see destinations, and how to travel comfortably with Tansen Holidays.",
      image: "https://images.unsplash.com/photo-1702206244130-c29bcefe6aa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHN8ZW58MHx8MHx8fDA%3D",
      slug: "travel-tips-nepal-2025",
      content:
        "Planning a trip to Nepal in 2025? Tansen Holidays has you covered with expert travel tips. The best times to visit are spring (March-May) and autumn (September-November) for clear skies and mild weather. Must-see destinations include Kathmandu’s cultural landmarks, Pokhara’s serene lakes, and Chitwan’s wildlife adventures. Travel comfortably with our reliable buses and vans, offering affordable and luxury options. Pack light, respect local customs, and let Tansen Holidays make your journey seamless.",
    },
    {
      id: "3",
      title: "Expanded Routes to Eastern Nepal",
      date: "April 5, 2025",
      author: "Ramesh Thapa",
      excerpt:
        "We’re excited to announce new routes to Biratnagar and other eastern cities, making travel more accessible.",
      image: "https://images.unsplash.com/photo-1702206244130-c29bcefe6aa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHN8ZW58MHx8MHx8fDA%3D",
      slug: "expanded-routes-eastern-nepal",
      content:
        "Tansen Holidays is expanding its reach with new routes to eastern Nepal, including Biratnagar, Janakpur, and more. These routes make it easier for travelers to explore the vibrant culture and natural beauty of the region. Our standard and deluxe buses ensure comfort and reliability, with frequent departures and convenient drop-off points. Stay tuned for more updates as we continue to connect Nepal, one journey at a time.",
    },
    {
      id: "4",
      title: "Safety Upgrades for Our Fleet",
      date: "March 30, 2025",
      author: "Priya Gurung",
      excerpt:
        "Learn about our latest safety enhancements, including advanced driver training and vehicle maintenance protocols.",
      image: "https://images.unsplash.com/photo-1702206244130-c29bcefe6aa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHN8ZW58MHx8MHx8fDA%3D",
      slug: "safety-upgrades-fleet",
      content:
        "At Tansen Holidays, your safety is our priority. We’ve implemented new safety upgrades across our fleet, including advanced driver training programs, regular vehicle inspections, and enhanced maintenance protocols. Our buses and vans are equipped with modern safety features like GPS tracking and emergency systems. Travel with peace of mind knowing Tansen Holidays is committed to keeping you safe on every journey.",
    },
    {
      id: "5",
      title: "Partnering for Greener Travel",
      date: "March 25, 2025",
      author: "Kiran Lama",
      excerpt:
        "Tansen Holidays is committed to sustainability with new eco-friendly buses and carbon offset programs.",
      image: "https://images.unsplash.com/photo-1702206244130-c29bcefe6aa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHN8ZW58MHx8MHx8fDA%3D",
      slug: "greener-travel-partnership",
      content:
        "Tansen Holidays is taking steps toward a greener future. We’ve introduced eco-friendly buses with lower emissions and partnered with carbon offset programs to reduce our environmental impact. Our commitment to sustainability doesn’t compromise comfort—enjoy the same reliable service with a smaller footprint. Join us in making travel more sustainable while exploring the beauty of Nepal.",
    },
    {
      id: "6",
      title: "Celebrating 10 Years of Tansen Holidays",
      date: "March 20, 2025",
      author: "Maya Shrestha",
      excerpt:
        "Join us in celebrating a decade of connecting Nepal with reliable and comfortable transportation services.",
      image: "https://images.unsplash.com/photo-1702206244130-c29bcefe6aa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHN8ZW58MHx8MHx8fDA%3D",
      slug: "10-years-tansen-holidays",
      content:
        "Tansen Holidays is proud to celebrate 10 years of serving Nepal’s travelers. Since 2015, we’ve connected cities, cultures, and communities with our reliable buses and vans. From humble beginnings to a trusted name in transportation, we thank our customers and staff for this milestone. Celebrate with us by booking a trip and experiencing the Tansen difference—here’s to another decade of journeys!",
    },
  ];