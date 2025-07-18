import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import "./FeatureComparison.css";

const columns = ["Feature", "Pay-as-you-go", "Pro", "Team", "Enterprise"];

const FeatureTable = ({ data }) => {
  return (
    <TableContainer component={Paper} className="feature-table-container">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, i) => (
              <TableCell
                key={col}
                className={`table-head-cell ${i === 0 ? "first-cell" : ""}`}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className={`table-body-cell ${cellIndex === 0 ? "first-cell" : ""}`}
                >
                  {cell === "✔" ? "✅" : cell === "✕" ? "❌" : cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeatureTable;
