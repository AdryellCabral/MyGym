import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
  OutlinedInput,
} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "90%",
      height: "30vh",
      "& .MuiOutlinedInput-root": {
        height: "20px",
      },
    },
    margin: {
      // margin: theme.spacing(1),
    },
    // textField: {
    //   width: "25ch",
    // },
  })
);

export const StyledInput = withStyles({
  root: {
    width: "100%",
    height: "7vh",
  },
})(OutlinedInput);
