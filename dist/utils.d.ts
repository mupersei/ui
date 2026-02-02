import { ClassValue } from 'clsx';

/**
 * 조건부 className 병합 함수
 * clsx로 조건부 클래스를 처리하고, tailwind-merge로 Tailwind 클래스 충돌을 해결
 *
 * @example
 * cn('px-4', isActive && 'bg-blue-500', undefined, 'text-white')
 * // 결과: "px-4 bg-blue-500 text-white"
 *
 * cn('p-4', 'p-2') // tailwind-merge가 충돌 해결
 * // 결과: "p-2"
 */
declare function cn(...inputs: ClassValue[]): string;

export { cn };
