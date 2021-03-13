import { useState } from "react";

import TextField from "./TextField";
import OldTextField from "../components/TextField";

const SassComponents = () => {
  const [time, setTime] = useState("");

  return (
    <div>
      <div style={{ margin: "80px 0px" }}>
        <TextField
          value={time}
          onChange={(e) => setTime(e.target.value)}
          label="زمان"
          helperText="ورود زمان الزامی است."

        />
      </div>
      <div style={{ margin: "80px 0px" }}>
        <TextField
          value={time}
          onChange={(e) => setTime(e.target.value)}
          label="زمان"
          error
        />
      </div>
      <div style={{ margin: "80px 0px" }}>
        <TextField
          value={time}
          onChange={(e) => setTime(e.target.value)}
          label="زمان"
          error
          helperText="ورود زمان الزامی است."
        />
      </div>
      <div style={{ marginBottom: 40 }}>
        <OldTextField label="زمان" />
      </div>
    </div>
  );
};

export default SassComponents;
