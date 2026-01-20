import Navbar from "../components/Navbar";

const HistoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-[var(--bg-main)] flex items-center justify-center">
        <h1 className="text-4xl text-[var(--text-main)]">
          Detailed History Page
        </h1>
      </div>
    </>
  );
};
export default HistoryPage;
