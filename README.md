# Mupersei UI

Mupersei가 운영하는 여러 웹 서비스에서 공통으로 사용하는 UI 컴포넌트 라이브러리입니다.
Atomic Design 방법론을 기반으로 컴포넌트를 계층화하고, Tailwind CSS를 스타일링 도구로 사용합니다.

## 설치

```bash
npm install github:mupersei/ui#1.0.0
```

## Tailwind 설정

서비스의 `tailwind.config.js`에 다음을 추가하세요:

```js
const muperseiPreset = require('ui/tailwind-preset');

module.exports = {
  presets: [muperseiPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/ui/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      // 서비스 고유 토큰은 여기에 추가
    },
  },
};
```

## CSS 변수 설정

서비스의 globals.css에 다음 CSS 변수를 추가하세요:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: Arial, Helvetica, sans-serif;
  }
}
```

## 사용법

### 전체 import

```tsx
import { Button, Card, Dialog } from 'ui';
```

### 계층별 import

```tsx
import { Button, Input, Badge } from 'ui/atoms';
import { Card } from 'ui/organisms';
```

## 컴포넌트 목록

### Atoms

| 컴포넌트 | 설명 |
|---------|------|
| Button | 기본 버튼 (variant: default, destructive, outline, secondary, ghost, link) |
| Input | 텍스트 입력 필드 |
| Badge | 상태/카테고리 라벨 |
| Dialog | 모달 다이얼로그 |
| DropdownMenu | 드롭다운 메뉴 |
| Sheet | 사이드 패널 |
| ScrollArea | 커스텀 스크롤 영역 |
| Separator | 구분선 |

### Organisms

| 컴포넌트 | 설명 |
|---------|------|
| Card | 콘텐츠 카드 컨테이너 (CardHeader, CardTitle, CardDescription, CardContent, CardFooter) |

## 개발

```bash
# 의존성 설치
npm install

# 빌드
npm run build

# 개발 모드 (watch)
npm run dev

# 타입 체크
npm run type-check
```

## 릴리즈

```bash
npm run build
npm version patch|minor|major
git push origin main --tags
```

## 기술 스택

- TypeScript 5.3+
- React 18+
- Tailwind CSS 3.4+
- Radix UI Primitives
- class-variance-authority
- tsup (빌드)
