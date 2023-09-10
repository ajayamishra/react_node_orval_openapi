import { defineConfig } from 'orval'

import { formatModel } from './src/client/configs/orval/transformer/format-model'

export default defineConfig({
  private: {
    input: {
      target: './schemas/root.yaml',
      override: {
        transformer: (content: any) => formatModel(content)
      }
    },
    output: {
      clean: true,
      client: 'react-query',
      mock: true,
      mode: 'tags',
      prettier: true,
      target: './api.ts',
      workspace: './src/client/models/generated',
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    }
  }
})