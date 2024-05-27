import type { Thread } from "../../constants";
import MainLayout from "../layout/main-layout";


export default function ThreadPage({ thread }: { thread: Thread }) {
  return (
  
    <MainLayout title={thread.title}>
      <h1>{thread.title}</h1>
      <p>{thread.content}</p>
      <img src={thread.img_url} alt={thread.title} />
    </MainLayout>
  )}