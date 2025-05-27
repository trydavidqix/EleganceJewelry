// Removendo importação de componentes do Hover Card do shadcn/ui
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright */}
        <p className="text-gray-300">
          &copy; {currentYear} Elegance Jewelry. Todos os direitos reservados.
        </p>

        {/* Linha divisória */}
        <div
          className="border-t my-6 w-full"
          style={{ borderColor: "#F9FAFB" }}
        />

        {/* Desenvolvedor */}
        <p className="text-gray-300">
          Desenvolvido por{" "}
          <a
            href="https://github.com/trydavidqix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-darker"
          >
            David William
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
