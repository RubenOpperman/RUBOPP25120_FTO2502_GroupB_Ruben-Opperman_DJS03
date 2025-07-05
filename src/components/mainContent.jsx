export default function MainContent(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
      <div className="rounded-lg border-2 border-[#9CA3AF] bg-Podcast-card p-2 shadow-lg  font-serif ">
        <div className="p-2">
          <div className="w-full h-full  mx-auto rounded-lg mb-2 overflow-hidden">
            <img
              src={props.img}
              className="w-full h-full object-cover block rounded-2xl"
              alt="podcast image"
            />
          </div>

          <h2 className="text-lg font-bold p-1">{props.title}</h2>

          <div className="flex mb-2">
            <p className="text-sm text-gray-700 p-1 font-medium">
              {props.seasons} seasons
            </p>
          </div>

          <div id="genre-container" className="flex flex-wrap gap-2 mb-2">
            genre
          </div>

          <p className="text-xs text-gray-500 p-1 font-semibold">Updated</p>
        </div>
      </div>
    </div>
  );
}
