import express, { Request, Response, NextFunction }  from 'express' ; 
import http from 'http' ;
import path from 'path' ;

const app = express() ; 

const server = http.createServer(app) ; 

export const USER_GARAGE = [] ;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req: Request, res: Response) => {
    res.send("<p>Hello and welcome</p>");
  });

  const PORT = 5000 || process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});