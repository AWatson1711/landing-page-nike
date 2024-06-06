// Importation des icônes et images depuis les fichiers assets
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// Importation des liens de navigation depuis le fichier constants
import { navLinks } from "../constants";

// Définition du composant fonctionnel Nav
const Nav = () => {
  return (
    // Conteneur principal pour le composant de navigation
    <div>
      {/* En-tête avec des styles de padding, position absolue, et z-index pour superposer */}
      <header className="padding-x py-8 absolute z-10 w-full">
        {/* Barre de navigation avec flexbox pour espacement entre les éléments */}
        <nav className="flex justify-between items-center max-container">
          {/* Logo avec un lien vers la page d'accueil */}
          <a href="/">
            <img src={headerLogo} alt="Logo Nike" width={130} height={29} />
          </a>
          {/* Liste des liens de navigation pour les écrans de grande taille */}
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                {" "}
                {/* Chaque élément de la liste a une clé unique basée sur le label */}
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label} {/* Affichage du label du lien */}
                </a>
              </li>
            ))}
          </ul>
          {/* Icône de menu hamburger pour les écrans de petite taille */}
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
    </div>
  );
};

// Exportation du composant Nav pour l'utiliser dans d'autres parties de l'application
export default Nav;
