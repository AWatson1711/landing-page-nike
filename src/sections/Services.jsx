// Importation du composant ServiceCard et des services depuis les emplacements respectifs
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

// Définition du composant Services
const Services = () => {
  return (
    // Section des services avec une classe pour limiter la largeur du contenu et aligner les éléments au centre
    <section className="max-container flex justify-center flex-wrap gap-9">
      {/* Mapping des services pour afficher chaque carte de service */}
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

// Exportation du composant Services pour l'utiliser dans d'autres parties de l'application
export default Services;
