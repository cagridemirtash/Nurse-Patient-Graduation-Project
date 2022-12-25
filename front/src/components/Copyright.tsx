import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://darkholdtech.com/">
        0xHyperman
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
