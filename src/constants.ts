export enum Board{
  technology = "technology",
  media = "media",
  random = "random",
  news = "news",
  social = "social",
  art = "art",
  games = "games",
  meta = "meta",
  politics = "politics",
}

export const boards = [
  Board.technology,
  Board.media,
  Board.random,
  Board.news,
  Board.social,
  Board.art,
  Board.games,
  Board.meta,
  Board.politics,
];

export interface Thread {
  id: number;
  title: string;
  content: string;
  img_url: string;
  board: Board;
  posts: Post[];
}

export interface Post {
  id: number;
  content: string;
  img_url: string;
  thread: Thread;
}