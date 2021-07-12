import { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: string[] = ['test1', 'test2']
    return { paths, fallback: false }
}