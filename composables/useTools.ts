export interface ToolItem {
  name: string
  description: string
  path: string
  badge?: string
}

const tools: ToolItem[] = []

export const useTools = () => {
  return {
    tools
  }
}
