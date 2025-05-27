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
      "https://images.pexels.com/photos/18451699/pexels-photo-18451699/free-photo-of-anel-de-prata-com-gema.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Anéis",
  },
  {
    id: 3,
    name: "Brincos Pérolas Barrocas",
    description: "Brincos em ouro 18k com pérolas barrocas e diamantes",
    price: "R$ 8.500",
    image:
      "https://images.pexels.com/photos/11744651/pexels-photo-11744651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Brincos",
  },
  {
    id: 4,
    name: "Brincos Diamantes Gota",
    description: "Brincos em ouro branco com diamantes em formato de gota",
    price: "R$ 9.900",
    image:
      "https://images.pexels.com/photos/10475792/pexels-photo-10475792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Brincos",
  },
  {
    id: 5,
    name: "Colar Diamantes Clássico",
    description: "Colar em ouro 18k com diamantes em corte brilhante",
    price: "R$ 18.500",
    image:
      "https://images.pexels.com/photos/19820885/pexels-photo-19820885/free-photo-of-exibicao-visor-display-vitrine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Colares",
  },
  {
    id: 6,
    name: "Colar Pérolas Cultivadas",
    description: "Colar de pérolas cultivadas com fecho em ouro 18k",
    price: "R$ 7.200",
    image:
      "https://images.pexels.com/photos/18540972/pexels-photo-18540972/free-photo-of-preto-e-branco-p-b-mulher-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Colares",
  },
  {
    id: 7,
    name: "Aliança Diamantes",
    description: "Aliança em ouro 18k com diamantes incrustados",
    price: "R$ 6.800",
    image:
      "https://images.pexels.com/photos/10976653/pexels-photo-10976653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Alianças",
  },
  {
    id: 8,
    name: "Aliança Clássica",
    description: "Aliança em ouro 18k com acabamento polido",
    price: "R$ 4.200",
    image:
      "https://images.pexels.com/photos/10475791/pexels-photo-10475791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    <section
      ref={sectionRef}
      id="produtos"
      className="py-20 bg-cream w-screen overflow-x-hidden"
    >
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
                ? "bg-gold text-primary"
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
                    ? "bg-gold text-primary"
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
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
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
