import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { Typography, Divider, Container, Box } from "@mui/material";
import "./MarkdownRenderer.css";
const MarkdownRenderer = ({ file }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [file]);

  const components = {
    h1: ({ children }) => (
      <Container
        sx={{
          justifyContent: "left",
          alignItems: "left",
          display: "flex",
          flexDirection: "column",
          marginTop: "3rem",
        }}
      >
        <Typography
          variant="h2"
          textAlign={"left"}
          fontWeight={"300"}
          sx={{ textShadow: "0px 4px 4px #00000040" }}

          //   #className="custom-heading custom-heading-1"
        >
          {children}
        </Typography>
        <Divider
          sx={{
            width: "5%",
            bgcolor: "black",
            my: 2,
            borderBottomWidth: 3,
            boxShadow: "0px 4px 4px #00000040",
          }}
        />
      </Container>
    ),
    p: ({ children }) => (
      <Container
        sx={{
          justifyContent: "left",
          alignItems: "left",
          display: "flex",
          flexDirection: "column",
          marginTop: "1.2rem",
          color: "black",
        }}
      >
        <Typography
          variant="body1"
          textAlign={"left"}
          sx={{
            // textShadow: "0px 4px 4px #00000040",
            color: "black",
            fontSize: "1.5rem",
            fontWeight: "350",
            textAlign: "justify",
            letterSpacing: "0.1em",
          }}
          lineHeight={"33px"}
        >
          {React.Children.toArray(children).flatMap((child, index) =>
            typeof child === "string"
              ? child
                  .split("\\n")
                  .flatMap((line, lineIndex, array) => [
                    line,
                    lineIndex < array.length - 1 && (
                      <br key={index + "-" + lineIndex} />
                    ),
                  ])
              : child
          )}
        </Typography>
      </Container>
    ),
    img: ({ alt, src }) => (
      <Container
        sx={{
          marginTop: "2.5rem",
        }}
        alignItems="center"
      >
        <img src={src} alt={alt} className="custom-image" />
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {alt && (
            <Typography
              variant="body2"
              sx={{
                width: "90%",
                margin: "0 auto",
                textAlign: "left",
                marginTop: "2rem",
                fontSize: "1.1rem",
                letterSpacing: "0.18rem",
                lineHeight: "30px",
              }}
            >
              {alt}
            </Typography>
          )}
        </Box>
      </Container>
    ),
  };

  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm, remarkBreaks]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
