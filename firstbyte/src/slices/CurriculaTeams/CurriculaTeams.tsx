/** @format */

import { useEffect } from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Container from "../../components/Container/Container";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import TeamCard from "../../components/TeamCard/TeamCard";
import useGetCurricula from "../../hooks/useGetCurricula";
import { motion } from "framer-motion";

const CurriculaTeams = () => {
  const [curricula, setCurricula] = useGetCurricula();

  useEffect(() => {
    return () => {
      setCurricula((curricula) => {
        return [...[]];
      });
    };
  }, []);

  return (
    <>
      <Container>
        {curricula.map((eachCurricula, index) => {
          return (
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.1,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200,
              }}
              key={eachCurricula.teamName}
              className="mb-20">
              <HeadingRichText
                text={""}
                illuminateText={eachCurricula.teamName}
                backText={""}
                subHeading={true}
              />
              <div className="grid grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
                <div className="mx-auto lg:col-span-1 z-0">
                  <ImageCarousel images={eachCurricula.images} />
                </div>
                <div className="lg:col-span-2">
                  <TeamCard title={"Mission"} text={eachCurricula.mission} />
                  <TeamCard
                    title={"Little About Us"}
                    text={eachCurricula.history}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </Container>
    </>
  );
};

export default CurriculaTeams;
