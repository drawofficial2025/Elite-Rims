import logo from "../assets/images/LOGO.png";
import Rim from "../assets/images/RIM.png";
import rim1 from "../assets/images/rim1.png";
import rim2 from "../assets/images/rim2.png";
import rim3 from "../assets/images/rim3.png";
import rim4 from "../assets/images/rim4.png";
import RootLayout from "../layout"

// Product JSON Data
const products = [
  {
    name: "Gold Elite Rim",
    image: rim1,
    price: "$899",
    features: ["24-inch", "Gold Plated", "Scratch Resistant", "Lightweight Alloy"],
  },
  {
    name: "Black Diamond Rim",
    image: rim2,
    price: "$749",
    features: ["22-inch", "Matte Black Finish", "Durable Steel Core", "Anti-Rust"],
  },
  {
    name: "Silver Velocity Rim",
    image: rim3,
    price: "$649",
    features: ["20-inch", "Chrome Finish", "Heat Resistant", "5-Year Warranty"],
  },
];

export default function Home() {
  return (
    <RootLayout>
      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="container mx-auto px-20 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Elite Rims for the <br /> Driven.
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-lg">
              Stand out from the crowd. Every turn deserves a touch of gold.
            </p>

            <button className="mt-6 inline-block bg-[#C0C0C033] text-[#B68B3E] font-semibold px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Contact Us
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img src={Rim} alt="Luxury Car" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* PRODUCT LISTING SECTION */}
      <section className="bg-white py-16 px-20">
        <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Products</h2>
        <a className="text-gray-700 hover:text-black">See All</a>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className=" rounded-xl p-6 text-center  hover:shadow-xl transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-[#B68B3E] font-bold text-lg mt-2">{product.price}</p>

              <ul className="mt-4 text-gray-600 text-sm space-y-1 flex">
                {product.features.map((feat, i) => (
                  <li key={i}>• {feat}</li>
                ))}
              </ul>

              <button className="mt-5 w-full bg-[#25D3664D] text-[#0D0D0D] py-2 rounded-md hover:bg-yellow-700 transition">
                WhatsApp to Order
              </button>
            </div>
          ))}
        </div>
      </section>

    </RootLayout>
  );
}
