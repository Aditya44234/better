import React from "react";

const ImpactStatementSection = () => {
  return (
    <section className="bg-[#017848] text-white px-6 py-20 mb-8 shadow-lg flex justify-center w-full">
      <div className="w-full max-w-5xl text-start">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
          How we're changing things
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-white/90">
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned with
          consumers.
          <br /><br />
          That's why Better.com is redefining the homeownership process from the
          ground up. We're using technology to make it faster and more efficient,
          and humans to help make it friendly and enjoyable.
        </p>
      </div>
    </section>
  );
};

export default ImpactStatementSection;