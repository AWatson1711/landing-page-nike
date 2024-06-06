// Importation du composant PopularProductCard et des produits depuis les emplacements respectifs
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

// Définition du composant PopularProducts
const PopularProducts = () => {
  return (
    // Section principale des produits populaires avec une classe pour limiter la largeur du contenu
    <section id="products" className="max-container max-sm:mt-12">
      {/* Conteneur pour le titre et la description des produits */}
      <div className="flex flex-col justify-start gap-5">
        {/* Titre de la section des produits populaires */}
        <h2 className="text-4xl font-palanquin font-bold">
          {/* Utilisation d'un span pour mettre en évidence le mot "Meilleures" */}
          <span className="text-coral-red">Meilleures</span> ventes
        </h2>
        {/* Description de la sélection de produits */}
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Venez expériencé notre sélection de pur qualité. Découvrez un monde de
          confort, style et de valeurs
        </p>
      </div>

      {/* Grille pour afficher les cartes de produits populaires */}
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {/* Mapping des produits pour afficher chaque carte de produit */}
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

// Exportation du composant PopularProducts pour l'utiliser dans d'autres parties de l'application
export default PopularProducts;
