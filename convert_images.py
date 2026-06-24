import os
import sys
import subprocess

# Ensure Pillow is installed
try:
    from PIL import Image
except ImportError:
    print("Pillow library not found. Installing it now...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
        from PIL import Image
        print("Pillow installed successfully.\n")
    except Exception as e:
        print(f"Error installing Pillow: {e}")
        print("Please install Pillow manually using 'pip install pillow' and run this script again.")
        sys.exit(1)

def convert_images_to_webp(source_dir, target_dir, quality=85):
    if not os.path.exists(source_dir):
        print(f"Source directory '{source_dir}' does not exist.")
        return

    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    # Supported formats
    valid_extensions = ('.png', '.jpg', '.jpeg', '.bmp', '.tiff')
    
    files = [f for f in os.listdir(source_dir) if f.lower().endswith(valid_extensions)]
    
    if not files:
        print(f"No image files found in '{source_dir}'.")
        return

    print(f"Found {len(files)} images to convert.")
    print("-" * 90)
    print(f"{'Original File':<35} | {'Original Size':<12} | {'WebP Size':<12} | {'Savings':<10} | {'Status':<10}")
    print("-" * 90)

    total_original_bytes = 0
    total_webp_bytes = 0
    converted_count = 0

    for filename in files:
        source_path = os.path.join(source_dir, filename)
        
        # Determine target filename
        base_name, _ = os.path.splitext(filename)
        target_filename = f"{base_name}.webp"
        target_path = os.path.join(target_dir, target_filename)

        try:
            # Get original size
            original_size = os.path.getsize(source_path)
            total_original_bytes += original_size

            # Convert and save
            with Image.open(source_path) as img:
                # Convert RGBA to RGB if saving as WebP is required without transparency,
                # but WebP supports transparency, so we keep the mode or convert to RGBA
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    img.save(target_path, 'WEBP', quality=quality, lossless=False)
                else:
                    img.save(target_path, 'WEBP', quality=quality)

            # Get WebP size
            webp_size = os.path.getsize(target_path)
            total_webp_bytes += webp_size

            # Calculate savings
            savings_bytes = original_size - webp_size
            savings_percent = (savings_bytes / original_size) * 100 if original_size > 0 else 0

            # Formatting sizes
            orig_size_str = f"{original_size / 1024:.1f} KB"
            webp_size_str = f"{webp_size / 1024:.1f} KB"
            savings_str = f"{savings_percent:.1f}%"

            print(f"{filename:<35} | {orig_size_str:<12} | {webp_size_str:<12} | {savings_str:<10} | SUCCESS")
            converted_count += 1
        except Exception as e:
            print(f"{filename:<35} | {'N/A':<12} | {'N/A':<12} | {'N/A':<10} | ERROR: {str(e)[:15]}")

    print("-" * 90)
    if converted_count > 0:
        total_savings_bytes = total_original_bytes - total_webp_bytes
        total_savings_percent = (total_savings_bytes / total_original_bytes) * 100 if total_original_bytes > 0 else 0
        
        print(f"Summary:")
        print(f"  Total Converted: {converted_count} files")
        print(f"  Total Original Size: {total_original_bytes / (1024*1024):.2f} MB")
        print(f"  Total WebP Size: {total_webp_bytes / (1024*1024):.2f} MB")
        print(f"  Overall Size Reduction: {total_savings_percent:.1f}% ({total_savings_bytes / (1024*1024):.2f} MB saved)")
    else:
        print("No images were successfully converted.")
    print("-" * 90)

if __name__ == "__main__":
    # Path setup relative to workspace root
    source_directory = os.path.join("public", "images", "original_png")
    target_directory = os.path.join("public", "images")
    
    convert_images_to_webp(source_directory, target_directory)
