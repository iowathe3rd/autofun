import { Stack, Typography, useTheme } from "@mui/material";
import { Link } from "@remix-run/react";
import { theme } from "~/src/lib/mui";

export type FooterListProps = {
  title: string;
  items?: {
    title: string;
    href: string;
  }[];
};

export default function FooterList(props: FooterListProps) {
  const { palette } = useTheme<typeof theme>();
  return (
    <Stack
      sx={{
        minWidth: "200px",
      }}
    >
      <Typography
        sx={{
          fontSize: "11pt",
          fontWeight: "500",
          marginBottom: "10px",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        {props.title}
      </Typography>
      <ul className="list-disc mb-[20px] p-0 m-0">
        {props.items?.map((value, index) => {
          return (
            <li key={index} className="flex items-center">
              <Link to={value.href}>
                <Typography
                  sx={{
                    color: "#9f9f9f",
                    fontSize: "10pt",
                    fontWeight: "400",
                    ":hover": {
                      color: palette.primary.main,
                    },
                    padding: "6px 0px 0px 15px",
                  }}
                >
                  {value.title}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </Stack>
  );
}
