// Définition du composant Button en utilisant une fonction fléchée avec déstructuration des props
const Button = ({
  label, // Libellé du bouton
  iconURL, // URL de l'icône affichée dans le bouton
  backgroundColor, // Couleur de fond du bouton
  borderColor, // Couleur de la bordure du bouton
  textColor, // Couleur du texte du bouton
  fullWidth, // Indicateur si le bouton doit occuper toute la largeur
}) => {
  return (
    // Définition de l'élément button avec des classes CSS pour le style
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full leading-none
    ${
      // Utilisation des couleurs personnalisées si elles sont fournies, sinon couleurs par défaut
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } ${fullWidth ? "w-full" : null}`}
    >
      {label} {/* Affichage du libellé du bouton */}
      {iconURL ? (
        // Si une URL d'icône est fournie, affichage de l'image correspondante
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      ) : null}{" "}
      {/* Sinon, ne rien afficher*/}
    </button>
  );
};

export default Button;
