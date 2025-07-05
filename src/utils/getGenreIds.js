export default function GetGenreIds(ids, allGenres) {
  return ids.map((id) => {
    const genre = allGenres.find((g) => g.id === id);
    return genre ? genre.title : "unknown";
  });
}
