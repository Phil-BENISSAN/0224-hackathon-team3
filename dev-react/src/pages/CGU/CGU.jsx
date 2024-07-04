import { Link } from "react-router-dom";

import "./CGU.css";

function CGU() {
  return (
    <main>
      <h1>
        Conditions Générales d'Utilisation (CGU) de l'application Includify
      </h1>
      <h2>1. Introduction</h2>
      <p>
        Bienvenue sur Includify, une application dédiée à la collecte et à la
        gestion d'idées innovantes au sein des entreprises, tout en garantissant
        l'anonymat des contributeurs. En utilisant notre application, vous
        acceptez les présentes Conditions Générales d'Utilisation (CGU).
        Veuillez les lire attentivement.
      </p>

      <h2>2. Acceptation des CGU</h2>
      <p>
        En accédant ou en utilisant Includify, vous reconnaissez avoir lu,
        compris et accepté d'être lié par ces CGU. Si vous n'acceptez pas ces
        termes, vous ne devez pas utiliser notre application.
      </p>

      <h2>3. Modifications des CGU</h2>
      <p>
        Includify se réserve le droit de modifier ces CGU à tout moment. Nous
        vous informerons de toute modification substantielle par le biais de
        notifications dans l'application ou par d'autres moyens raisonnables.
        Votre utilisation continue de l'application après de telles
        modifications constitue votre acceptation des nouvelles CGU.
      </p>

      <h2>4. Utilisation de l'application</h2>
      <h3>4.1. Compte utilisateur</h3>
      <p>
        Pour utiliser certaines fonctionnalités d'Includify, vous devez créer un
        compte. Vous êtes responsable de la confidentialité de vos informations
        de connexion et de toutes les activités réalisées sous votre compte.
      </p>

      <h3>4.2. Soumission d'idées</h3>
      <p>
        Anonymat : Les idées soumises via Includify sont anonymisées pour
        garantir une évaluation impartiale.
      </p>
      <p>
        Propriété intellectuelle : En soumettant une idée, vous garantissez que
        vous êtes l'auteur de cette idée et que vous avez le droit de la
        soumettre. Vous accordez à Includify une licence non exclusive, mondiale
        et sans redevance pour utiliser, distribuer, reproduire, modifier et
        afficher votre idée dans le cadre des activités de l'application.
      </p>
      <h3>4.3. Conduite de l'utilisateur</h3>
      <ul>
        Vous vous engagez à utiliser Includify de manière légale et
        respectueuse, et à ne pas soumettre de contenu qui soit :
      </ul>

      <li>Illégal, offensant, diffamatoire ou discriminatoire.</li>
      <li>Violant les droits de propriété intellectuelle de tiers.</li>
      <li>Contenant des virus ou des logiciels malveillants.</li>
      <h2>5. Confidentialité et protection des données</h2>
      <p>
        Nous nous engageons à protéger votre vie privée et vos données
        personnelles. Pour plus de détails, veuillez consulter notre{" "}
        <Link to="/ProtectionDataPolicy">Politique de Confidentialité</Link>.
      </p>

      <h2>6. Limitation de responsabilité</h2>
      <p>
        Includify est fourni "tel quel" et "selon disponibilité". Nous ne
        garantissons pas que l'application sera exempte d'erreurs ou accessible
        sans interruption. Dans les limites permises par la loi, Includify
        décline toute responsabilité pour les dommages directs, indirects,
        accessoires ou consécutifs résultant de l'utilisation ou de l'incapacité
        à utiliser l'application.
      </p>

      <h2>7. Indemnisation</h2>
      <p>
        Vous acceptez d'indemniser et de dégager de toute responsabilité
        Includify, ses affiliés, employés et partenaires pour toute réclamation
        ou demande, y compris les frais d'avocat raisonnables, résultant de
        votre utilisation de l'application, de votre violation de ces CGU ou de
        votre violation de toute loi ou des droits de tiers.
      </p>

      <h2>8. Résiliation</h2>
      <p>
        Includify se réserve le droit de suspendre ou de résilier votre accès à
        l'application à tout moment, sans préavis, en cas de violation de ces
        CGU ou de toute loi applicable.
      </p>

      <h2>9. Droit applicable</h2>
      <p>
        Ces CGU sont régies par et interprétées conformément aux lois du pays
        dans lequel Includify est enregistré, sans égard aux principes de
        conflits de lois. Tout litige relatif à ces CGU sera soumis à la
        juridiction exclusive des tribunaux compétents de ce pays.
      </p>

      <h2>10. Contact</h2>
      <p>
        Pour toute question concernant ces CGU, veuillez nous contacter à
        l'adresse suivante : support@includify.com
      </p>
    </main>
  );
}

export default CGU;
