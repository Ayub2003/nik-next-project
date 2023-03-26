import { GetStaticProps } from "next";
import { FC } from "react";

export const Navigation: FC<{ reviews: Array<{}> }> = ({ reviews }) => {
  console.log(reviews);
  return <div></div>;
};

export const getStaticProps: GetStaticProps<any> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      reviews: data,
    },
    revalidate: 60,q
  };
};
