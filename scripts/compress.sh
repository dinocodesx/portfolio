#!/bin/bash

# Target directory
TARGET_DIR="public/assets/img"
QUALITY=70

if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Directory $TARGET_DIR not found."
  exit 1
fi

echo "--- Image Compression Started ---"
echo "Target: $TARGET_DIR"
echo "Quality: $QUALITY%"

# Find all jpg/jpeg files (case-insensitive)
find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r img; do
  size_before=$(stat -f%z "$img")
  # Use sips (native macOS tool) to compress
  sips -s formatOptions $QUALITY "$img" --out "$img" > /dev/null 2>&1
  size_after=$(stat -f%z "$img")
  
  # Calculate savings
  saved=$((size_before - size_after))
  saved_kb=$((saved / 1024))
  
  echo "✓ $(basename "$img"): $((size_before / 1024))KB -> $((size_after / 1024))KB (Saved ${saved_kb}KB)"
done

echo "--- Compression Complete ---"
