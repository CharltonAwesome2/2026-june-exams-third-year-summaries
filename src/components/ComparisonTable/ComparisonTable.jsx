// ComparisonTable.jsx

import Table from "../Table/Table.jsx";
import TableRow from "../Table/TableRow.jsx";
import { Card, CardHeader, CardBody } from "@components/Card/Card.jsx";
import styles from "./ComparisonTable.module.css";

export default function ComparisonTable({ title, subtitle, badge, headers, rows }) {
  if (!headers || !rows || rows.length === 0) return null;

  return (
    <Card>
      <CardHeader title={title || "Comparison"} subtitle={subtitle} meta={badge} />
      <CardBody>
        <div className={styles.tableWrapper}>
          <Table>
            <thead>
              <tr>
                {headers.map((header, idx) => (
                  <TableRow key={idx} head>
                    {header}
                  </TableRow>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  {row.map((cell, cellIdx) => (
                    <TableRow key={cellIdx}>{cell}</TableRow>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
}