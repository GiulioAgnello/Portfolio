import { useState, useEffect } from "react";

export default function OpenLayout() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);
  return (
    <>
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="wrapperLay">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ×
            </button>
            ciaooooo
          </div>
        </div>
      )}
    </>
  );
}
