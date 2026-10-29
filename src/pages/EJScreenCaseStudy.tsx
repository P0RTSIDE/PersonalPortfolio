import { HeroBackground } from "../components/HeroBackground";

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MATCHES = [
  "Tier 1 indexes and percentiles from the published indicator values (within 1e-8; percentiles exact)",
  "ACS demographic rates and both two-factor demographic indexes on 242,336 block groups",
  "Lead paint (pre-1960 housing share)",
  "Ozone (2020 OAQPS peak metric)",
  "Nitrogen dioxide (HAQAST ~1 km surface)",
  "Particulate matter 2.5 (FAQSD 2020 annual mean)",
  "Toxic releases to air (May 2023 RSEI block-group delivery)",
  "Underground storage tanks and leaking UST (UST Finder)"
];

const GAPS = [
  {
    title: "Hazardous waste",
    body: "Needs the February 5, 2024 RCRAInfo handler export. The later public export does not close the gap."
  },
  {
    title: "RMP facilities",
    body: "Needs an active-only list, or the February 5, 2024 FRS pull. The current FRS interest layer scores about twice the published values."
  },
  {
    title: "Drinking water",
    body: "Needs EPA’s internal Enforcement and Targeting Tool extract for 2023 Q4. Public ECHO SDWA files do not reproduce the published ranks."
  },
  {
    title: "Life expectancy",
    body: "Disagrees with the published extract on 996 block groups. The supplemental demographic index still fails the 99 percent within-1e-8 bar."
  },
  {
    title: "Traffic, Superfund, wastewater, diesel",
    body: "Miss the 99 percent absolute-difference bar. They were scored from public files and kept where the scale matched, not as bit-identical rebuilds."
  }
];

export function EJScreenCaseStudy() {
  return (
    <div className="layout">
      <HeroBackground />

      <main className="content case-study">
        <a href="/" className="back-link">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M13 7H1M6 2L1 7l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to portfolio
        </a>

        <header className="case-hero">
          <p className="case-kicker">Case study</p>
          <h1>EJScreen Rebuilt in SQL</h1>
          <p className="case-lede">
            An independent reconstruction of EPA EJScreen version 2.3 demographic indexes,
            percentiles, and environmental indicators from archived public tables.
          </p>
        </header>

        <aside className="disclaimer-banner" role="note">
          <p className="disclaimer-label">Independent work</p>
          <p>
            This project is not affiliated with the U.S. Environmental Protection Agency. It is not
            an official EPA product, dataset, or map. Formulas follow the published EJScreen
            Technical Documentation for Version 2.3 (July 31, 2024). Reference tables are the
            Harvard Dataverse archive of that release (DOI 10.7910/DVN/RLR5AX).
          </p>
        </aside>

        <section className="case-section">
          <h2>What it is</h2>
          <p>
            EJScreen scored each census block group on environmental and demographic indicators.
            This rebuild reruns the version 2.3 Demographic Index, Supplemental Demographic Index,
            percentiles, and EJ indexes in SQL, then compares the results with the published
            Harvard extracts so the method can be checked outside the original tool.
          </p>
        </section>

        <section className="case-section">
          <h2>What matches</h2>
          <p>
            A column counts as a match when at least 99 percent of rows with both values present are
            within 1e-8 (continuous) or exact (percentiles). On this run, these families clear that
            bar or were kept with scale agreement near 1:
          </p>
          <ul className="case-list">
            {MATCHES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="case-section">
          <h2>Open gaps</h2>
          <p>
            Some indicators still need non-public vintages, or they miss the 99 percent tolerance
            bar even when scored from public files:
          </p>
          <ul className="gap-list">
            {GAPS.map((gap) => (
              <li key={gap.title}>
                <strong>{gap.title}.</strong> {gap.body}
              </li>
            ))}
          </ul>
        </section>

        <section className="case-section">
          <h2>Method and validation</h2>
          <p>
            Indexes use the published two-factor and five-factor z-score averages, the non-negative
            shift, and the environmental percentile product. Percentiles use the documented cutoff
            lookup with floor ties. Validation reports exact rates, absolute-difference tolerance,
            null agreement, and assertions on ids, bounds, the shift, and the index product. A low
            match rate is reported. Failed assertions stop the build.
          </p>
          <p>
            Full methodology, assumption log, and validation tables live with the reconstruction
            workspace (methodology, assumptions, validation report, and data sources). Those paths
            are local project docs, not public portfolio URLs, unless separately hosted.
          </p>
          <ul className="case-links">
            <li>
              <a
                href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/RLR5AX"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harvard Dataverse EJScreen 2024 archive
                <Arrow />
              </a>
            </li>
            <li>
              <a
                href="https://www.epa.gov/ejscreen/technical-information-about-ejscreen"
                target="_blank"
                rel="noopener noreferrer"
              >
                EPA EJScreen technical documentation
                <Arrow />
              </a>
            </li>
          </ul>
        </section>

        <footer className="case-footer">
          <p>SOL ABRIAN &copy;{new Date().getFullYear()}</p>
          <p className="footer-credit">
            Independent reconstruction. Not affiliated with EPA.
          </p>
        </footer>
      </main>
    </div>
  );
}
