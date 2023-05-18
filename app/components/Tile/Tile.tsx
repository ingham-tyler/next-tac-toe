import { MouseEventHandler } from "react";

import styles from "./tile.module.css";

export interface TileProps {
  value: string;
  onTileClick: MouseEventHandler<HTMLDivElement>;
}

export default function Tile(props: TileProps) {
  return (
    <div className={styles.tile} onClick={props.onTileClick}>
      <p>{props.value}</p>
    </div>
  );
}
