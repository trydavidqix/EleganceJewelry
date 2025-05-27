import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright */}
        <p className="text-gray-400">
          &copy; {currentYear} Elegance Jewelry. Todos os direitos reservados.
        </p>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 my-6 w-full" />

        {/* Desenvolvedor */}
        <p className="text-gray-400">
          Desenvolvido por{" "}
          <a
            href="https://github.com/trydavidqix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-400 hover:text-black-200"
          >
            David William
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
