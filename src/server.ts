import createApp from "./app";

const app = createApp();
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🎯 Server is running port http://localhost:${port}`);
});