type Props = {
  color?: string
  width?: number
  className?: string
}

export function Glasses({ color = '#10B89B', width = 240, className }: Props) {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 30H22" stroke={color} strokeWidth="2" />
      <rect x="22" y="10" width="86" height="40" rx="14" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" />
      <rect x="132" y="10" width="86" height="40" rx="14" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" />
      <path d="M108 30H132" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M218 30H240" stroke={color} strokeWidth="2" />
    </svg>
  )
}
