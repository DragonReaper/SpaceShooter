import { useEffect } from "react";
import Header from "../components/header";
import Slideshow from "../components/slideshow";
import girlsClear from "../assets/images/girlsClear.png";
function Home() {
  useEffect(() => {
    document.title = "Wear Forward";
  }, []);

  return (
    <div className="bg-white-clean">
      <Header />
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="sm:text-center lg:text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-dark sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Wear Today!</span>
            <span class="block text-purple-primary xl:inline">Wear Forward!</span>
          </h1>
          <p class="mt-3 text-base text-gray-middle sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Widely regarded to be the top promoters of sustainable fashion in the Philippines. Encouraging a zero-waste circular economy in fashion.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-md text-white-clean bg-purple-primary hover:bg-purple-background md:py-4 md:text-lg md:px-10">
                Explore Now
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-md text-purple-background bg-purple-light hover:bg-purple-hover md:py-4 md:text-lg md:px-10">
                Sign Up
              </a>
            </div>
          </div>
      </div>
      </main>
        <div class="lg:absolute lg:inset-y-4 lg:inset-x-80 lg:w-5/7">
        <img class="h-56 w-full object-cover pl-64 pb-20 sm:h-72 md:h-96 lg:w-full lg:h-full" src={girlsClear}  />
        </div>
    </div>
  );
}

export default Home;
