import { useState, useEffect } from "react";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const day = time.toLocaleDateString("en-Us", {
    weekday: "short",
    day: "numeric",
  });
  const hour = time.toLocaleTimeString("en-Us", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="header_bg">
        <div className="current_day">{day}</div>
        <div className="current_hour">{hour}</div>
      </div>
    </>
  );
}

export default Header;
