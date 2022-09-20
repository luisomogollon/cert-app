import "./App.css";
import imagenes from "../src/assets/imagenes";
import { GiArchitectMask } from "react-icons/gi";

function App() {
  return (
    <section className="text-gray-600   border-4 border-indigo-500 flex flex-col body-font py-6 p-2  space-y-6">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg class="w-16 h-16 text-indigo-400 p-2 " viewBox="0 0 15 15">
              <GiArchitectMask />
            </svg>

            <span class="ml-3 text-xl">L’Art.</span>
          </span>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <span className=" text-2xl text-indigo-500 tracking-widest font-medium title-font italic mb-6">
            L’Art Offical
          </span>

          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
            CERTIFICATE OF AUTHENTICITY
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed italic text-base">
            <b>Digital Folio: #62fc2228990212acf95c883b</b>
          </p>

          <br />

          <p className="lg:w-2/3 flex mx-auto leading-relaxed italic text-base">
            Metal soul is a painting that represents the metal spirit of a
            warrior facing the volcanic surface, it is a surreal chaos with dark
            reddened palettes
          </p>
        </div>

        <h1 className="sm:text-4xl  text-2xl italic text-center font-semibold title-font mb-1 text-gray-900">
          Lucia Moon
        </h1>

        <section className="px-2 py-32 bg-white md:px-0">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="text-xs text-2xl text-indigo-500 tracking-widest font-medium title-font italic mb-1">
                      Sofia Art
                    </span>

                    <span className="block sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
                      Metal Soul
                    </span>
                  </h1>

                  <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    It's never been easier to build beautiful websites that
                    convey your message and tell your story.
                  </p>

                  <div className="relative flex flex-col sm:flex-row sm:space-x-4"></div>
                </div>
              </div>

              <div className="w-full px-7 py-7 mt-5 md:w-1/2">
                <div className="w-full h-auto overflow-hidden  ">
                  <img src={imagenes.img5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Description
            </h2>

            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>

          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Year Of This Art
            </h2>

            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>

          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Surrealism
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>

          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-20 py-6 border-l-2 border-gray-200 border-opacity-60">
            <img src={imagenes.img0} alt="" />
            <span className="text-indigo-500 inline-flex items-center"></span>
          </div>
        </div>

        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          DOWNLOAD PDF
        </button>

        <br />
      </div>

      <div className="flex justify-between px-20 space- ">
        <img className="w-20  " src={imagenes.img2} alt="" />
        <img className="w-20  " src={imagenes.img4} alt="" />
      </div>

      <div className="flex justify-between px-20 space-">
        <p className="w-20 overline font-semibold  text-center">Of Artist</p>
        <p className="w-20 overline font-semibold  text-center ">Of L’Arta</p>
      </div>
    </section>
  );
}

export default App;
