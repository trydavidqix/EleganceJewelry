import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(formRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }).from(
        infoRef.current,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log("Form data:", formData);
    // Limpar o formulário após o envio
    setFormData({ name: "", email: "", message: "" });
    alert("Mensagem enviada com sucesso!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-secondary">Entre em Contato</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Estamos aqui para ajudar você a encontrar a joia perfeita. Entre em
          contato conosco e agende uma visita.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="input resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar Mensagem
            </button>
          </form>

          {/* Informações de Contato */}
          <div
            ref={infoRef}
            className="bg-white p-8 rounded-lg shadow-lg space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@elegancejewelry.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Paulista, 1000 - Bela Vista
                      <br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Horário de Funcionamento
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Segunda a Sexta:</span> 10h às
                  19h
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Sábado:</span> 10h às 17h
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Domingo:</span> Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
