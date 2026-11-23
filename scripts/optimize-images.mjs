import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const MAX_WIDTH = 2000
const WEBP_QUALITY = 78
const JPEG_QUALITY = 80

const root = process.cwd()
const imagesDir = path.join(root, 'src', 'assets', 'images')
const backupDir = path.resolve(root, '..', 'imagens-originais-backup')

const skip = new Set(['brand-mark.png', 'brand-original-dark.png', 'brand-original-light.png', 'IDENTIDADE VISUAL.png'])

await fs.mkdir(backupDir, { recursive: true })

let before = 0
let after = 0

for (const name of await fs.readdir(imagesDir)) {
    const ext = path.extname(name).toLowerCase()
    if (skip.has(name) || !['.webp', '.jpg', '.jpeg'].includes(ext)) continue

    const file = path.join(imagesDir, name)
    const original = await fs.readFile(file)
    
    const backupFile = path.join(backupDir, name)
    await fs.copyFile(file, backupFile, fs.constants.COPYFILE_EXCL).catch(() => {})

    let pipeline = sharp(original).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true })
    pipeline = ext === '.webp'
        ? pipeline.webp({ quality: WEBP_QUALITY })
        : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })

    const output = await pipeline.toBuffer()

    before += original.length
    if (output.length < original.length) {
        await fs.writeFile(file, output)
        after += output.length
        console.log(`${name}: ${(original.length / 1e6).toFixed(1)} MB -> ${(output.length / 1e6).toFixed(2)} MB`)
    } else {
        after += original.length
        console.log(`${name}: já otimizada, mantida`)
    }
}

console.log(`\nTotal: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`)
console.log(`Originais guardados em: ${backupDir}`)