// Importation de l'icône de flèche et de l'image de la chaussure depuis les emplacements respectifs
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
// Importation du composant Button depuis son emplacement respectif
import Button from "../components/Button";

// Définition du composant SuperQuality
const SuperQuality = () => {
  return (
    // Section sur la qualité des chaussures avec une classe pour limiter la largeur du contenu et aligner les éléments au centre
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      {/* Partie gauche avec le texte */}
      <div className="flex flex-1 flex-col">
        {/* Titre de la section sur la qualité des chaussures */}
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-xl">
          On vous donne accès a des chaussures de{" "}
          {/* Utilisation d'un span pour mettre en évidence le mot "Qualité" */}
          <span className="text-coral-red inline-block mt-3"> Qualité </span>
        </h2>
        {/* Description de la section sur la qualité des chaussures */}
        <p className="mt-4 lg:max-w-xl info-text">
          Tout est fait pour que vous puissiez profiter d'un confort et d'un
          style inégalé. Notre large gamme de footwear est designée pour vous
          donner une touche d'élégance.
        </p>
        {/* Deuxième paragraphe de la description */}
        <p className="mt-6 lg:max-w-xl info-text">
          Notre attention au détail et notre expertise vous assurent
          satisfaction.
        </p>
        {/* Bouton pour voir les détails */}
        <div className="mt-11">
          {/* Utilisation du composant Button avec le label "Voir les détails" et l'icône de flèche vers la droite */}
          <Button label="Voir les détails" iconURL={arrowRight} />
        </div>
      </div>
      {/* Partie droite avec l'image de la chaussure */}
      <div className="flex-1 flex justify-center items-center">
        {/* Image de la chaussure */}
        <img
          src={shoe8}
          alt="Shoe8"
          width={570}
          height={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

// Exportation du composant SuperQuality pour l'utiliser dans d'autres parties de l'application
export default SuperQuality;
