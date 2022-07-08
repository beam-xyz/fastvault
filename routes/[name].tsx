/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div
      class={tw`flex h-full w-full`}
    >
      <div class={tw`flex text-[35px] mt-[5%] text-center  items-center content-center m-auto justify-center rounded-3xl px-8 h-[450px] w-6/12 bg-[#07080A] border-[15px] border-[#07080A] text-white`}>
        Woah slow down there... I know we are all about the future but{" "}
        {props.params.name} Does not exist... yet!!!
      </div>
    </div>
  );
}
