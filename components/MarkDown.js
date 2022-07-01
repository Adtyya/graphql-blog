import React from "react";
import ReactMarkdown from "react-markdown";

const MarkDown = ({ children }) => {
  return (
    <div className="markdown">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl lg:text-3xl font-normal mt-1" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h1 className="text-2xl lg:text-3xl font-normal mt-1" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h1 className="text-2xl font-normal mt-1" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h1 className="text-2xl font-normal mt-1" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p
              className="text-md lg:text-lg text-red-100 font-normal py-3"
              {...props}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
