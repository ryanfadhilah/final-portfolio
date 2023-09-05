import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <section>
      <h1 className="text-7xl underline underline-offset-8">Contact</h1>

      <div
        className="mt-20 w-full flex
      flex-col
      md:flex-row
      "
      >
        <span
          className="w-1/6 flex
        flex-col"
        >
          <h1 className="text-5xl">Fast</h1>
          <ul
            className="flex
          flex-row
          md:flex-col"
          >
            <li>React</li>
            <li>next</li>
            <li>GQL</li>
          </ul>
        </span>

        <span className="w-5/6 text-white bg-black h-96 text-4xl">Formal</span>
      </div>
    </section>
  );
}
