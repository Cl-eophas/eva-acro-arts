// Central image registry. Uses Vite's glob import so every asset in
// src/assets/img is bundled, hashed and optimized automatically.
// Usage: getImage('hero-aerial-hoop') -> { jpg, webp }

const jpgModules = import.meta.glob('../assets/img/*.jpg', { eager: true, import: 'default' });
const webpModules = import.meta.glob('../assets/img/*.webp', { eager: true, import: 'default' });
const pngModules = import.meta.glob('../assets/img/*.png', { eager: true, import: 'default' });

function buildMap(modules, ext) {
  const map = {};
  for (const path in modules) {
    const name = path.split('/').pop().replace(`.${ext}`, '');
    map[name] = modules[path];
  }
  return map;
}

const jpgMap = buildMap(jpgModules, 'jpg');
const webpMap = buildMap(webpModules, 'webp');
const pngMap = buildMap(pngModules, 'png');

export function getImage(name) {
  return {
    jpg: jpgMap[name] || pngMap[name] || '',
    webp: webpMap[name] || '',
    png: pngMap[name] || '',
  };
}
