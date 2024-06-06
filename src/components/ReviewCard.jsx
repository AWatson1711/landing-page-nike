// Importation de l'icône étoile depuis le dossier assets
import { star } from "../assets/icons";

// Définition du composant fonctionnel ReviewCard
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    // Conteneur principal pour la carte d'avis avec des classes flex pour une disposition en colonne
    <div className="flex justify-center items-center flex-col">
      {/* Image du client avec un style de cercle et couverture de l'objet */}
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      {/* Commentaire du client */}
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      {/* Section pour l'affichage de la note avec étoile et score */}
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      {/* Nom du client */}
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

// Exportation du composant ReviewCard pour l'utiliser dans d'autres parties de l'application
export default ReviewCard;
