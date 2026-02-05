/**
 * 从数组中获取一个随机索引
 */
export const getRandomIndex = (arr: any[]): number => {
  return Math.floor(Math.random() * arr.length);
};

/**
 * 生成一个新的 4x4 矩阵用于记忆游戏
 * 每个 1 到 8 的数字正好出现两次
 */
export const generateGameMatrix = (rows: number = 4, cols: number = 4): number[][] => {
  const totalCards = rows * cols;
  const numPairs = totalCards / 2;
  
  // 创建一个包含成对数字的数组
  const arr: number[] = [];
  for (let i = 1; i <= numPairs; i++) {
    arr.push(i, i);
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
