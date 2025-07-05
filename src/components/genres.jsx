import { genres } from "../data/genreData";

export default function Genres(props) {
  return (
    <div className="flex flex-wrap">
      {props.genreList.map((genre, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium m-1"
        >
          {genre}
        </span>
      ))}
    </div>
  );
}
