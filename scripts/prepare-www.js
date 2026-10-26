// Copia o three.js (instalado pelo npm) para dentro do jogo, para ele funcionar sem internet.
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'three', 'build', 'three.min.js');
const dst = path.join(__dirname, '..', 'www', 'vendor', 'three.min.js');
if (!fs.existsSync(src)) { console.error('three.js nao encontrado. Rode "npm install" primeiro.'); process.exit(1); }
fs.mkdirSync(path.dirname(dst), { recursive: true });
fs.copyFileSync(src, dst);
console.log('three.js copiado para www/vendor');
