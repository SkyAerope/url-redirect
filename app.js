const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/data', (req, res) => {
  const param = req.body['param'];
  fs.readFile(path.join(__dirname, 'url.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    const urls = data.split('\n');
    const jsonData = urls.reduce((acc, url) => {
      if (url.startsWith('http')) {
        if (!url.endsWith('/')) {
          url += '/';
        }
        acc.push({ url: url + param });
      }
      return acc;
    }, []);
    res.json(jsonData);
  });
});


app.listen(PORT, () => {
  console.log(`服务器正在运行，访问地址：http://localhost:${PORT}`);
});
