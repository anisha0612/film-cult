export default function Movie({ movie }) {
  console.log(movie);
  return (
    <div key={movie.id}>
      <figure class='md:flex bg-gray-100 rounded-xl p-8 md:p-0'>
        <img
          className='w-32 h-32 md:w-48 md:h-auto'
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <p className='text-lg font-semibold'>{movie.original_title}</p>
        </div>
      </figure>
    </div>
  );
}
