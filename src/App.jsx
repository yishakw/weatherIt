import { useState } from "react";

function App() {
  const [light, setLight] = useState(true);
  return (
    <div className="mx-[3vw]">
      <nav className="flex h-[40px] justify-between items-center mt-9">
        <h2 className=" p-2 nav-el">weatherIt</h2>

        <input
          type="text"
          placeholder="search.. \1F50D"
          className="w-[50vw] nav-el h-10 pl-7"
        />
        <div className="nav-el p-2">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
        </div>
        {light ? (
          <div className="nav-el p-2 ">
            <svg
              className="w-6 h-6  text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
              />
            </svg>
          </div>
        ) : (
          <>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
            </svg>
          </>
        )}

        <img
          src=" https://rapidapi.com/static-assets/default/dark-logo-78e48dc1-ca3f-4d67-a6f5-74032f439c8b.svg"
          alt="rapid api logo"
          className="w-[150px] bg-slate-300 p-3"
        />
      </nav>
      <main className="mt-8">
        <h1 className="text-4xl mb-7 pl-3">Weather Today</h1>
        <div className=" grid grid-cols-4 grid-rows-3 gap-3 bg-slate-200">
          <div className="row-span-3 pt-9 bg-slate-300 pl-[70px]">
            <svg
              className="w-[60px] h-[60px]  text-gray-800 dark:text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.6"
                d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              />
            </svg>
            <p className="text-4xl mt-6">28.6&deg;c</p>
            <p className="border-b-2 border-black w-2/3 py-4  font-bold">
              Clear Sky
            </p>
            <div className="flex gap-1 items-center  my-4">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white  "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 21"
              >
                <g
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                </g>
              </svg>
              <p>Istanbul</p>
            </div>
            <div className="flex gap-1 items-center gap-2  my-4">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                />
              </svg>
              <p>28 Auguest Monday</p>
            </div>
          </div>
          <div className=" ">
            <p>Wind Speed</p>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="60" height="59.2405" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_12_386"
                    transform="scale(0.0126582 0.0128205)"
                  />
                </pattern>
                <image
                  id="image0_12_386"
                  width="79"
                  height="78"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <div className="">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="58" height="58" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_12_387" transform="scale(0.015625)" />
                </pattern>
                <image
                  id="image0_12_387"
                  width="64"
                  height="64"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <p>Pressure</p>
            <p>1008hpa</p>
          </div>
          <div className="">
            <img
              className="w-14 h-12"
              src="https://via.placeholder.com/60x50"
            />
            <p>Humidity</p>
            <p>48%</p>
          </div>
          <div>
            <p>Sun Rise</p>
            <p>06:26</p>
          </div>
          <div className="">
            <p>Visibility</p>
            <p>10km</p>
          </div>
          <div className="">
            <p>Sunset</p>
            <p>10: 33</p>
          </div>
          <div className="row-start-1 col-start-4 row-span-3 bg-slate-100">
            8
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
