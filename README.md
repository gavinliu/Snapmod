# Snapmod website

Snapmod 官网，基于 Rspress 2，提供英文和简体中文版本。

```sh
pnpm install
pnpm run dev
pnpm run lint
pnpm run format
pnpm run build
pnpm run preview
```

生产产物位于 `doc_build/`，可部署到静态托管。`CNAME` 保留自定义域名 `snapmod.gavinliu.cn`。

- `docs/en/`：英文首页及政策，输出到 `/`。
- `docs/zh-CN/`：中文首页及政策，输出到 `/zh-CN/`。
- `docs/*/home.json`：从旧站迁移的功能介绍、评价和首页正文。
- `docs/*/docs/policies/`：隐私政策和使用条款，保留旧站路径、正文和生效日期。
- `theme/Home.tsx`、`theme/index.css`：共享首页组件和响应式品牌样式。
- `docs/public/img/`：旧站六张截图、商店徽章和 TNW 标志。
- `docs/public/brand/`：来自 Snapmod-X/design/brand 的品牌标志和分享封面。

迁移保留旧站中英文内容、下载及社区链接；首页布局、文案、五图堆叠与悬停动效沿用旧站；导航标志使用新品牌资源。政策内容仅迁移格式，未变更条款。品牌封面仅用于分享元信息，页面截图使用旧站原图。
