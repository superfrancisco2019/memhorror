import React from "react";

function ResetButton() {
  return (
    <div className="ResetButton">
      <button type="submit" onClick="refreshPage()">
        Refresh Button
      </button>
      <script>function refreshPage(){window.location.reload()}</script>
    </div>
  );
}
export default ResetButton;
