const fs = require('fs')
const path = require('path')

const iconPath = '../projects/fusion-ui/src/assets/icons/v3';

const fullPath = path.join(__dirname, iconPath)
const files = fs.readdirSync(fullPath)

try {
    // files.forEach( file => console.log(file.replace('.svg','')) )
    const iconGallery = files.reduce((acc, file)=>{
        const content = fs.readFileSync(iconPath+'/'+file, { encoding: 'utf8', flag: 'r' })
        acc += `\n<IconItem name="${file.replace('.svg','')}">
    ${content}
</IconItem>`
   return acc;
    },'')
    fs.writeFileSync('./icons.mdx', iconGallery);
    console.log('Done >>', files.length);
}
catch (error) { console.log(error) }
