// Developed by Manjistha Bidkar
// Performs the following :
// - Initial scan to detect whether text is typed or handwritten
// - Final optimized OCR pass with tuned config for detected type

import Tesseract from 'tesseract.js';
import path from 'path';
import { PreprocessMode } from './preprocess';
import { config } from '../config';

// Enum to tag OCR content type
export enum OCRMode {
  TYPED = 'TYPED',
  HANDWRITTEN = 'HANDWRITTEN'
}

// Heuristic: check if likely typed
function isProbablyTyped(text: string): boolean {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const avgLineLength = lines.reduce((sum, l) => sum + l.length, 0) / (lines.length || 1);
  const punctuationCount = (text.match(/[.,;:!?]/g) || []).length;
  return avgLineLength > 40 && punctuationCount > 5;
}

export async function extractTextFromImage(imagePath: string): Promise<{ text: string, mode: PreprocessMode }> {
  const langPath = config.TESSDATA_PATH;
  
  try {
     const lightScan = await Tesseract.recognize(imagePath, 'eng+osd', {
      langPath,
      logger: () => {},
      tessedit_pageseg_mode: '13',
      preserve_interword_spaces: '1'
    } as any);

    const initialText = lightScan.data.text;
    const isTyped = isProbablyTyped(initialText);
    const mode = isTyped ? PreprocessMode.TYPED : PreprocessMode.HANDWRITTEN;

    // Configure Tesseract settings for final scan
    const finalConfig: Record<string, string> = {
      tessedit_pageseg_mode: isTyped ? '6' : '13',
      preserve_interword_spaces: '1'
    };

    // Restrict character set for typed content
    if (isTyped) {
      finalConfig.tessedit_char_whitelist =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;-()[]{}!?\'" ';
    }

    // Final OCR scan with tuned settings
    const finalScan = await Tesseract.recognize(imagePath, 'eng', {
      langPath,
      logger: () => {},
      ...(finalConfig as any)
    });

    return { text: finalScan.data.text.trim(), mode };
  } catch (error) {
    throw new Error(`OCR failed for image: ${imagePath}`);
  }
}
