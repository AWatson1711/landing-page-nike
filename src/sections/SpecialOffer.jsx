// Importation de l'icône de flèche et de l'image d'offre depuis les emplacements respectifs
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
// Importation du composant Button depuis son emplacement respectif
import Button from "../components/Button";

// Définition du composant SpecialOffer
const SpecialOffer = () => {
  return (
    // Section de l'offre spéciale avec une classe pour limiter la largeur du contenu et aligner les éléments au centre
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      {/* Partie gauche avec l'image d'offre */}
      <div className="flex-1">
        <img
          src={offer}
          alt="Special Offer"
          width={773}
          height={697}
          className="object-contain w-full"
        />
      </div>
      {/* Partie droite avec le texte et les boutons */}
      <div className="flex flex-1 flex-col">
        {/* Titre de l'offre spéciale */}
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-xl">
          Offre{" "}
          {/* Utilisation d'un span pour mettre en évidence le mot "Spécial" */}
          <span className="text-coral-red inline-block mt-3"> Spécial </span>
        </h2>
        {/* Description de l'offre spéciale */}
        <p className="mt-4 lg:max-w-xl info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        {/* Deuxième paragraphe de la description */}
        <p className="mt-6 lg:max-w-xl info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        {/* Boutons pour "Shop now" et "Learn more" */}
        <div className="mt-11 flex flex-wrap gap-4">
          {/* Bouton "Shop now" avec une flèche */}
          <Button label="Shop now" iconURL={arrowRight} />
          {/* Bouton "Learn more" avec un style différent */}
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

// Exportation du composant SpecialOffer pour l'utiliser dans d'autres parties de l'application
export default SpecialOffer;
