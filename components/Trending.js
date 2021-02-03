import Movie from "./Movie";

const Trending = ({ movies }) => {
  // console.log(movies.results);

  return (
    <div className='space-y-4 grid grid-cols-4 gap-4 m-4'>
      {movies.results.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};

export default Trending;
