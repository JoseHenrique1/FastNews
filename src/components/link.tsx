interface props {
  link: string
}
import { LinkContext } from "../contexts/link-context";
import { useContext } from "react";
export function Link({ link }: props) {
  const {link: contextLink, setLink} = useContext(LinkContext);

  function handleChangingLink() {
    setLink(link)
  }



  const className = "cursor-pointer text-gray-300 hover:text-gray-50" + (link === contextLink? " link_selected" : "");
  return (
    <div
      onClick={handleChangingLink}
      key={link}
      className={className}>
      {link}
    </div>
  );
}