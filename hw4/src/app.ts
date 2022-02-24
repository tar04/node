import express, { Response, Request } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.end();
});

app.listen(5999, () => {
    console.log('Server is running on port 5999');
});
