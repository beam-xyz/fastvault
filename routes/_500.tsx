/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <main class={tw``}>
  <p>500 internal error: {(error as Error).message}</p>
  </main>
  )
}