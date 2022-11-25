import React, { useEffect, useContext } from "react";
import { DesktopContext } from "./DesktopDisplay";
import { Box, Flex } from "@chakra-ui/react";
import { GithubRepoCard } from "./GithubRepoCard";
import { TaskbarButtons } from "./TaskbarButtons";
import {
  SiTypescript,
  SiSwift,
  SiReact,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";

export const MailWindow = () => {
  const { zIndexes, handleSetAsTopScreen, setShowMail } =
    useContext(DesktopContext);

  useEffect(() => {
    handleSetAsTopScreen("mail");
  }, []);
  return (
    <Box
      width="600px"
      height="400px"
      backgroundColor="white"
      borderRadius="10px"
      padding="10px"
      mr={"200px"}
      boxShadow="dark-lg"
      position={"absolute"}
      zIndex={zIndexes["mail"]}
      onClick={() => handleSetAsTopScreen("mail")}
      resize="both"
      overflow={"auto"}
      gap={1.5}
      flexDir={"column"}
      display={"flex"}
    >
      <TaskbarButtons setWindowOpenFunction={setShowMail} />
      <GithubRepoCard
        repoSubPath="snapshot-frontend"
        repoName="Snapshot Frontend"
        repoDescription="Bereal web3 polygon clone - frontend"
      >
        <SiTypescript color="#3178c6" size={30} />
        <SiReact color="#61dafb" size={30} />
      </GithubRepoCard>
      <GithubRepoCard
        repoSubPath="franChat"
        repoName="FranChat"
        repoDescription="IOS chat app using firebase for storing messages"
      >
        <SiSwift color="#ffac45" size={30} />
        <SiFirebase color="#ffca28" size={30} />
      </GithubRepoCard>
      <GithubRepoCard
        repoSubPath="portfolio-v3-js"
        repoName="Portfolio V3"
        repoDescription="My portfolio website - frontend"
      >
        <SiJavascript color="#f7df1e" size={30} />
        <SiReact color="#61dafb" size={30} />
      </GithubRepoCard>
    </Box>
  );
};
