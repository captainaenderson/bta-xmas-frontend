import Snowfall from "react-snowfall";

function Home() {
  return (
    <>
      <div>
        <h1 className="font-mono font-bold uppercase text-white text-2xl flex text-center mt-20 mb-5">
          BTA wishes you happy holidays!
        </h1>
        <div className="flex justify-center items-center mt-5">
          <div className="w-full md:w-2/3 lg:w-1/2 px-4">
            <p className="font-mono font-normal text-white text-center text-sm">
              and a fantastic start to 2024!
            </p>
            <p className="font-mono font-normal text-white text-center text-sm mt-5">
            We‘ve prepared three of our favourite Christmas cookies to cook, complete with a BTA playlist timed to perfection for you to bake to.
            </p>
            <p className="font-mono font-normal text-white text-center text-sm mt-5">
            Enjoy, and see you next year! 💫
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
