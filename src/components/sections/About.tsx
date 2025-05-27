import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
          onEnter: () => {
            if (videoRef.current) {
              videoRef.current.play();
            }
          },
          onLeaveBack: () => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full overflow-x-hidden">
          {/* Image or Video */}
          <div
            ref={imageRef}
            className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-auto"
          >
            <video
              ref={videoRef}
              src="https://videos.pexels.com/video-files/6262752/6262752-uhd_2560_1440_25fps.mp4"
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
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
