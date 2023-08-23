import useHackerNewsStories from './useHackerNewsStories';

function App() {
  const { stories, error } = useHackerNewsStories();

  return (
    <>
      <h1 className="text-3xl font-bold pb-3">Hacker News</h1>
      {error && <div>An error has occurred</div>}
      {stories ? (
        <section className="grid gap-2 grid-cols-4 grid-rows-4 text-sm">
          {stories.map((story) => (
            <article key={story.id} className="flex items-start gap-1 bg-blue-200 rounded-md pt-2">
              <div className="text-center">
                <span>{story.score}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
              <div>
                <a href={story.url} target="_blank" rel="noreferrer" className="underline font-bold">
                  {story.title}
                </a>{' '}
                <div className="text-xs mt-1">by {story.by}</div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
