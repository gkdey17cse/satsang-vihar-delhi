import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HistoryPage = () => {
  return (
    <>
      <Helmet>
        <title>History of Satsang Vihar New Delhi | Philosophy</title>
        <meta
          name="description"
          content="Discover the rich history of Satsang Vihar Delhi and the life-transforming philosophy of Sree Sree Thakur Anukulchandra. Learn about our foundation and mission."
        />
        <meta name="keywords" content="Satsang Delhi History , Delhi Mandir History , Satsang Delhi Mandir , History of Satsang Delhi" />
        <link
          rel="canonical"
          href="https://www.satsangvihardelhi.org/history"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-[var(--bg-main)]">
        <Navbar />

        <div className="flex-grow pt-24 pb-16 px-4">
          <article className="max-w-3xl mx-auto prose prose-lg prose-amber dark:prose-invert">
            <h1 className="text-3xl md:text-5xl  font-extrabold text-[var(--text-main)] mb-8 text-center">
              History of Satsang Vihar Delhi
            </h1>

            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-sm border border-[var(--border-subtle)] mb-10">
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-4">
                The Advent
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm lg:text-base">
                Born from the "liquid love" of a mother’s heart and the "burning
                zeal" of a passionate nature, Sri Sri Thakur Anukulchandra’s
                life began as a "motherless boy at life's beginning" who
                transformed the "mysterious block of hard nature" into a path of
                light.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-4">
                The Foundation
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4 text-sm lg:text-base">
                From the writing of <em>Satyanusaran</em> at age 22—penned in a
                single night to guide a departing devotee—to the establishment
                of the grand movement in Pabna and later Deoghar, the mission
                has always been
                <strong>
                  {" "}
                  "Immunity from contagious ideas against the conviction for the
                  fulfillment of principle."
                </strong>
              </p>
            </div>

            <div className="bg-[var(--bg-tertiary)] p-8 rounded-2xl border-l-4 border-[var(--primary)]">
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--text-brand-deep)] mb-4">
                The New Delhi Chapter
              </h2>
              <p className="text-[var(--text-brand-deep)] leading-relaxed text-sm lg:text-base">
                New Delhi Satsang Vihar carries this torch to the heart of the
                nation, ensuring that "Knowledge that does not know to apply" is
                replaced by a life of "Sonorous appeasement" and "Boldened
                tactful go of life."
              </p>
            </div>
          </article>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default HistoryPage;
