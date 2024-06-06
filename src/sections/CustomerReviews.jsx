// Importation de la composante ReviewCard depuis le dossier components
import ReviewCard from "../components/ReviewCard";
// Importation de la constante reviews depuis le dossier constants
import { reviews } from "../constants";

// Définition de la composante fonctionnelle CustomerReviews
const CustomerReviews = () => {
  return (
    // Début d'une section avec une classe CSS max-container pour définir la mise en page
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Qu&apos;est ce que nos <span className="text-coral-red ">Client</span>{" "}
        Disent ?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Écoutez les avis de nos client à propos de leur expérience avec nous.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14">
        {/* Boucle à travers chaque avis dans reviews et rend une ReviewCard pour chacun */}
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName} // Clé unique basée sur le nom du client
            imgURL={review.imgURL} // URL de l'image du client
            customerName={review.customerName} // Nom du client
            rating={review.rating} // Note donnée par le client
            feedback={review.feedback} // Commentaire du client
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
