export interface PortfolioProject {
  slug: string
  title: string
  summary: string
  tags: string[]
  year: string
  content: string
  links: {
    live?: string
    repo?: string
  }
}

const projects: PortfolioProject[] = []

export const usePortfolio = () => {
  const getAll = () => projects
  const getBySlug = (slug: string) => projects.find((item) => item.slug === slug)

  return { getAll, getBySlug }
}
