import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Hero from "../components/hero";

// import catAndHumanIllustration from "../images/open-peeps.png";

function IndexPage() {
  return (
    <>
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        author
      />

{/* <Hero /> */}
    </Layout>

 

</>
  );
}

export default IndexPage;
