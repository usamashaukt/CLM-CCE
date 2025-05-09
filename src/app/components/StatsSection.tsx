import React from "react";

interface StatItemProps {
  icon: string;
  count: string;
  label: string;
  bgColor?: string;
  bgImage?: string;
  textColor?: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, count, label, bgColor, bgImage, textColor = "text-[#23255a]" }) => {
  const itemStyle: React.CSSProperties = {};
  if (bgColor) {
    itemStyle.backgroundColor = bgColor;
  }
  if (bgImage) {
    itemStyle.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgImage}')`;
    itemStyle.backgroundSize = "cover";
    itemStyle.backgroundPosition = "center";
  }

  return (
    <div 
      className={`flex-1 flex flex-col items-center justify-center p-4 md:p-6 text-center ${textColor}`}
      style={itemStyle}
    >
      <img src={icon} alt={label} className="w-12 h-12 md:w-16 md:h-16 mb-4" />
      <p className="text-2xl md:text-4xl font-bold mb-1">{count}</p>
      <p className="text-base md:text-lg">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const statsData: StatItemProps[] = [
    { icon: "/images/statsection/tyre.svg", count: "100+", label: "Tyres Sold", bgColor: "#E3E41A", textColor: "text-[#23255a]" },
    { icon: "/images/statsection/oil.svg", count: "200+", label: "Oil Changed", textColor: "text-white" },
    { icon: "/images/statsection/battery.svg", count: "50+", label: "Battery", bgColor: "#E3E41A", textColor: "text-[#23255a]" },
    { icon: "/images/statsection/brake.svg", count: "80+", label: "Brakes Fixed", textColor: "text-white" },
  ];

  return (
    <section
      className="flex flex-col md:flex-row w-full"
      style={{
        minHeight: "350px",
        height: "auto",
        backgroundImage: "url('/images/statsection/statsBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {statsData.map((stat) => (
        <StatItem
          key={stat.label}
          icon={stat.icon}
          count={stat.count}
          label={stat.label}
          bgColor={stat.bgColor}
          textColor={stat.textColor}
        />
      ))}
    </section>
  );
};

export default StatsSection; 