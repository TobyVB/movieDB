import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

function replaceSpace(str) {
  str.replace(" ", "+");
  return str;
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  return (
    <div style={{ margin: "10em 0" }}>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
          {res.status}
        </h2>
        <Image
          className="my-12 w-ful"
          src={imagePath + res.backdrop_path}
          alt={res.title}
          width={1000}
          height={1000}
          priority
        />
        <p>{res.overview}</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <a
            style={{ color: "red" }}
            href={`https://www.youtube.com/results?search_query=${replaceSpace(
              res.title
            )}`}
          >
            Look for "{res.title}" on Youtube
          </a>
          <a
            style={{ color: "red" }}
            href={`https://www.google.com/webhp?q=${replaceSpace(res.title)}`}
          >
            Look for "{res.title}" on Google
          </a>
        </div>
      </div>
    </div>
  );
}
