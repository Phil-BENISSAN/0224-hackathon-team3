import { Link } from "react-router-dom";

import "./LegalMentions.css";

function LegalMentions() {
  return (
    <main>
      <h1>Mentions Légales de l'application Includify</h1>
      <h2>1. Éditeur de l'application</h2>
      <p>Nom de l'entreprise : Includify S.A.S</p>
      <p>Adresse : Chemin des cerises 33000 Bordeaux</p>
      <p>Téléphone : 05.06.07.08.09</p>
      <p>E-mail : contact@includify.com</p>
      <p>Numéro SIRET : 12345678910123</p>
      <p>RCS : 109876543210</p>
      <p>Directeur de la publication : Madame Includify</p>

      <h2>2. Hébergement de l'application</h2>
      <p>Nom de l'hébergeur : Inclusion</p>
      <p>Adresse : Route de l'arc en ciel 33000 Bordeaux</p>
      <p>Téléphone : 05.05.05.05.05</p>
      <p>Site web : Inclusion@wcs.com</p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu de l'application Includify, y compris les textes,
        images, graphismes, logos, icônes, sons, logiciels, et autres éléments,
        est la propriété exclusive de Includify S.A.S, sauf indication
        contraire. Toute reproduction, distribution, modification, adaptation,
        retransmission ou publication, même partielle, de ces différents
        éléments est strictement interdite sans l'accord exprès par écrit de
        Includify S.A.S.
      </p>

      <h2>4. Protection des données personnelles</h2>
      <p>
        Pour plus d'informations sur la collecte et le traitement de vos données
        personnelles, veuillez consulter notre{" "}
        <Link to="/ProtectionDataPolicy">Politique de Confidentialité</Link>.
      </p>

      <h2>5. Limitation de responsabilité</h2>
      <p>
        Includify S.A.S s'efforce de fournir des informations aussi précises que
        possible sur l'application. Cependant, nous ne pouvons garantir
        l'exactitude, la complétude ou l'actualité des informations fournies.
        Includify S.A.S ne pourra être tenue responsable des erreurs ou
        omissions, ainsi que des dommages directs ou indirects résultant de
        l'utilisation de l'application ou des informations qu'elle contient.
      </p>

      <h2>6. Liens hypertextes</h2>
      <p>
        L'application Includify peut contenir des liens hypertextes vers
        d'autres sites web. Includify S.A.S ne contrôle pas ces sites et ne
        saurait être tenue responsable de leur contenu ou des pratiques de
        confidentialité de ces sites.
      </p>

      <h2>7. Droit applicable et juridiction compétente</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas
        de litige, et après tentative de recherche d'une solution amiable, les
        tribunaux de Bordeaux seront seuls compétents pour connaître de ce
        litige.
      </p>

      <h2>8. Contact</h2>
      <ul>
        Pour toute question ou réclamation concernant l'application Includify,
        vous pouvez nous contacter à :
      </ul>

      <li>Includify S.A.S</li>
      <li>Adresse : Chemin des cerises 33000 Bordeaux</li>
      <li>Téléphone : 05.06.07.08.09</li>
      <li>E-mail : contact@includify.com</li>
    </main>
  );
}

export default LegalMentions;
