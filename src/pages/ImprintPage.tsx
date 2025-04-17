import React from 'react';

const pageStyle: React.CSSProperties = {
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6',
};

const ImprintPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Impressum</h1>
      <p>
        Ruhr-Universität Bochum<br />
        Universitätsstraße 150<br />
        44801 Bochum<br />
        Tel.: 0234 32-201<br />
        Fax: 0234 32-14201<br />
        E-Mail: <a href="mailto:webmaster@ruhr-uni-bochum.de">webmaster@ruhr-uni-bochum.de</a>
      </p>
      <p>
        Die Ruhr-Universität Bochum ist eine Körperschaft des Öffentlichen Rechts.<br />
        Sie wird durch ihren Rektor Prof. Dr. Dr. h. c. Martin Paul gesetzlich vertreten.
      </p>
      <p>
        Zuständige Aufsichtsbehörde: Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen,<br />
        Völklinger Straße 49, 40221 Düsseldorf
      </p>
      <p>
        Umsatzsteuer-Identifikationsnummer: DE 127 056 261
      </p>
      <h2>Haftungshinweis</h2>
      <p>
        Die Ruhr-Universität Bochum übernimmt keine Gewähr für die Aktualität,
        Richtigkeit und Vollständigkeit der Informationen auf ihren
        Internetseiten. Das Gleiche gilt für die Inhalte verlinkter Seiten.
      </p>
      <h2>Meldungen über missbräuchliche Nutzungen</h2>
      <p>
        Meldungen über missbräuchliche Nutzungen,
        die von Stationen aus dem IP-Namensbereich ruhr-uni-bochum.de ausgehen, senden Sie bitte an die
        E-Mail-Adresse <a href="mailto:abuse@ruhr-uni-bochum.de">abuse@ruhr-uni-bochum.de</a>.<br />
        Gleichfalls bittet die Ruhr-Universität um Mitteilung an dieselbe
        E-Mail-Adresse, wenn rechtswidrige Inhalte durch Links auf Seiten der
        Ruhr-Universität zu erreichen sind.
      </p>
    </div>
  );
};

export default ImprintPage; 