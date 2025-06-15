#!/bin/bash

# Check if folder is passed
if [ -z "$1" ]; then
    echo "Usage: $0 /path/to/folder"
    exit 1
fi

FOLDER="$1"

# Supported image extensions
EXTENSIONS=("jpg" "jpeg" "png" "bmp" "tiff")

# Loop through each extension
for ext in "${EXTENSIONS[@]}"; do
    find "$FOLDER" -type f -iname "*.${ext}" | while read -r img; do
        # Get output path with .webp extension
        output="${img%.*}.webp"
        echo "Converting: $img → $output"
        cwebp "$img" -o "$output"
    done
done

echo "✅ All images converted to WebP."
