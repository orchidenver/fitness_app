import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/utilities/enums";

interface Props {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === page.toLocaleLowerCase().trim()
          ? "text-primary-500"
          : ""
      }
      transition duration-500 hover:text-primary-300
    `}
      href={`#${page.toLocaleLowerCase().trim()}`}
      onClick={() =>
        setSelectedPage(page.toLocaleLowerCase().trim() as SelectedPage)
      }
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
