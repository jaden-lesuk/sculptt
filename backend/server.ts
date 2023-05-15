import express, { Express, Request, Response} from "express";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
// import { errorHandler } from "./middleware/errorMiddleware";

dotenv.config();

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => "Hello world!"
    }
}

// const server = new ApolloServer({ typeDefs, resolvers });
// context: async ({ req }) => ({ token: req.headers.token })


// const app: Express= express();
const port = process.env.PORT || 5000;

// middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// routing
// app.get("/", (req: Request, res: Response) => {
//     res.send(`Express Typescript`);
// })

// app.use(errorHandler);

// server.applyMiddleware({ app });

// app.listen(port, () => {
//     console.log(`⚡️[server]: Server is running on port: ${port}`);
// })

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    app.listen(port, () => {
    console.log(`Server is listening on port ${port}${server.graphqlPath}`);
})
}

startApolloServer(typeDefs, resolvers);