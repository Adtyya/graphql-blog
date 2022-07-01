import { GraphQLClient, gql } from "graphql-request";

export const HeadlessCms = new GraphQLClient(
  "https://api-ap-northeast-1.graphcms.com/v2/cl4wa1m9u269y01uoei8j6ikm/master"
);

export const queryCategories = gql`
  {
    categories(orderBy: category_ASC) {
      category
    }
  }
`;

export const queryAllPost = gql`
  {
    posts(orderBy: createdAt_DESC) {
      id
      createdAt
      excerpt
      slug
      title
      coverImage {
        url
      }
      author {
        id
        name
        picture {
          url
        }
      }
    }
  }
`;

export const queryAllSlug = gql`
  {
    posts {
      slug
    }
  }
`;

export const getBySlg = gql`
  query MyQuery($slug: String!) {
    post(where: { slug: $slug }) {
      createdAt
      tags
      title
      excerpt
      coverImage {
        url
      }
      author {
        id
        name
        picture {
          url
        }
      }
      content {
        markdown
      }
      tags
      category {
        category
      }
    }
  }
`;

export const queryByCategory = gql`
  query MyQuery($category: String!) {
    posts(where: { category: { category: $category } }) {
      id
      createdAt
      excerpt
      slug
      title
      coverImage {
        url
      }
      author {
        id
        name
        picture {
          url
        }
      }
    }
  }
`;
