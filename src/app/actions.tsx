"use server";

import prisma from "@/db";
import { PostCreate } from "@/types";

export async function newPost(post: PostCreate) {
  await prisma.post.create({
    data: post,
  });
}

export async function listPosts() {
  return prisma.post.findMany({});
}
