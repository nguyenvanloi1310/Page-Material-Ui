import "../App.css";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "16px",
  },
}));
export default function DemoPicker() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root} justifyContent="space-around" container>
        <Grid item>
          <DatePickerComponent placeholder="Ngày viết"></DatePickerComponent>
        </Grid>
        <Grid item>
          <TimePickerComponent placeholder="Vào lúc"></TimePickerComponent>
        </Grid>
      </Grid>
    </>
  );
}
