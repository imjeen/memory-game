/**
 * 记忆游戏支持的图标总数
 * (src/components/Icon.tsx 中定义的 case 数量)
 */
export const TOTAL_ICONS = 8;

/**
 * 从数组中获取一个随机索引
 */
export const getRandomIndex = (arr: any[]): number => {
  return Math.floor(Math.random() * arr.length);
};

/**
 * 生成一个新的 NxN 矩阵用于记忆游戏
 * 每个数字在 1 到 TOTAL_ICONS 之间循环出现两次
 */
export const generateGameMatrix = (rows: number = 4, cols: number = 4): number[][] => {
  // 确保输入是有效的数字
  rows = typeof rows === 'number' && !isNaN(rows) ? rows : 4;
  cols = typeof cols === 'number' && !isNaN(cols) ? cols : 4;

  let totalCards = rows * cols;

  // 记忆游戏需要偶数个方块来配对
  // 如果总数是奇数，我们减少一个（或者你可以根据需求增加一个）
  if (totalCards % 2 !== 0) {
    totalCards -= 1;
  }

  const numPairs = totalCards / 2;

  // 创建一个包含成对数字的数组
  const arr: number[] = [];
  for (let i = 1; i <= numPairs; i++) {
    // 限制数字在 1-TOTAL_ICONS 之间（循环使用图标）
    const iconId = ((i - 1) % TOTAL_ICONS) + 1;
    arr.push(iconId, iconId);
  }

  // 初始化空矩阵
  const matrix: number[][] = Array.from({ length: rows }, () => []);

  // 随机将数字填入矩阵
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const randomIndex = getRandomIndex(arr);
      matrix[r].push(arr[randomIndex]);
      arr.splice(randomIndex, 1); // 填入后移除该数字
    }
  }

  return matrix;
};
