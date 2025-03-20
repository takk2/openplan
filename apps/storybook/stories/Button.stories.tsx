import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/Button/Button";

// 메타데이터 정의
const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["lg", "base", "sm"],
      description: "다음",
      defaultValue: "base",
    },
    isLoading: {
      control: "boolean",
      description: "로딩 상태",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
      defaultValue: false,
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: "다음",
    size: "base",
  },
};

// 큰 버튼
export const Large: Story = {
  args: {
    children: "다음",
    size: "lg",
  },
};

// 작은 버튼
export const Small: Story = {
  args: {
    children: "다음",
    size: "sm",
  },
};

// 비활성화 버튼
export const Disabled: Story = {
  args: {
    children: "다음",
    disabled: true,
  },
};

// 로딩 상태 버튼
export const Loading: Story = {
  args: {
    children: "로딩 중",
    isLoading: true,
    loading: "로딩 중...",
  },
};
