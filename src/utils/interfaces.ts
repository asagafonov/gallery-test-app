interface Card {
  id: number,
  title: string,
  image_id: number,
  url: string,
  hasLike: boolean,
}

interface CardsState {
  cards: Array<Card>,
  filterIsOn: boolean,
}

interface ImageCardProps {
  id: number,
  title: string,
  url: string,
  hasLike: boolean,
}

export type { Card, CardsState, ImageCardProps };
