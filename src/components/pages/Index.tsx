import { JobCard } from "../JobCard";

export const Index = () => {
  //filtrar post recentes
  return (
    <main className="index-page">
      <aside className="index__panel">
        <div className="index__panel__create">
          <p>Precisa de funcionarios?</p>
          <button>Crie um anúncio!</button>
        </div>
      </aside>
      <section className="index__timeline">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
    </main>
  );
};
