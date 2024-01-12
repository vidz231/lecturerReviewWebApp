import React from "react";

export default function PostCard() {
  return (
    <div className="relative bg-zinc-300 bg-opacity-30 flex w-80 md:w-2/4 flex-col items-stretch mt-11 pl-9 pr-11 pt-12 pb-7 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
      <section className="flex justify-between gap-5 mt-1 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="text-black font-semibold whitespace-nowrap mt-3 text-lg">
          <a href="#">👍🏿</a>
          <br />
          1023
          <br />
          <a href="#">👎🏿</a>
          <br />
        </div>

        <div className="text-black text-xl self-stretch grow shrink basis-auto max-md:max-w-full">
          <div className="self-start flex flex-row w-full justify-between items-center text-center">
            {/* <div className="self-stretch flex items-center w-[43px] h-[43px] flex-col rounded-[50%]" /> */}
            <h2 className="text-black text-xl font-bold mt-1">Anonymous</h2>
            <h2 className="text-black text-xl mt-1 w-full">has reviewed</h2>
            <a
              href="#"
              className="text-blue-600 text-xl underline mt-1.5 self-start"
            >
              thuchy
            </a>
            <p className=" align-text-bottom h-full hidden md:block">
              ⭐⭐⭐⭐⭐
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>

          <br />
          <br />
        </div>
      </section>
      <div className="flex w-[206px] max-w-full items-stretch justify-between gap-5 ml-20 mt-5 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0c0bc348d1bed437915b12aebfea190e395b989b54711cc3c518aa5f26c0d195?apiKey=d0da03858a984c898c8110607314683e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c0bc348d1bed437915b12aebfea190e395b989b54711cc3c518aa5f26c0d195?apiKey=d0da03858a984c898c8110607314683e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c0bc348d1bed437915b12aebfea190e395b989b54711cc3c518aa5f26c0d195?apiKey=d0da03858a984c898c8110607314683e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c0bc348d1bed437915b12aebfea190e395b989b54711cc3c518aa5f26c0d195?apiKey=d0da03858a984c898c8110607314683e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c0bc348d1bed437915b12aebfea190e395b989b54711cc3c518aa5f26c0d195?apiKey=d0da03858a984c898c8110607314683e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c0bc348d1bed437915b12aebfea190e395b989b54711cc3c518aa5f26c0d195?apiKey=d0da03858a984c898c8110607314683e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c0bc348d1bed437915b12aebfea190e395b989b54711cc3c518aa5f26c0d195?apiKey=d0da03858a984c898c8110607314683e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c0bc348d1bed437915b12aebfea190e395b989b54711cc3c518aa5f26c0d195?apiKey=d0da03858a984c898c8110607314683e&"
          alt=""
          className="aspect-[2.18] object-contain object-center w-full overflow-hidden shrink-0 flex-1 rounded-2xl"
        />
        <div className="self-center flex items-stretch gap-1 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a62b4a706ecf58983905630fa9c731e6381cb39652f9921fb8ea7e3d933d10e?apiKey=d0da03858a984c898c8110607314683e&"
            alt=""
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black text-base font-semibold self-center grow whitespace-nowrap my-auto">
            Report
          </div>
        </div>
      </div>
    </div>
  );
}
