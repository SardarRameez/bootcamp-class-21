const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const students = [
  {
    "id":1,
    "name": 'Rameez',
    "email": 'rameez@gmail.com',
    "age": 10
  },
  {
    "id":2,
    "name": 'khan',
    "email": 'rameez@gmail.com',
    "age":15
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    students: () => students,
  },
};


const typeDefs = gql`

  # This "Book" type defines the queryable fields for every book in our data source.
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    students: [Student]
  }
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
