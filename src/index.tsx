import * as React from "react";
import * as ReactDOM from "react-dom";

import { SongList } from "./components/songlist";

ReactDOM.render(
  <SongList artist="Bellyoyo" song="Suryoyo" />,
  document.getElementById("example")
);