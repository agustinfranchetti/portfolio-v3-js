import React, { useState } from "react";
import { TerminalOutput, TerminalInput } from "react-terminal-ui";
import {
  welcomeText,
  commandsText,
  socialsLinks,
  resumeLinks,
  psText,
} from "./portfolioTerminalUtils";
import { Link } from "@chakra-ui/react";

export const useTerminalCommandsHook = () => {
  const [terminalOutput, setTerminalOutput] = useState([
    <TerminalOutput> {welcomeText + commandsText + psText} </TerminalOutput>,
  ]);

  const handleTerminalInput = (input) => {
    if (input === "help") {
      setTerminalOutput((prev) => [
        ...prev,
        <TerminalInput>{input}</TerminalInput>,
        <TerminalOutput> {commandsText} </TerminalOutput>,
      ]);
    } else if (input === "socials") {
      setTerminalOutput((prev) => [
        ...prev,
        <TerminalInput>{input}</TerminalInput>,
        <TerminalOutput>
          {socialsLinks.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              fontWeight={"bold"}
              color={"twitter.500"}
            >
              {link.label}
              {"\u000A"}
            </Link>
          ))}
        </TerminalOutput>,
      ]);
    } else if (input === "resume") {
      setTerminalOutput((prev) => [
        ...prev,
        <TerminalInput>{input}</TerminalInput>,
        <TerminalOutput>
          {resumeLinks.map((link) => (
            <Link fontWeight={"bold"} color={"twitter.500"} href={link.url}>
              {link.download_text}
              {"\u000A"}
            </Link>
          ))}
        </TerminalOutput>,
      ]);
    } else if (input === "clear") {
      setTerminalOutput([]);
    } else {
      setTerminalOutput((prev) => [
        ...prev,
        <TerminalInput>{input}</TerminalInput>,
        <TerminalOutput>
          {`Command not found. Type "help" to see available commands.`}
        </TerminalOutput>,
      ]);
    }
  };

  return { terminalOutput, handleTerminalInput };
};
