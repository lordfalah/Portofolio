import { generateNewColor } from "@/libs/utils";
import { TCard } from "@/types/index.type";

export const projects: TCard[] = [
    {
        title: "Auth",
        imageSrc: "/image/projects/auth.png",
        description:
            "Simple authentication that uses Oauth from google and implements password reset from resend",
        visitProject: "https://next-auth-six-jade.vercel.app/auth/login",
        sourceCode: "https://github.com/lordfalah/next-auth.git",
        createdAt: "Created at May 2024",
        techs: [
            { name: "Next", color: generateNewColor() },
            { name: "Auth", color: generateNewColor() },
            { name: "Postgress", color: generateNewColor() },
        ],
    },

    {
        title: "Finplan",
        imageSrc: "/image/projects/finplan.png",
        description:
            "A platform that provides services to help financial planning and investment. Built using vue and quasar technology",
        visitProject: "https://finplan.id/",
        sourceCode: null,
        createdAt: "Created at May 2024",
        techs: [
            { name: "Next", color: generateNewColor() },
            { name: "Auth", color: generateNewColor() },
            { name: "Postgress", color: generateNewColor() },
        ],
    },

    {
        title: "Smartpath",
        imageSrc: "/image/projects/smartpath.png",
        description:
            "An educational technology platform that provides a variety of learning programs to assist students and professionals in developing their skills. Which is built using React, Next, Typescript",
        visitProject: "https://smartpath.id/",
        sourceCode: null,
        createdAt: "Created at May 2024",
        techs: [
            { name: "Next", color: generateNewColor() },
            { name: "Auth", color: generateNewColor() },
            { name: "Postgress", color: generateNewColor() },
        ],
    },
];