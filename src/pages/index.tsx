import Image from "next/image";

export default function Home() {
  const images = [
    "/pages/client_01_01.png",
    "/pages/client_01_02.png",
    "/pages/client_01_03.png",
    "/pages/client_01_04.png",
    "/pages/client_01_05.png",
    "/pages/client_01_06.png",
    "/pages/client_01_07.png"
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl space-y-8">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={src}
              alt={`Client image ${index + 1}`}
              width={800}
              height={600}
              priority
              className="w-full h-auto max-w-4xl rounded-lg shadow-lg"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
