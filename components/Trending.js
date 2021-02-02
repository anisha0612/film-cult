export default function Trending({ movies }) {
  console.log(movies.results);
  return (
    <div className='space-y-4 grid grid-cols-4 gap-4 m-4'>
      {movies.results.map((movie) => (
        <div
          key={movie.id}
          className='flex items-center justify-center m-3 px-4 rounded bg-green-100 shadow-xl'>
          <img className='block' src={movie.backdrop_path} />

          <p className='block text-gray-400'>{movie.original_title}</p>
        </div>
      ))}
    </div>
  );
}
