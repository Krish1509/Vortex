import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({ searchParams }: { searchParams: { query: string } }) {
  const query = (await searchParams)?.query;

const posts = [{ 
  _created:  new Date(),
  view: 55,
  author: { _id: 1, name: "John Doe" },
  _id: 1,
  decription: "This is a decription.",
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2Flink-building-age-ai-innovations-strategies-stanventures-vjtmc&psig=AOvVaw3CtbMIU58zSOycynvjJleD&ust=1744001220258000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCU5_vMwowDFQAAAAAdAAAAABAE",
  category: "Technology",
  title: "This is a title",

}]
  return (
    <>
      <section className="pink_container pattern bg-pink-600">
        <h1 className="heading">
          Pick your start<br /> connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search results for "${query}"` : "All Startups"}
    </p>

    <ul className="mt-7 card_grid">
      {posts?.length > 0 ? (
        posts.map((post: StartupCardType) => (
          <StartupCard key={post?._id} post={post} />
        ))
      ) : (
        <p className="no_results">No Startups found</p>
      )}
    </ul>
      </section>

    </>
  );
}
