import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { db } from './models/index.js';
import {gradeRouter} from './Routes/gradeRouter.js'

(async () => {
  try {
    await db.mongoose.connect('mongodb+srv://RafaelVtor:6k9x7Ev4FR6teLHG@cluster0.qb1xf.mongodb.net/bootcamp?retryWrites=true&w=majority' , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });    
    
  } catch (error) {
    console.log("object")
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors()
);

app.get('/', (req, res) => {
  res.send('API em execucao');
});
app.use(gradeRouter)
app.listen(process.env.PORT || 8080, () => {
  console.log("Api ok")
});
