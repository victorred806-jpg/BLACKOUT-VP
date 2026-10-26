// Deixa o app do Android sempre na horizontal (modo paisagem).
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
let x = fs.readFileSync(f, 'utf8');
if (!x.includes('screenOrientation')) {
  x = x.replace('<activity', '<activity android:screenOrientation="sensorLandscape"');
  fs.writeFileSync(f, x);
  console.log('AndroidManifest: paisagem ativada');
}
