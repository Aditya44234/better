export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 md:py-24 md:px-20">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          AI-powered Mortgage
        </h1>
        <p className="text-lg mb-6">
          Our tech unlocks lower rates, higher chances of approval, and a lightning‑fast process from approval to closing. Over $100 billion funded.
        </p>
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition">
          Find out why we’re better
        </button>
      </section>

      <section className="max-w-3xl mx-auto mt-16 text-center space-y-6">
        <h2 className="text-3xl font-bold">Excellent</h2>
        <p className="text-5xl font-extrabold text-blue-600">4.4 <span className="text-2xl font-normal">out of 5</span></p>
      </section>

      <section className="max-w-4xl mx-auto mt-20 space-y-10">
        <h3 className="text-xl font-semibold">Got questions? We've got answers</h3>

        <article className="bg-gray-50 rounded p-6 shadow">
          <h4 className="font-semibold mb-2">
            How AI Mortgage Lending is Transforming the Home Loan Process
          </h4>
        </article>

        <article className="bg-gray-50 rounded p-6 shadow space-y-2">
          <h4 className="font-semibold">One Day Mortgage</h4>
          <p>
            Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.
            Traditional lenders deliver a Commitment Letter in a few weeks.
          </p>
        </article>

        <article className="bg-gray-50 rounded p-6 shadow space-y-2">
          <h4 className="font-semibold">Better HELOC</h4>
          <p>
            Introducing One Day HELOC™ — your express lane to getting cash from your home with our Home Equity Line of Credit.
          </p>
          <p>
            Access up to 90% of your home equity as cash in as little as 7 days.
          </p>
        </article>
      </section>
    </main>
  );
}
