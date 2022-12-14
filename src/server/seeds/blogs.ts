import { Blog } from "../models/Blog";

export const initBlogs = async () => {
  console.log("STARTED")
  const data = Array(200)
    .fill(null)
    .map((_, index) => ({
      name: `World of Landies #${index}`,
      description:
        "A world of isometrical lands generated by a one of a kind algorithm with endless biome combinations. Spawning is completely random including the tiniest details to offer uniqueness to all!"
    }));

  await Blog.insertMany(data)
  console.log("ENDED")
}
