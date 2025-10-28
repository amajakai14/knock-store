import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "history", name: "ประวัติความเป็นมา", hasImage: true },
    { id: "about", name: "เกี่ยวกับบริษัท", hasImage: true },
    { id: "vision", name: "เป้าหมายและมุมมอง", hasImage: true },
    { id: "products", name: "ผลิตภัณฑ์", hasImage: true },
    { id: "services", name: "บริการของเรา", hasImage: true },
    { id: "contact", name: "ติดต่อเรา", hasImage: true },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after scrolling
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/logo_v2.png"
              alt="Knock Store Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl hidden md:block" style={{ color: "#F7931E" }}>
              Knock Store
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-gray-700 hover:text-orange-500 transition-all duration-200 font-medium hover:scale-105 cursor-pointer"
                style={{ color: "#2E3192" }}
              >
                {section.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-all duration-200 cursor-pointer hover:scale-110"
              style={{ color: "#2E3192" }}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left py-2 hover:text-orange-500 transition-all duration-200 cursor-pointer hover:scale-105 hover:pl-1"
                style={{ color: "#2E3192" }}
              >
                {section.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 mt-16" style={{ backgroundColor: "#1a1f4e" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4" style={{ color: "#F7931E" }}>
            ติดต่อเรา
          </h3>
          <div className="space-y-2" style={{ color: "#FFFFFF" }}>
            <p className="font-semibold">บริษัท น็อคสโตร์ จำกัด</p>
            <p>สำนักงานใหญ่</p>
            <p>103 หมู่ 1 ต.บางศรีเมือง อ.เมืองนนทบุรี จ.นนทบุรี 11000</p>
            <p>โทร : 089-2013316</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const images = [
    {
      src: "/pages/client_01_02.png",
      section: "history",
      title: "ประวัติความเป็นมาของบริษัท",
    },
    {
      src: "/pages/client_01_03.png",
      section: "about",
      title: "เกี่ยวกับบริษัท",
    },
    {
      src: "/pages/client_01_04.png",
      section: "vision",
      title: "เป้าหมาย และมุมมอง",
    },
    { src: "/pages/client_01_05.png", section: "products", title: "ผลิตภัณฑ์" },
    {
      src: "/pages/client_01_06.png",
      section: "services",
      title: "บริการของเรา",
    },
    { src: "/pages/client_01_07.png", section: "", title: "" },
    { src: "/pages/client_01_01.png", section: "contact", title: "ติดต่อเรา" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2E3192" }}>
      <Header />
      <div className="flex flex-col items-center p-8">
        <div className="w-full max-w-4xl space-y-2">
          {images.map((image, index) => (
            <div
              key={index}
              id={image.section}
              className="flex justify-center scroll-mt-20"
            >
              <Image
                src={image.src}
                alt={`Client image ${index + 1}`}
                width={800}
                height={600}
                priority
                className="w-full h-auto max-w-4xl rounded-lg shadow-lg mt-12 bg-white p-4"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
