from PIL import Image
import numpy as np
import sys
import os

def crop_transparent_image(input_path, output_path=None, padding=2):
    """
    裁剪PNG图片的透明区域，只保留主体部分
    
    Args:
        input_path (str): 输入图片路径
        output_path (str): 输出图片路径，如果为None则覆盖原文件
        padding (int): 预留的边距像素数，默认为2
    """
    try:
        # 打开图片
        img = Image.open(input_path)
        
        # 确保图片有透明通道
        if img.mode != 'RGBA':
            print(f"警告: 图片 {input_path} 不是RGBA模式，正在转换...")
            img = img.convert('RGBA')
        
        # 转换为numpy数组以便处理
        img_array = np.array(img)
        
        # 获取alpha通道（透明度）
        alpha_channel = img_array[:, :, 3]
        
        # 找到非透明像素的位置
        non_transparent_pixels = np.where(alpha_channel > 0)
        
        if len(non_transparent_pixels[0]) == 0:
            print("错误: 图片完全透明，无法裁剪")
            return False
        
        # 获取边界框
        min_y = np.min(non_transparent_pixels[0])
        max_y = np.max(non_transparent_pixels[0])
        min_x = np.min(non_transparent_pixels[1])
        max_x = np.max(non_transparent_pixels[1])
        
        # 添加边距，但不超出图片边界
        height, width = img_array.shape[:2]
        
        crop_top = max(0, min_y - padding)
        crop_bottom = min(height, max_y + padding + 1)
        crop_left = max(0, min_x - padding)
        crop_right = min(width, max_x + padding + 1)
        
        # 裁剪图片
        cropped_img = img.crop((crop_left, crop_top, crop_right, crop_bottom))
        
        # 设置输出路径
        if output_path is None:
            output_path = input_path
        
        # 保存裁剪后的图片
        cropped_img.save(output_path, 'PNG')
        
        print(f"成功裁剪图片: {input_path}")
        print(f"原始尺寸: {width}x{height}")
        print(f"裁剪后尺寸: {cropped_img.width}x{cropped_img.height}")
        print(f"保存到: {output_path}")
        
        return True
        
    except Exception as e:
        print(f"处理图片时出错: {e}")
        return False

def batch_crop_images(input_dir, output_dir=None, padding=2):
    """
    批量处理文件夹中的PNG图片
    
    Args:
        input_dir (str): 输入文件夹路径
        output_dir (str): 输出文件夹路径，如果为None则覆盖原文件
        padding (int): 预留的边距像素数
    """
    if not os.path.exists(input_dir):
        print(f"错误: 输入文件夹 {input_dir} 不存在")
        return
    
    if output_dir and not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"创建输出文件夹: {output_dir}")
    
    png_files = [f for f in os.listdir(input_dir) if f.lower().endswith('.png')]
    
    if not png_files:
        print(f"在 {input_dir} 中没有找到PNG文件")
        return
    
    print(f"找到 {len(png_files)} 个PNG文件，开始批量处理...")
    
    success_count = 0
    for filename in png_files:
        input_path = os.path.join(input_dir, filename)
        
        if output_dir:
            output_path = os.path.join(output_dir, filename)
        else:
            output_path = input_path
        
        if crop_transparent_image(input_path, output_path, padding):
            success_count += 1
        print("-" * 50)
    
    print(f"批量处理完成: {success_count}/{len(png_files)} 个文件处理成功")

def main():
    """
    主函数，处理命令行参数
    """
    if len(sys.argv) < 2:
        print("使用方法:")
        print("  单个文件: python crop_transparent_image.py <输入文件路径> [输出文件路径] [边距像素数]")
        print("  批量处理: python crop_transparent_image.py --batch <输入文件夹> [输出文件夹] [边距像素数]")
        print("")
        print("参数说明:")
        print("  输入文件路径: 要处理的PNG图片路径")
        print("  输出文件路径: 可选，如果不指定则覆盖原文件")
        print("  边距像素数: 可选，默认为2像素")
        print("")
        print("示例:")
        print("  python crop_transparent_image.py image.png")
        print("  python crop_transparent_image.py image.png cropped_image.png 3")
        print("  python crop_transparent_image.py --batch ./images ./output 2")
        return
    
    # 批量处理模式
    if sys.argv[1] == '--batch':
        if len(sys.argv) < 3:
            print("错误: 批量模式需要指定输入文件夹")
            return
        
        input_dir = sys.argv[2]
        output_dir = sys.argv[3] if len(sys.argv) > 3 else None
        padding = int(sys.argv[4]) if len(sys.argv) > 4 else 2
        
        batch_crop_images(input_dir, output_dir, padding)
    
    # 单文件处理模式
    else:
        input_path = sys.argv[1]
        output_path = sys.argv[2] if len(sys.argv) > 2 else None
        padding = int(sys.argv[3]) if len(sys.argv) > 3 else 2
        
        if not os.path.exists(input_path):
            print(f"错误: 文件 {input_path} 不存在")
            return
        
        crop_transparent_image(input_path, output_path, padding)

if __name__ == "__main__":
    main()