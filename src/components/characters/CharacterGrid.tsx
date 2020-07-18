import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

interface Props {
  isLoading: boolean;
  items: Character[];
}

const CharacterGrid: React.FC<Props> = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
