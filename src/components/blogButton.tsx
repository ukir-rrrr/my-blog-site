import { FatArrowUpRight, FunnyCircle } from "@mynaui/icons-react";
import { Button } from "./ui/button";


export function BlogButton() {
  return (
    <Button>
      <FunnyCircle  style={{ width: '24px', height: '24px' }}/>
      Check out ukir Zenn articles!
      <FatArrowUpRight style={{ width: '24px', height: '24px' }}/>
    </Button>
  )
}