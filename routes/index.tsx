/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "https://deno.land/x/fresh@1.0.0/runtime.ts";


export default function Home() {
  return (
    <main class={tw`lg:border-[15px] lg:border-[#07080A] w-full h-full font-['inder'] pb-[50px]`}>
      <Head>
        <title>Fastvault | Decentralized file sharing</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inder&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      {/*****Header*****/}
      <section id="header" class={tw`flex w-11/12 xl:w-10/12 m-auto`}>
        <div class={tw`mt-[10px] justify-start`}>
          <img src="/fastvault.svg" class={tw`h-[65px] w-[300px]`} />
        </div>

        <div class={tw`flex m-auto justify-end w-full`}>
          <button
            class={tw`bg-[#07080A] text-white text-[8px] sm:text-[12px] h-[30px] w-[85px] sm:h-[40px] sm:w-[125px] rounded-full shadow-lg`}
          >
            Get Early Access
          </button>
        </div>
      </section>

      {/*****HERO*****/}
      <section
        id="hero"
        class={tw`flex flex-col sm:gap-y-[75px] gap-y-[50px] `}
      >
        <div
          class={tw`flex sm:mt-[50px] mt-[75px] sm:mb-[-15px] mb-[-25px] flex justify-center m-auto w-full`}
        >
          <a target="_blank" href="https://www.imrzlabs.com">
            <img
              src="/branding.svg"
              class={tw`h-[35px] w-[170px] sm:h-[50px] sm:w-[200px]`}
            />
          </a>
        </div>
        <h1
          class={tw`xl:w-6/12 w-11/12 md:text-[65px] text-[30px] sm:text-[45px] flex justify-center m-auto sm:leading-[70px] text-center capitalize font-['Bangers']`}
        >
          Decentralized file sharing network
        </h1>
        <p
          class={tw`lg:w-7/12 md:w-6/12 2xl:w-5/12 w-9/12 mt-[-25px] text-sm flex justify-center m-auto text-center`}
        >
          Fastvault is a decentralized File Sharing solution, ensuring the files
          you share are stored privately on the blockchain and not accessible by
          3rd parties.
        </p>
        <form class={tw`flex justify-center m-auto`}>
          <input
            type="email"
            placeholder="Email Address..."
            class={tw`p-5 pr-[140px] h-[50px] w-[335px] text-[12px] rounded-full m-auto shadow-2xl`}
          >
            <button
              type="submit"
              class={tw`bg-[#07080A] text-white text-[12px] absolute mt-[2px] ml-[200px] h-[46px] w-[130px] rounded-full shadow-sm `}
            >
              Get Early Access
            </button>
          </input>
        </form>
        <img
          src="/scroll.svg"
          class={tw`h-[35px] w-[30px] flex justify-center m-auto`}
        />
      </section>

      {/*****Features*****/}
      <section
        class={tw`py-[150px] mb-[-50px] md:mb-auto md:py-[225px] md:flex md:w-11/12 lg:w-10/12 xl:w-9/12 md:m-auto md:justify-center`}
      >
        <img
          src="/ddw.svg"
          class={tw`hidden md:flex md:h-[400px] xl:h-[430px] justify-start`}
        />
        <img
          src="/ddw-mob.svg"
          class={tw`pb-[50px] flex w-11/12 m-auto justify-center md:hidden`}
        />
        <div
          class={tw`flex flex-col w-11/12 md:w-10/12 md:flex m-auto justify-end md:ml-[20px] lg:ml-[100px] xl:ml-[125px] gap-y-[25px] md:gap-y-[45px] xl:gap-y-[70px] `}
        >
          <img
            src="/trust.svg"
            class={tw`flex h-[100px] xl:h-[100px] sm:w-auto sm:h-auto`}
          />
          <img
            src="/privacy.svg"
            class={tw`flex h-[100px] xl:h-[100px] sm:w-auto sm:h-auto lg:ml-[85px]`}
          />
          <img
            src="/p2p.svg"
            class={tw`flex h-[100px] xl:h-[100px] sm:w-auto sm:h-auto`}
          />
        </div>
      </section>

      {/*****Use Case*****/}
      <section
        class={tw`flex flex-col lg:flex lg:flex-row lg:px-[185px] xl:px-0 justify-center m-auto w-11/12 lg:w-9/12 gap-y-[25px] gap-x-[5px] lg:gap-x-[25px]`}
      >
        <img src="/idv.svg" class={tw`flex lg:h-[300px] 2xl:h-[325px]`} />
        <img src="/afv.svg" class={tw`flex lg:h-[300px] 2xl:h-[325px]`} />
      </section>

      {/*****CTA*****/}
      <section
        class={tw`h-[385px] lg:h-[500px] rounded-[50px] mt-[100px] text-white bg-[#07080A] flex flex-col lg:flex lg:flex-row justify-center m-auto w-11/12 lg:w-10/12 xl:w-9/12 gap-y-[25px] gap-x-[5px] lg:gap-x-[25px]`}
      >
        <div
          class={tw`flex flex-col gap-y-[50px] justify-center items-center lg:items-start lg:ml-[100px] 2xl:ml-[150px] w-full`}
        >
          <h1 class={tw`text-[25px] md:text-[30px] xl:text-[35px]`}>
            Help us evolve Fastvault
          </h1>
          <p
            class={tw`flex w-8/12 lg:w-11/12 xl:w-8/12 text-center lg:text-left`}
          >
            Join our discord to help us evolve the platform or get in touch
            below if you want to join our innovation efforts.
          </p>
          <a href="">
            <img src="/button.svg" class={tw`w-[150px] h-[65px]`} />
          </a>
        </div>
        <img
          src="/feature.png"
          class={tw`h-[400px] w-[400px] hidden lg:mr-[25px] 2xl:mr-[135px] lg:flex lg:justify-end justify-center m-auto`}
        />
      </section>

      {/*****Footer*****/}
      <section>
        <img
          src="/divider.svg"
          class={tw`hidden md:flex justify-center m-auto w-9/12 mt-[50px]`}
        />
        <img
          src="/divider-mob.svg"
          class={tw`md:hidden object-scale-down justify-center m-auto w-9/12 mt-[50px] mb-[-25px]`}
        />
        <div>
          <div
            class={tw`flex sm:mt-[50px] mt-[75px] sm:mb-[-15px] mb-[-25px] flex justify-center m-auto w-full`}
          >
            <a target="_blank" href="https://www.imrzlabs.com">
              <img src="/branding.svg" class={tw`h-[35px] w-[170px]`} />
            </a>
          </div>
          <p
            class={tw`flex justify-center m-auto text-center text-[9px] pb-[20px] pt-[35px]`}
          >
            © Copyright 2022
          </p>
          <img
            src="/logo.svg"
            class={tw`h-[12px] w-[85px] flex m-auto justify-center`}
          />
        </div>
      </section>
    </main>
  );
}
