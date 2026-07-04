import app from "./app.js";
import { authenticate } from "./middleware/authenticate.js";
import authRouter  from './routes/auth.routes.js';

const PORT = process.env.PORT || 3000;


app.use(authenticate);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});