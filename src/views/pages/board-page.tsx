import type { Board, Thread } from "../../constants";
import MainLayout from "../layout/main-layout";

export default function BoardPage({ board }: { board: Board, active_threads: Thread[] }) {
  return (
    <MainLayout title={board}>
      <h1>{board}</h1>
      <p>This is the {board} page.</p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
          columnGap: "1rem",
        }}
      >
        <h2 class="col-span-full">Catalog</h2>

        <span class="col-span-full flex justify-between items-baseline">
          <p>Open threads</p>

          <search class="col-span-full w">
            <form>
              <label for="search">Search </label>
              <input id="search" name='query' type="search" />
            </form>
          </search>
        </span>

        {new Array(100).fill(null).map((_, i) => (
          <article class="grid grid-rows-subgrid row-span-3 text-center">
            <a href='/thread/2'><img class="min-h-[170px]" src="" alt="img" /></a>
            <div class="pt-2 pb-4">
              
              <h3>
                {Math.random() > 0.5
                  ? "Thread title"
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              </h3>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                {Math.random() > 0.5
                  ? `Labore
                  iusto obcaecati quidem quisquam`
                  : null}{" "}
                {Math.random() > 0.5
                  ? `agni alias quod necessitatibus
                  expedita natus exercitationem corrupti sunt,`
                  : null}{" "}
                {Math.random() > 0.5
                  ? `m aut delectus
                  sapiente? Quis vitae corporis eos ut!`
                  : null}
              </p>
            </div>
          </article>
        ))}
      </section>
    </MainLayout>
  );
}
