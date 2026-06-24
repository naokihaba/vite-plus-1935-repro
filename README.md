# vite-plus-1935-repro

Minimal reproduction for https://github.com/voidzero-dev/vite-plus/issues/1935.

## Reproduction

```bash
cd ~/ghq/github.com/vite-plus-1935-repro

VP_NODE_VERSION=22.22.0 npm --version
VP_NODE_VERSION=22.22.0 which npm
VP_NODE_VERSION=22.22.0 node index.js
```

Expected shape of the output:

```text
VP_NODE_VERSION=22.22.0 npm --version
# 11.17.0

VP_NODE_VERSION=22.22.0 which npm
# ~/.vite-plus/bin/npm

VP_NODE_VERSION=22.22.0 node index.js
# $ which npm
# ~/.vite-plus/js_runtime/node/22.22.0/bin/npm
# $ npm --version
# Node-bundled npm version, not 11.17.0
```
