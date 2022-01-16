const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
);
server.use(router);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
//   });
// }

server.listen(PORT, () => {
  console.log('Server is running');
});
