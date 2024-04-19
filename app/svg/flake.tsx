export default function FlakeIcon({
  className,
  other,
}: {
  className?: string;
  other?: any;
}) {
  return (
    <svg
      width="548"
      height="548"
      color="red"
      viewBox="0 0 548 548"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
      className={className}
    >
      <rect
        x="231.528"
        y="0.128662"
        width="85.204"
        height="547.743"
        fill="currentColor"
      />
      <rect
        x="0.256836"
        y="316.603"
        width="85.204"
        height="547.743"
        transform="rotate(-90 0.256836 316.603)"
        fill="currentColor"
      />
      <rect
        x="110.596"
        y="497.782"
        width="85.204"
        height="547.743"
        transform="rotate(-135 110.596 497.782)"
        fill="currentColor"
      />
      <rect
        x="497.91"
        y="437.532"
        width="85.204"
        height="547.743"
        transform="rotate(135 497.91 437.532)"
        fill="currentColor"
      />
    </svg>
  );
}
