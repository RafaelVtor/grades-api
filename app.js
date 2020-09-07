import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { db } from './models/index.js';
import { gradeRouter } from './Routes/gradeRouter.js'

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url)
import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.MONGODB)



async function conectar() {
  try {
    await db.mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });


  } catch (error) {
    console.log("object")
    process.exit();
  }
};
conectar()

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
