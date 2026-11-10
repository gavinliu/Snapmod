import * as path from 'node:path';
import { defineConfig, type UserConfig } from '@rspress/core';

const config: UserConfig = {
  root: path.join(__dirname, 'docs'),
  title: 'Snapmod',
  description: 'A beautiful frame for every screenshot.',
  lang: 'en',
  route: { cleanUrls: true },
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content:
              'https://snapmod.gavinliu.cn/brand/google-play-feature-1024x500.png',
          },
        },
      ],
    },
  },
  sitemap: { siteUrl: 'https://snapmod.gavinliu.cn' },
  i18nSource(source: Record<string, Record<string, string>>) {
    return Object.fromEntries(
      Object.entries(source).map(([key, translations]) => [
        key,
        { ...translations, 'zh-CN': translations.zh ?? translations.en },
      ]),
    );
  },
  icon: '/favicon.ico',
  logo: '/brand/snapmod-app-icon.svg',
  logoText: 'Snapmod',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Snapmod',
      description: 'A beautiful frame for every screenshot.',
    },
    {
      lang: 'zh-CN',
      label: '简体中文',
      title: 'Snapmod',
      description: '给截图，一个好看的框。',
    },
  ],
  themeConfig: {
    locales: [
      {
        lang: 'en',
        label: 'English',
        nav: [
          { text: 'Privacy Policy', link: '/docs/policies/privacy-policy' },
          {
            text: 'Terms & Conditions',
            link: '/docs/policies/terms-conditions',
          },
          {
            text: 'Community',
            link: 'https://github.com/gavinliu/Snapmod/discussions',
          },
        ],
      },
      {
        lang: 'zh-CN',
        label: '简体中文',
        nav: [
          { text: '隐私政策', link: '/zh-CN/docs/policies/privacy-policy' },
          { text: '使用条款', link: '/zh-CN/docs/policies/terms-conditions' },
          {
            text: '社区',
            link: 'https://github.com/gavinliu/Snapmod/discussions',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/gavinliu/Snapmod',
      },
    ],
    footer: {
      message:
        '<a href="https://github.com/gavinliu/Snapmod/issues">Help us translate · 帮助翻译</a><br/>Copyright © 2025 Snapmod, Inc.',
    },
  },
};

export default defineConfig(config);
