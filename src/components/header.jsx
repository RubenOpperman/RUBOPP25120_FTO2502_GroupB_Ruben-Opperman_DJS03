export default function Navbar() {
  return (
    <>
      <nav className="w-full h-15 bg-NavBar-bg text-Podcast-card flex items-center mb-5 font-serif">
        <div>
          <img src="../src/assets/apple-podcast.svg" alt="podcast icon" />
        </div>
        <div className="text-2xl p-5 font-bold">PodcastAPP</div>
      </nav>
    </>
  );
}
