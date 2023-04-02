module.exports = {
    dirsToCreate: ['app/images', 'app/fonts'],
    filesToCopy: [
      {
        input: 'gitignore',
        output: '.gitignore'
      },
      {
        input: 'vite.config.js',
        output: 'vite.config.js'
      },
    ],
    filesToRender: [
      {
        input: '_package.json',
        output: 'package.json'
      },
      {
        input: 'README.md',
        output: 'README.md'
      },
      {
        input: 'src/index.html',
        output: 'src/index.html'
      },
      {
        input: 'src/style.css',
        output: 'src/style.css'
      },
      {
        input: 'src/App.jsx',
        output: 'src/App.jsx'
      }
    ]
  };