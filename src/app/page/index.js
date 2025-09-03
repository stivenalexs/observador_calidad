import { useState } from "react";
import { Menu, ChevronDown, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsPortal() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Integer hendrerit elit eget purus sodales maximus",
      img: "https://source.unsplash.com/600x400/?books,desk",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      img: "https://source.unsplash.com/600x400/?technology,office",
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-100">
      {/* Header */}
      <header className="bg-brown-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center">
              🔍
            </div>
            <h1 className="text-2xl font-bold">EL OBSERVADOR</h1>
          </div>

          <div className="flex gap-3">
            <Button variant="secondary">Iniciar sesión</Button>
            <Button>Registrarse</Button>
          </div>
        </div>

        {/* Nav */}
        <nav className="bg-brown-600 px-6 py-2 text-sm">
          <ul className="flex gap-6 text-white">
            <li className="cursor-pointer">INICIO</li>
            <li className="flex items-center gap-1 cursor-pointer">
              CATEGORÍAS <ChevronDown size={16} />
            </li>
            <li className="cursor-pointer">CONTÁCTANOS</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Carousel */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left big slide */}
          <div className="col-span-2 relative">
            <img
              src={slides[activeSlide].img}
              alt="slide"
              className="w-full h-64 object-cover rounded-2xl shadow"
            />
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              {slides[activeSlide].title}
            </div>
            <div className="absolute inset-0 flex justify-between items-center px-3">
              <button
                className="bg-black/40 text-white px-2 py-1 rounded-full"
                onClick={() =>
                  setActiveSlide((activeSlide - 1 + slides.length) % slides.length)
                }
              >
                ◀
              </button>
              <button
                className="bg-black/40 text-white px-2 py-1 rounded-full"
                onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
              >
                ▶
              </button>
            </div>
          </div>

          {/* Right mini grid */}
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <img
                    src={`https://source.unsplash.com/200x150/?people,${i}`}
                    alt="mini"
                    className="w-full h-32 object-cover rounded-t-2xl"
                  />
                  <p className="p-2 text-sm">Lorem ipsum dolor sit</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sections */}
        <section className="mt-8">
          <h2 className="font-bold mb-4">Sports</h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <img
                    src={`https://source.unsplash.com/300x200/?sports,${i}`}
                    alt="sports"
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <p className="p-2 text-sm">Lorem ipsum dolor sit</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-bold mb-4">Technology</h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <img
                    src={`https://source.unsplash.com/300x200/?technology,${i}`}
                    alt="tech"
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <p className="p-2 text-sm">Lorem ipsum dolor sit</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brown-800 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>© 2025 El Observador</p>
          <div className="flex gap-4">
            <Twitter />
            <Instagram />
            <Facebook />
          </div>
        </div>
      </footer>
    </div>
  );
}
