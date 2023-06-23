export type PostCreate = {
  content: string;
};

export type PostData = PostCreate & {
  id: number;
  createdAt: Date;
};
