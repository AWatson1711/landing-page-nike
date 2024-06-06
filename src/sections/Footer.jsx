// Importation des icônes et des images depuis le dossier assets
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

// Définition du composant Footer
const Footer = () => {
  return (
    // Conteneur principal du pied de page avec une classe pour la mise en page
    <footer className="max-container">
      {/* Conteneur pour les éléments principaux du pied de page avec une disposition flexible */}
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        {/* Section gauche du pied de page avec le logo, le texte et les icônes des réseaux sociaux */}
        <div className="flex flex-col items-start">
          {/* Logo du pied de page avec un lien vers la page d'accueil */}
          <a href="/">
            <img src={footerLogo} alt="Footer logo" width={150} height={46} />
          </a>
          {/* Texte de description du pied de page */}
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect Size In Store. Get Rewards.
          </p>
          {/* Icônes des réseaux sociaux */}
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        {/* Sections droites du pied de page contenant les liens */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {/* Mapping des sections de liens du pied de page */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              {/* Titre de la section de liens */}
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              {/* Liste des liens de la section */}
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    {/* lien */}
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Div pour les éléments du pied de page en bas */}
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        {/* Section gauche avec le symbole de copyright */}
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          {/* Texte de copyright */}
          <p className="hover:text-slate-gray cursor-pointer">
            <a>Copyright. All rights reserved.</a>
          </p>
        </div>
        {/* Section droite avec le lien vers les conditions d'utilisation */}
        <p className="font-montserrat cursor-pointer hover:text-slate-gray">
          <a>Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

// Exportation du composant Footer pour l'utiliser dans d'autres parties de l'application
export default Footer;
