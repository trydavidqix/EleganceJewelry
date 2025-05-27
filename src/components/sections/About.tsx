import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }).from(
        contentRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div
            ref={imageRef}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Nossa História"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Conteúdo */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl font-bold text-secondary">
              Nossa História
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A Elegance Jewelry nasceu da paixão por joias e da busca pela
              perfeição em cada detalhe. Desde nossa fundação, temos nos
              dedicado a criar peças únicas que combinam design contemporâneo
              com técnicas tradicionais de ourivesaria.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa equipe de artesãos altamente qualificados trabalha com os
              melhores materiais, desde ouro 18k até pedras preciosas
              certificadas, garantindo a qualidade e durabilidade de cada peça.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-gray-600">Peças Criadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
