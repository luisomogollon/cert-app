import "./App.css";
import imagenes from "../src/assets/imagenes";
import { GiArchitectMask } from "react-icons/gi";

function App() {
  return (
    <section className="text-gray-600   border-4 border-indigo-500 flex flex-col body-font py-6 p-2  space-y-6">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg className="w-16 h-16 text-indigo-400 p-2 " viewBox="0 0 15 15">
              <GiArchitectMask />
            </svg>

            <span className="ml-3 text-xl">L’Art.</span>
          </span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
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
            I subscribe to Locia Moon I certify that the work entitled: "MOON
            CEREMONY" made in 2021 is an original work. this certificate was
            issued on 06/21/2022 by Lucia Moon. This certificate attests that
            the identified work is a first edition of the artist and its
            guarantee.
          </p>
        </div>

        <h1 className="sm:text-5xl  underline decoration-solid text-center text-2xl font-medium italic title-font mb-4 text-gray-900">
          Moon Ceremony
        </h1>

        <h1 className="sm:text-4xl pt-10 text-2xl italic text-center font-semibold title-font mb-1 text-gray-900">
          Lucia Sev Moon
        </h1>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="">
                <img alt="content" className="" src={imagenes.img5} />
              </div>

              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img
                      alt="content"
                      className="object-cover object-center rounded-full h-full w-full"
                      src={imagenes.img1}
                    />
                  </div>

                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      Lucia Sev Moon
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      Lucia is an artist who likes to play with dark color
                      palettes and create surreal atmospheres projected from her
                      mind
                    </p>
                  </div>
                </div>

                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    <span className="italic font-semibold">Description:</span>{" "}
                    <br />
                    Moon Ceremony represents a meeting that is held on the moon
                    by entities from other planets, as well as the coldness of
                    space combined with paletes of dark colors and Celtic
                    rituals, this painting was created on Nov 3, 2021.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap">
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Characteristic
            </h2>

            <p className="leading-relaxed text-base mb-4">
              Year: 2021. <br /> Dimensions: 15cm X 15cm. <br /> Technique:
              Surrealism. <br /> Author: Lucia Sev Moon.
            </p>
          </div>

          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Approved Work
            </h2>

            <p className="leading-relaxed text-base mb-4">
              Duly approved by the salesman and having them right. <br />
              The guarantee is 100% assured, the quality is as shown.
            </p>
          </div>

          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Owner
            </h2>

            <p className="leading-relaxed text-base mb-4">
              Whoever holds this certificate owns this work. <br />{" "}
              Congratulations !
            </p>
          </div>

          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Surrealism
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Surrealism proposes a theory of the unconscious and the irrational
              as a means to change life, society, art.
            </p>
          </div>

          <div className="xl:w-1/5 lg:w-1/2  md:w-full px-10 py-6 border-l-2 border-gray-200 border-opacity-60">
            <img src={imagenes.img0} alt="" />
            <span className="text-indigo-500 inline-flex "></span>
          </div>
        </div>

        <br />
      </div>
      <div className=" sm:w-1/3 justify-center flex">
        <div className=" rounded flex p-1 items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font italic "> <b>Stamp Title </b>: #62fc2228990212acf95c883b8835</span>
        </div>
      </div>

      <div className=" sm:w-1/3  justify-center flex">
        <div className=" rounded flex p-1  items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font italic "><b>Authentic Stamp</b>: #62fc2228990212acf95c883b</span>
        </div>
      </div>
      
    

      <div className="flex justify-center space-x-20 ">
        <img className="w-20  " src={imagenes.img2} alt="" />
        <img className="w-20  " src={imagenes.img4} alt="" />
      </div>

      <div className="flex justify-center px-20 space-x-20">
        <p className="w-20 overline font-semibold  text-center"> Artist</p>
        <p className="w-20 overline font-semibold  text-center "> L’Arta</p>
      </div>

      <br />

      <button className="flex  mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        DOWNLOAD
      </button>
    </section>
  );
}

export default App;
