import * as React from "react";

export interface SongListProps {
  artist: string;
  song: string;
}

export class SongList extends React.Component<SongListProps, {}> {
  render() {
    return (
      <h1>
        {this.props.artist} sjunger {this.props.song}
      </h1>
    );
  }
}