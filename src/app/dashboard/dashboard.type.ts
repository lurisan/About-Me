export interface Tile {
  hover: {
    image: string,
    title: string,
    linkType: 'modal' | 'link',
    link: '#' | string
  },
  noHover: {
    image: string,
    title: string,
    description: string
  }
}