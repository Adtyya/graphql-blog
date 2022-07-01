import React from "react";
import ReactMarkdown from "react-markdown";

const MarkDown = ({ children }) => {
  return (
    <div className="markdown">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-semibold my-2" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h1 className="text-4xl font-semibold my-2" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h1 className="text-3xl font-semibold my-2" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h1 className="text-2xl font-semibold my-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-md font-normal py-3" {...props} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDown;
