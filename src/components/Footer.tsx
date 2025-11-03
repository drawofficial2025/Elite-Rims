export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#B68B3E]">Elite Auto Rims</h2>
          <p className="text-gray-300 mt-2">Lagos, Nigeria</p>
          <p className="text-gray-300 mt-1">info@eliteautorims.com</p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Precision • Power • Perfection<br />
            Your destination for premium alloy rims built for bold rides.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#B68B3E] mb-3">Contact</h3>
          <p className="text-gray-300 mb-2">+234 XXX XXX XXXX</p>
          <a
            href="https://wa.me/"
            target="_blank"
            className="inline-block bg-[#B68B3E] text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-700 transition"
          >
            WhatsApp: Open Chat
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#B68B3E] mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-[#B68B3E] transition cursor-pointer">Home</a></li>
            <li><a className="hover:text-[#B68B3E] transition cursor-pointer">Services</a></li>
            <li><a className="hover:text-[#B68B3E] transition cursor-pointer">About</a></li>
            <li><a className="hover:text-[#B68B3E] transition cursor-pointer">Contact Us</a></li>
          </ul>
        </div>

      </div>

      <hr className="border-gray-700 mt-10 mb-6" />

      <p className="text-center text-gray-400 text-sm">
        © 2025 Elite Auto Rims. All Rights Reserved.
      </p>
    </footer>
  );
}
