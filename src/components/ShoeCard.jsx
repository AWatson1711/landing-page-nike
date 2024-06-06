// Définition du composant fonctionnel ShoeCard
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  // Fonction handleClick pour gérer le changement de l'image de la chaussure
  const handleClick = () => {
    // Vérifie si l'image cliquée est différente de l'image actuellement affichée
    if (bigShoeImg !== imgURL.bigShoe) {
      // Appelle la fonction changeBigShoeImage pour changer l'image de grande taille de la chaussure
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    // Conteneur principal pour la carte de chaussure avec des classes pour la mise en page et le style
    <div
      className={`border-2 rounded-xl 
    ${
      // Condition pour appliquer la classe CSS pour la bordure
      bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
      onClick={handleClick} // Gère le clic sur la carte de la chaussure
    >
      {/* Conteneur pour l'image de la chaussure avec des styles de fond, taille et forme */}
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        {/* Image miniature de la chaussure */}
        <img
          src={imgURL.thumbnail}
          alt="Image de chaussure"
          width={127}
          height={103}
          className="object-contain" // Permet de contenir l'image dans sa zone
        />
      </div>
    </div>
  );
};

// Exportation du composant ShoeCard pour l'utiliser dans d'autres parties de l'application
export default ShoeCard;
