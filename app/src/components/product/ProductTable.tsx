import { Box } from "@mui/material";

interface TableRowProps {
  label: string;
  value: string;
}

const TableRow: React.FC<TableRowProps> = ({ label, value }) => {
  return (
    <Box
      className="flex w-full"
      sx={{
        fontSize: "12px",
        fontWeight: "300",
      }}
    >
      <Box
        className="border w-1/2"
        sx={{
          padding: "3px 2px 3px 2px",
          borderWidth: "1px 1px 1px 1px",
          borderStyle: "dotted",
          borderColor: "rgba(216, 216, 216, 1)",
        }}
      >
        {label}
      </Box>
      <Box
        className="border w-1/2"
        sx={{
          padding: "3px 2px 3px 2px",
          borderWidth: "1px 1px 1px 1px",
          borderStyle: "dotted",
          borderColor: "rgba(216, 216, 216, 1)",
          fontWeight: "600",
        }}
      >
        {value}
      </Box>
    </Box>
  );
};

interface TableProps {
  data: Array<{
    label: string;
    value: string;
  }>;
}

const ProductTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="mt-5">
      {data.map((value) => {
        return (
          <TableRow key={value.value} label={value.label} value={value.value} />
        );
      })}
    </div>
  );
};

export default ProductTable;
