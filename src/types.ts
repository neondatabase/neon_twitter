export type PostCreate = {
  content: string;
  author: string;
};

export type PostData = PostCreate & {
  id: number;
  createdAt: Date;
};
