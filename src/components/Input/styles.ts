import { createStyles, makeStyles, Theme  } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "90%",
    "& .MuiOutlinedInput-root": {
      height: "8vh",
    },
  },
  margin: {
    // margin: theme.spacing(1),
  },
  textField: {
     width: '25ch',
  },
}),
)