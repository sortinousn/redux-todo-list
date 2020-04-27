import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Todo.scss";

const Todo = (props) => {
  return (
    <div className="tablebody">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {props.item.map((row) => (
              <TableRow key={row.text}>
                <TableCell component="th" scope="row">
                  {row.text}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Todo;
