import React from "react";

export interface ContentInterface {
  guideChoice: (event: React.MouseEvent<HTMLButtonElement>) => void;
  contentActive: string;
}
