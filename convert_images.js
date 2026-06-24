const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, 'public', 'images', 'original_png');
const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory '${sourceDir}' does not exist.`);
    process.exit(1);
}

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.readdir(sourceDir, async (err, files) => {
    if (err) {
        console.error('Error reading source directory:', err);
        process.exit(1);
    }

    const imageFiles = files.filter(f => {
        const ext = path.extname(f).toLowerCase();
        return ['.png', '.jpg', '.jpeg', '.bmp', '.tiff'].includes(ext);
    });

    if (imageFiles.length === 0) {
        console.log('No images found to convert.');
        return;
    }

    console.log(`Found ${imageFiles.length} images to convert using Sharp.`);
    console.log('-'.repeat(90));
    console.log(`${'Original File'.padEnd(35)} | ${'Original Size'.padEnd(12)} | ${'WebP Size'.padEnd(12)} | ${'Savings'.padEnd(10)} | Status`);
    console.log('-'.repeat(90));

    let totalOriginalBytes = 0;
    let totalWebPBytes = 0;
    let successCount = 0;

    for (const file of imageFiles) {
        const sourcePath = path.join(sourceDir, file);
        const baseName = path.basename(file, path.extname(file));
        const targetPath = path.join(targetDir, `${baseName}.webp`);

        try {
            const originalStats = fs.statSync(sourcePath);
            const originalSize = originalStats.size;
            totalOriginalBytes += originalSize;

            // Convert to WebP using sharp
            await sharp(sourcePath)
                .webp({ quality: 85 })
                .toFile(targetPath);

            const webpStats = fs.statSync(targetPath);
            const webpSize = webpStats.size;
            totalWebPBytes += webpStats.size;

            const savingsBytes = originalSize - webpSize;
            const savingsPercent = (savingsBytes / originalSize) * 100;

            const origStr = `${(originalSize / 1024).toFixed(1)} KB`;
            const webpStr = `${(webpSize / 1024).toFixed(1)} KB`;
            const savingsStr = `${savingsPercent.toFixed(1)}%`;

            console.log(`${file.padEnd(35)} | ${origStr.padEnd(12)} | ${webpStr.padEnd(12)} | ${savingsStr.padEnd(10)} | SUCCESS`);
            successCount++;
        } catch (e) {
            console.log(`${file.padEnd(35)} | ${'N/A'.padEnd(12)} | ${'N/A'.padEnd(12)} | ${'N/A'.padEnd(10)} | ERROR: ${e.message.slice(0, 15)}`);
        }
    }

    console.log('-'.repeat(90));
    if (successCount > 0) {
        const totalSavingsBytes = totalOriginalBytes - totalWebPBytes;
        const totalSavingsPercent = (totalSavingsBytes / totalOriginalBytes) * 100;
        console.log('Summary:');
        console.log(`  Total Converted: ${successCount} files`);
        console.log(`  Total Original Size: ${(totalOriginalBytes / (1024 * 1024)).toFixed(2)} MB`);
        console.log(`  Total WebP Size: ${(totalWebPBytes / (1024 * 1024)).toFixed(2)} MB`);
        console.log(`  Overall Size Reduction: ${totalSavingsPercent.toFixed(1)}% (${(totalSavingsBytes / (1024 * 1024)).toFixed(2)} MB saved)`);
    } else {
        console.log('No images were successfully converted.');
    }
    console.log('-'.repeat(90));
});
