import { useEffect, useState } from "react";

export default function useHackerNewsStories() {
  const [stories, setStories] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const getTopStories = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const topStoryData = await getTopStories.json();
        const topTwentyStories = topStoryData.splice(0, 20);

        const storyData = topTwentyStories.map(async (storyId) => {
          const getStoryData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
          return await getStoryData.json();
        });

        const allStories = await Promise.all(storyData);
        setStories(allStories);
        setError(null);
      } catch (error) {
        setError(error);
        setStories([]);
      }
    }
    fetchData();
  }, []);

  return { stories, error };
}