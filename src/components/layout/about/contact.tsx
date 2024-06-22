import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-md">
      <h2 className="mb-4 mt-16 text-3xl font-bold">Contact</h2>
      <article className="mb-4 min-w-0 space-y-5 text-justify leading-loose">
        <p>
          I`m always excited to connect with everyone so please don`t hesitate
          to get in touch with me by following my social media bellow:
        </p>

        <ul className="ml-1.5 min-w-0 list-inside list-disc space-y-2 marker:text-[#d1d5db] sm:w-auto md:ml-2.5">
          <li className="truncate">
            Email -{" "}
            <Link
              target="_blank"
              className="font-semibold underline"
              href={"mailto:irfin0falah@gmail.me"}
            >
              irfin0falah@gmail.com
            </Link>
          </li>
          <li className="truncate">
            LinkedIn -{" "}
            <Link
              className="font-semibold underline"
              target="_blank"
              href={"https://www.linkedin.com/in/irfinfalah/"}
            >
              https://www.linkedin.com/in/irfinfalah
            </Link>
          </li>
          <li className="truncate">
            Github -{" "}
            <Link
              className="font-semibold underline"
              target="_blank"
              href={"https://github.com/lordfalah"}
            >
              https://github.com/lordfalah
            </Link>
          </li>
          <li className="truncate">
            Instagram -{" "}
            <Link
              className="font-semibold underline"
              target="_blank"
              href={"https://www.instagram.com/mrr.falah"}
            >
              https://www.instagram.com/mrr.falah
            </Link>
          </li>
        </ul>

        <p>
          Also, you can{" "}
          <span className="cursor-not-allowed font-semibold underline">
            read my resume here
          </span>
          . Anyway, thanks for visiting my profile :)
        </p>
      </article>
    </div>
  );
};

export default Contact;
