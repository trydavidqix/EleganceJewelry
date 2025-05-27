import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 font-sans"
        >
          Elegance Jewelry
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Descubra a beleza atemporal em cada peça, onde a elegância encontra a
          sofisticação
        </p>
        <div ref={ctaRef} className="space-x-4">
          <Link
            to="products"
            className="btn-primary"
            smooth={true}
            duration={500}
          >
            Ver Coleção
          </Link>
          <Link
            to="contact"
            className="btn-secondary"
            smooth={true}
            duration={500}
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
