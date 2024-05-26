import type { Board } from "../../constants";
import MainLayout from "../components/layout/main-layout";

export default function BoardPage({ board }: { board: Board }) {
  return (
    <MainLayout title={board}>
      <h1>{board}</h1>
      <p>This is the {board} page.</p>

      
    </MainLayout>
  );
}
