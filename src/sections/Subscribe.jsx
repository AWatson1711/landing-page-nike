// Importation du composant Button depuis son emplacement respectif
import Button from "../components/Button";

// Définition du composant Subscribe
const Subscribe = () => {
  return (
    // Section d'inscription avec une classe pour limiter la largeur du contenu et aligner les éléments au centre
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      {/* Titre de la section d'inscription */}
      <h3 className="text-[38px] leading-[68px] font-palanquin font-bold">
        Inscrivez-vous pour suivre nos{" "}
        {/* Utilisation d'un span pour mettre en évidence le mot "Nouveautés" */}
        <span className="text-coral-red">Nouveautés</span>
      </h3>
      {/* Formulaire d'inscription */}
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        {/* Champ de saisie pour l'adresse e-mail */}
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        {/* Bouton d'inscription */}
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          {/* Utilisation du composant Button avec le label "Inscrivez-vous" et l'option fullWidth */}
          <Button label="Inscrivez-vous" fullWidth />
        </div>
      </div>
    </section>
  );
};

// Exportation du composant Subscribe pour l'utiliser dans d'autres parties de l'application
export default Subscribe;
