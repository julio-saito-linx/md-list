// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const PORT = 3001;
const initialData = {
  items: [
    {
      id: '5b93debf-659f-4dc2-bb67-f20f139533b1',
      title: '1) [INITIAL DATA] this is a short text'
    },
    {
      id: 'e9b3e142-5c28-4206-9e67-73b34bb4420f',
      title: '2) [INITIAL DATA] long text with break lines\nlong text with break lines\nlong text with break lines\nlong text with break lines'
    },
    {
      id: '809f50ef-0ec9-4930-a6dd-decee0b98924',
      title: '3) [INITIAL DATA] long text, long text, long text, long text, long text, long text, long text, long text, long text, long text, long text, long text, long text, long text, long text, long text'
    }
  ]
};

server.use(jsonServer.rewriter({
  '/api/': '/',
}));

const router = jsonServer.router(initialData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
