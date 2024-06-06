// Définition du composant fonctionnel ServiceCard
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    // Conteneur principal pour la carte de service avec des classes pour la disposition et le style
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      {/* Conteneur pour l'icône avec un fond de couleur, une forme ronde et une disposition centrée */}
      <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      {/* Titre du service */}
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      {/* Description du service */}
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

// Exportation du composant ServiceCard pour l'utiliser dans d'autres parties de l'application
export default ServiceCard;
