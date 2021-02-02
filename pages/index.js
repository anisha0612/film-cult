import Head from "next/head";
import Navbar from "../components/Navbar.js";
import Trending from "../components/Trending.js";

export default function Home({ movies }) {
  // console.log(movies);
  return (
    <div>
      <Head>
        <title>Film Cult</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Trending movies={movies} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=f670fe129b647c0b9d6f75b3bbcb8c33&language=en-US`
  );
  const movies = await res.json();
  return {
    props: { movies },
  };
};
