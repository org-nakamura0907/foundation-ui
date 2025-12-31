import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Typography as TypographyComponent } from './typography';
import React from 'react';

const meta = {
    title: 'Typography',
    component: TypographyComponent as React.ComponentType<any>,
} satisfies Meta<typeof Typography>

export default meta;
type Story = StoryObj<typeof TypographyComponent>

export const Typography: Story = {
    args: {
        as: 'h1',
        variant: 'body',
        children: "見た目が異なるh1タグ"
    }
}

export const H1Typography: StoryObj<typeof TypographyComponent> = {
    name: "Typography.H1",
    args: {
        children: "サンプルテキスト"
    },
    argTypes: {
        as: {
            table: {
                disable: true
            }
        },
        variant: {
            table: {
                disable: true
            }
        }
    },
    render: ({ ...args }) => {
        return <TypographyComponent.H1 {...args} />
    }
}
export const BodyTypography: StoryObj<typeof TypographyComponent> = {
    name: "Typography.Body",
    args: {
        children: "サンプルテキスト"
    },
    argTypes: {
        as: {
            table: {
                disable: true
            }
        },
        variant: {
            table: {
                disable: true
            }
        }
    },
    render: ({ ...args }) => {
        return <TypographyComponent.Body {...args} />
    }
}
