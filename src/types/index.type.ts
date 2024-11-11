export type TCard = {
    title: string;
    description: string;
    imageSrc: string;
    createdAt: Date | string;
    visitProject: string;
    sourceCode: string | null;
    techs: { name: string; color: string }[];
};