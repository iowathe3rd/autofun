import { Breadcrumbs } from "@mui/material";
import { Link } from "@remix-run/react";

interface BreadCrumbsProps {
  items: { title: string; href: string }[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ items }) => {
  return (
    <Breadcrumbs
      separator={""}
      aria-label="breadcrumb"
      sx={{
        "& a": {
          fontSize: "15px",
          fontWeight: "900",
          color: "#7d7d7d",
        },
      }}
    >
      {items.map((value) => (
        <Link key={value.title} to={value.href}>
          {value.title}
        </Link>
      ))}
    </Breadcrumbs>
  );
};
export default BreadCrumbs;
