import React from 'react';

const pageStyle: React.CSSProperties = {
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6',
};

const PrivacyPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Datenschutzerklärung</h1>
      
      <h2>Hosting</h2>
      <p>
        Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>die Adresse der vorher besuchten Website (Referer Anfrage-Header)</li>
        <li>Datum und Uhrzeit der Anfrage</li>
        <li>Zeitzonendifferenz zur Greenwich Mean Time</li>
        <li>Inhalt der Anforderung</li>
        <li>HTTP-Statuscode</li>
        <li>übertragene Datenmenge</li>
        <li>Website, von der die Anforderung kommt</li>
        <li>Informationen zu Browser und Betriebssystem.</li>
      </ul>
      <p>
        Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
      </p>
      <p>
        Es erfolgt kein Tracking und wir haben auf diese Daten keinen direkten Zugriff.
      </p>
      <p>
        Wir setzen für die Zurverfügungstellung unserer Website folgenden Hoster ein:
      </p>
      <p>
        GitHub Inc.<br />
        88 Colin P Kelly Jr St<br />
        San Francisco, CA 94107<br />
        United States
      </p>
      <p>
        Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO, selbst keinen Server in unseren Räumlichkeiten vorhalten zu müssen. Serverstandort ist USA.
      </p>
      <p>
        Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten gegenüber GitHub finden Sie unter: <a href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement - GitHub Pages</a>
      </p>
      <p>
        Sie haben das Recht der Verarbeitung zu widersprechen. Ob der Widerspruch erfolgreich ist, ist im Rahmen einer Interessenabwägung zu ermitteln.
      </p>
      <p>
        Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt.
      </p>
      <p>
        Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Die Funktionsfähigkeit der Website ist ohne die Verarbeitung nicht gewährleistet.
      </p>
      <p>
        GitHub hat Compliance-Maßnahmen für internationale Datenübermittlungen umgesetzt. Diese gelten für alle weltweiten Aktivitäten, bei denen GitHub personenbezogene Daten von natürlichen Personen in der EU verarbeitet. Diese Maßnahmen basieren auf den EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie unter: <a href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors" target="_blank" rel="noopener noreferrer">GitHub Data Protection Addendum</a>
      </p>
      
      <h2>Rechtliche Hinweise zum Hosting</h2>
      <p>
        Grundsätzlich ist ein Auftragsverarbeitungsvertrag mit dem Hoster abzuschließen. Das bayerische Landesamt für Datenschutzaufsicht hat für das Hosting rein statischer Websites eine Ausnahme gemacht. Für den Fall, dass die Webseite der Selbstdarstellung dient, z.B. von Vereinen oder Kleinunternehmen, keine personenbezogenen Daten an den Betreiber fließen und kein Tracking stattfindet, liegt keine Auftragsverarbeitung vor. Weiter heißt es: „Die Tatsache, dass auch beim Hosting von statischen Webseiten zwangsläufig IP-Adressen, d.h. personenbezogene Daten, verarbeitet werden müssen, führt nicht zur Annahme einer Auftragsverarbeitung. Das wäre nicht sachgerecht. Die (kurzfristige) IP-Adressenspeicherung ist vielmehr noch der TK-Zugangsvermittlung des Website-Hosters nach dem TKG zuzurechnen und dient in erster Linie Sicherheitszwecken des Hosters.“ (<a href="https://www.lda.bayern.de/media/veroeffentlichungen/FAQ_Hosting_keine_Auftragsverarbeitung.pdf" target="_blank" rel="noopener noreferrer">Quelle: LDA Bayern</a>) Wir gehen davon aus, dass diese Ausnahme auf GitHub Pages anzuwenden ist.
      </p>
    </div>
  );
};

export default PrivacyPage; 