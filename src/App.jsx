import { useEffect, useState } from "react";
// const dark_toggle = document.querySelector(".toggle-dark");
// dark_toggle.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.documentElement.classList.toggle("dark");
// });
function App() {
  const [light, setLight] = useState(true);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [inputActiveStatus, setInputActiveStatus] = useState("Ethiopia");
  const [enter, setEnter] = useState(false);

  const [weatherData, setWeatherData] = useState({
    location: { name: "", region: "", country: "", localtime: "" },
    current: {
      condition: { text: "" },
      wind_kph: "",
      wind_mph: "",
      wind_dir: "",
      pressure_in: "",
      pressure_mb: "",
      humidity: "",
      temp_c: "",
      temp_f: "",
      uv: "",
      vis_km: "",
      vis_miles: "",
      wind_degree: "",
    },
  });
  function handleSetLight() {
    setLight((prevLight) => !prevLight);
  }
  function handleSearchCountry(e) {
    setSearchedCountry(e.target.value);
  }
  function handleInputActive() {
    !inputActiveStatus && setInputActiveStatus(true);
  }
  function handleInputBlur() {
    setInputActiveStatus(false);
  }

  useEffect(
    function () {
      async function fetchWeather() {
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchedCountry}`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "19e9d280d9mshde7a0abe8b0177ap1f7564jsnb683ba20427a",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            new Error("That is not correct input");
          }
          const result = await response.json();
          setWeatherData(result);
        } catch (error) {
          console.error(error);
        }
      }
      enter && fetchWeather();
      return function () {
        setEnter(false);
      };
    },
    [enter, searchedCountry]
  );
  useEffect(
    function () {
      function callback(e) {
        if (inputActiveStatus && e.code === "Enter") {
          setEnter(true);
          handleInputBlur();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
        setSearchedCountry("");
      };
    },
    [inputActiveStatus]
  );
  // useEffect(function () {
  //   window.addEventListener("keydown", function (e) {
  //     if (e.key === "Enter") console.log("ol");
  //   });
  // }, []);
  console.log(weatherData);

  const {
    location: { name, region, country, localtime },
    current: {
      condition: { text },
      wind_kph,
      wind_mph,
      wind_dir,
      pressure_in,
      pressure_mb,
      humidity,
      temp_c,
      temp_f,
      uv,
      vis_km,
      vis_miles,
      wind_degree,
    },
  } = weatherData;
  return (
    <div className={light ? "" : "dark"}>
      <div className={`p-[30px]  dark:bg-gray-900 dark:text-white px-11  `}>
        <nav className="flex h-[40px] justify-between items-center mt-9 px-[40px] ">
          <h2 className=" p-2 nav-el dark:text-white  dark:bg-slate-600">
            weatherIt
          </h2>

          <input
            type="text"
            placeholder="search.. \1F50D"
            className="w-[50vw] nav-el h-10 pl-7 dark:bg-slate-600"
            value={searchedCountry}
            onChange={handleSearchCountry}
            onFocus={handleInputActive}
            onBlur={handleInputBlur}
          />

          <div className="nav-el p-2 dark:bg-slate-600">
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

          <div onClick={handleSetLight}>
            {light ? (
              <div className="nav-el p-2 hover:cursor-pointer">
                <svg
                  className="w-6 h-6  text-gray-800 "
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
              <div className="nav-el p-2 hover:cursor-pointer  dark:bg-slate-600 dark:text-white">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
                </svg>
              </div>
            )}
          </div>

          <img
            src=" https://rapidapi.com/static-assets/default/dark-logo-78e48dc1-ca3f-4d67-a6f5-74032f439c8b.svg"
            alt="rapid api logo"
            className="w-[150px] bg-slate-300 p-3"
          />
        </nav>
        <main className="mt-8">
          <h1 className="text-4xl mb-7 pl-7">Weather Today</h1>
          <div className=" grid grid-cols-4 grid-rows-3 gap-3 h-[400px] ">
            <div className="row-span-3 pt-11 bg-slate-300 pl-[40px]  border  dark:bg-slate-700 rounded-xl border-slate-700 mx-11">
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
              <p className="text-4xl mt-8 font-medium">{temp_c}&deg;C</p>
              <p className="border-b border-black w-4/7 py-4 mr-2  font-medium">
                {text}
              </p>
              <div className="flex gap-1 items-center  my-4">
                <svg
                  className="w-6 h-6 text-gray-800   "
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
                <p>{name}</p>
              </div>
              <div className="flex  items-center gap-2  my-4">
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
                <p>{localtime}</p>
              </div>
            </div>

            <WeatherItem property={"Wind"} amount={`${wind_kph}kph`} />
            {/* <div className="p-7 w-3 flex items-center justify-center">
            <svg width="0" height="0" className="hidden">
              <symbol
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="anemometer-svgrepo-com"
              >
                <path d="M8.243,11.97l12-3A1,1,0,0,0,21,8V5a1,1,0,0,0-.835-.986l-12-2A1,1,0,0,0,7,3v8A1,1,0,0,0,8.243,11.97ZM17,5.514l2,.333V7.219l-2,.5Zm-4-.667,1,.167,1,.167V8.219l-2,.5ZM9,4.181l2,.333v4.7l-2,.5ZM3,22V2A1,1,0,0,1,5,2V22a1,1,0,0,1-2,0Z"></path>
              </symbol>
            </svg>
            <svg className="icon">
              <use xlinkHref="#anemometer-svgrepo-com"></use>
            </svg>
          </div> */}
            <WeatherItem property={"Pressure"} amount={`${pressure_mb}`} />
            <WeatherItem property={"Humidity"} amount={`${humidity}`} />
            <WeatherItem property={"Sunrise"} amount={"06:26"} />
            <WeatherItem property={"Visibility"} amount={"10km"} />
            <WeatherItem property={"Sunset"} amount={"10:33"} />
            {/* <div className="">
            <p>Pressure</p>
            <p>1008hpa</p>
            </div>
          <div className="">
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
          </div> */}
            <div className="row-start-1 col-start-4 row-span-3 bg-slate-300 flex dark:bg-slate-700 items-center justify-center rounded-xl mx-2">
              8
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
function WeatherItem({ property, amount }) {
  return (
    <div className="dark:bg-slate-700 bg-slate-300 flex items-center justify-center rounded-xl border-slate-700 flex-col m-2">
      <p>{property}</p>
      <p>{amount}</p>
    </div>
  );
}
export default App;
