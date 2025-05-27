import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Anel Diamante Solitário",
    description: "Anel em ouro 18k com diamante solitário de 0.5ct",
    price: "R$ 12.900",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=60",
    category: "Anéis",
  },
  {
    id: 2,
    name: "Anel Safira Real",
    description: "Anel em platina com safira azul real e diamantes",
    price: "R$ 15.800",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a8?w=800&auto=format&fit=crop&q=60",
    category: "Anéis",
  },
  {
    id: 3,
    name: "Brincos Pérolas Barrocas",
    description: "Brincos em ouro 18k com pérolas barrocas e diamantes",
    price: "R$ 8.500",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=60",
    category: "Brincos",
  },
  {
    id: 4,
    name: "Brincos Diamantes Gota",
    description: "Brincos em ouro branco com diamantes em formato de gota",
    price: "R$ 9.900",
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&auto=format&fit=crop&q=60",
    category: "Brincos",
  },
  {
    id: 5,
    name: "Colar Diamantes Clássico",
    description: "Colar em ouro 18k com diamantes em corte brilhante",
    price: "R$ 18.500",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=60",
    category: "Colares",
  },
  {
    id: 6,
    name: "Colar Pérolas Cultivadas",
    description: "Colar de pérolas cultivadas com fecho em ouro 18k",
    price: "R$ 7.200",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f743f7c?w=800&auto=format&fit=crop&q=60",
    category: "Colares",
  },
  {
    id: 7,
    name: "Aliança Diamantes",
    description: "Aliança em ouro 18k com diamantes incrustados",
    price: "R$ 6.800",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&auto=format&fit=crop&q=60",
    category: "Alianças",
  },
  {
    id: 8,
    name: "Aliança Clássica",
    description: "Aliança em ouro 18k com acabamento polido",
    price: "R$ 4.200",
    image:
      "https://images.unsplash.com/photo-1602751584559-8ba73aad10e1?w=800&auto=format&fit=crop&q=60",
    category: "Alianças",
  },
];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="produtos" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-gold text-center mb-12">
          Nossas Joias
        </h2>

        {/* Filtros de categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory("Todos")}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === "Todos"
                ? "bg-gold text-white"
                : "bg-white text-gold hover:bg-gold/10"
            }`}
          >
            Todos
          </button>
          {Array.from(new Set(products.map((p) => p.category))).map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-gold text-white"
                    : "bg-white text-gold hover:bg-gold/10"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter(
              (product) =>
                selectedCategory === "Todos" ||
                product.category === selectedCategory
            )
            .map((product) => (
              <motion.div
                key={product.id}
                ref={cardsRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-gold text-white px-6 py-2 rounded-full hover:bg-gold/90 transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gold font-medium">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-playfair text-gray-800 mt-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-playfair text-gold">
                      {product.price}
                    </span>
                    <button className="text-gold hover:text-gold/80 transition-colors">
                      <FaHeart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
