"use client";
import { FC } from "react";
import Post from "./Post";
import { Post as PostType } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { fetchGroups } from "@/lib/queryFns";

interface PostFeedProps {
  posts: PostType[];
}

const PostFeed: FC<PostFeedProps> = ({ posts }) => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchGroups,
    initialData: posts,
  });

  return (
    <div className="grid grid-cols-3 gap-y-14 justify-items-center">
      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
