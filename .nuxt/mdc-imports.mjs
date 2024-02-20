import Highlight from '/workspace/Kubernetes-Bootcamp/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: Highlight, options: {} },
}

export const highlight = {"theme":{"dark":"github-dark","default":"github-light"}}