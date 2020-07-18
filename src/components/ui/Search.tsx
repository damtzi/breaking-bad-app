import React, { useState, ChangeEvent } from "react";

interface Props {
  getQuery: (q: string) => void;
}

const Search: React.FC<Props> = ({ getQuery }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onChange = (q: string) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters..."
          value={text}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
