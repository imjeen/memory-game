import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * 自定义计时器 Hook
 * 用于在游戏中追踪所花费的时间
 */
export function useTimer() {
  const [seconds, setSeconds] = useState(0); // 计秒
  const [isActive, setIsActive] = useState(false); // 计时器是否激活
  const intervalRef = useRef<number | null>(null);

  /**
   * 启动计时器
   */
  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  /**
   * 停止计时器
   */
  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  /**
   * 重置计时器并将其归零
   */
  const reset = useCallback(() => {
    setIsActive(false);
    setSeconds(0);
  }, []);

  useEffect(() => {
    if (isActive) {
      // 每秒自增一次
      intervalRef.current = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (intervalRef.current !== null) {
      // 停止计时时清除定时器
      clearInterval(intervalRef.current);
    }

    // 组件卸载或 isActive 改变时清除定时器
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  return {
    seconds, // 当前秒数
    isActive, // 是否正在计时
    start, // 开始计时方法
    stop, // 停止计时方法
    reset, // 重置计时方法
  };
}
