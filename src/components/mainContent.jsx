import TimeUpdated from "../utils/formatDate";
import Genres from "./genres";
import { genres } from "../data/genreData";
import GetGenreIds from "../utils/getGenreIds";

export default function MainContent(props) {
  const updateDate = TimeUpdated(props.updated);
  const genreList = GetGenreIds(props.genres, genres);

  return (
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
          <img
            className="w-5 pr-2 h-auto"
            src="src/assets/gray-calendar-25911.svg"
            alt="grey calander"
          />
          <p className="text-sm text-gray-700 p-1 font-medium">
            {props.seasons} seasons
          </p>
        </div>

        <div id="genre-container" className="flex flex-wrap gap-2 mb-2">
          <Genres genreList={genreList} />
        </div>

        <p className="text-xs text-gray-500 py-1 font-semibold">
          updated : {updateDate}
        </p>
      </div>
    </div>
  );
}
