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
      className={`flex-1 flex flex-col items-center justify-center p-6 text-center ${textColor}`}
      style={itemStyle}
    >
      <img src={icon} alt={label} className="w-16 h-16 mb-4" />
      <p className="text-4xl font-bold mb-1">{count}</p>
      <p className="text-lg">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const statsData: StatItemProps[] = [
    { icon: "/images/statsection/tyre.svg", count: "100+", label: "Tyres Sold", bgColor: "#E3E41A", textColor: "text-[#23255a]" },
    { icon: "/images/statsection/oil.svg", count: "200+", label: "Oil Changed", bgImage: "/images/sections/stats-bg-dark-1.png", textColor: "text-white" },
    { icon: "/images/statsection/battery.svg", count: "50+", label: "Battery", bgColor: "#E3E41A", textColor: "text-[#23255a]" },
    { icon: "/images/statsection/brake.svg", count: "80+", label: "Brakes Fixed", bgImage: "/images/sections/stats-bg-dark-2.png", textColor: "text-white" },
  ];

  return (
    <section
      className="flex w-full"
      style={{
        height: "435px",
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
          bgImage={stat.bgImage}
          textColor={stat.textColor}
        />
      ))}
    </section>
  );
};

export default StatsSection; 