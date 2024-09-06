import React from "react";
import styles from "./EastFelicianaParishChamber.module.css";
import NavigationMenu from "./NavigationMenu";
import ContentSection from "./ContentSection";
import Footer from "./Footer"; // Import Footer component

function EastFelicianaParishChamber() {
  return (
    <main className={styles.container}>
      <div className={styles.mainContent}>
        <header className={styles.heroSection}>
          <img
            loading="lazy"
            src="/images/EFPCCBanner.png"
            className={styles.heroImage}
            alt="East Feliciana Parish landscape"
          />
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <img
                loading="lazy"
                src="/images/EFPCCLogo.png"
                className={styles.logoImage}
                alt="East Feliciana Parish Chamber of Commerce logo"
              />
            </div>
          </div>
          <NavigationMenu />
        </header>
        <h2 className={styles.welcomeTitle}>
          Welcome to the East Feliciana Parish <br></br>Chamber of Commerce
        </h2>
        <ContentSection
          text="The East Feliciana Parish Chamber of Commerce is dedicated to supporting and enhancing our local community. As advocates, connectors, and problem solvers, we work to make a meaningful impact for businesses and individuals throughout the parish."
          imageSrc="/images/Courthouse.png"
          imageAlt="East Feliciana Parish community"
          reverse={false}
        />
        <ContentSection
          text="With a focus on Leadership, Unity, Advocacy, and Innovation, we aim to meet the needs of our members while fostering the long-term success of our community. Whether you are doing business in East Feliciana Parish or engaging with the community in other ways, we are committed to helping our parish thrive."
          imageSrc="/images/Courthouse.png"
          imageAlt="East Feliciana Parish business district"
          reverse={true}
        />
      </div>
      <Footer /> {/* Add Footer component */}
    </main>
  );
}

export default EastFelicianaParishChamber;
