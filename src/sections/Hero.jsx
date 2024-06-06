// Importation des icônes et des images depuis le dossier assets
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
// Importation du composant Button et du composant ShoeCard depuis leurs emplacements respectifs
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
// Importation des données statiques des chaussures et des statistiques depuis les constantes
import { shoes, statistics } from "../constants";
// Importation de useState pour gérer l'état dans les composants fonctionnels React
import { useState } from "react";

// Définition du composant Hero
const Hero = () => {
  // Déclaration d'un état local pour stocker l'image de la chaussure principale
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    // Section principale du héros avec une mise en page flexible
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* Colonne de gauche avec le texte et le bouton */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        {/* Titre de la collection */}
        <p className="text-xl font-montserrat text-coral-red">
          Notre collection été
        </p>
        {/* Titre principal */}
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 inline-block xl:pb-6">
            Les nouvelles arrivées
          </span>
          <br />
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 inline-block xl:pb-6">
            De nos chaussures
          </span>
          <span className="text-coral-red inline-block mt-3"> Nike </span>
        </h1>
        {/* Description */}
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-14 sm:max-w-md">
          Découvrez notre arrivée de Nike de qualité, confortable et innovante
          pour votre vie active.
        </p>
        {/* Bouton "Shop now" */}
        <Button label="Shop now" iconURL={arrowRight} />
        {/* Statistiques */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Colonne de droite avec l'image principale et les miniatures de chaussures */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        {/* Image principale */}
        <img
          src={bigShoeImg}
          alt="collection de chaussure"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        {/* Miniatures de chaussures */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              {/* Composant ShoeCard pour chaque chaussure avec la possibilité de changer l'image principale */}
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setbigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exportation du composant Hero pour l'utiliser dans d'autres parties de l'application
export default Hero;
