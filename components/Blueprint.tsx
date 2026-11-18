// Decorative vector interpretation of the historical Harris Home M-1022
// floor plan in the UB brand assets. Not a UB project or a construction drawing.
export default function Blueprint() {
  return (
    <svg className="ub-blueprint" viewBox="0 0 330 390" aria-hidden="true" focusable="false">
      <g className="ub-plan-walls" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path pathLength={1} d="M52 112H274V315H52ZM57 117H269V310H57ZM52 315V350H274V315M57 345H269M140 350V369H184V350M140 356H184M140 362H184" />
        <path pathLength={1} d="M131 117V190L111 212L132 236H57M136 117V190L117 212L134 231H57M135 232V310M140 236V310M136 233L150 214L176 215H269M141 236L153 219H269M181 117V214M176 117V193M159 117V189H176M164 117V184H176M220 112V54H274V112M225 112V59H269V112" />
      </g>
      <g className="ub-plan-detail" fill="none" stroke="currentColor" strokeWidth="1">
        <path pathLength={1} d="M52 44H274M52 35V100M274 35V49M47 49L57 39M269 49L279 39M296 112V315M279 112H306M279 315H306M291 117L301 107M291 320L301 310M225 65H269M225 72H269M225 79H269M225 86H269M225 93H269M225 100H269M242 103V61L236 67M242 61L248 67M58 218H104V230H58M82 218V230M188 119H256V135H188M249 136V172H268M141 124H154V147H141ZM141 157H157V170H141Z" />
        <path pathLength={1} d="M72 114H101M72 118H101M197 114H216M197 118H216M50 158V182M54 158V182M271 155V183M275 155V183M50 257V284M54 257V284M271 249V279M275 249V279M74 312H104M74 316H104M192 312H226M192 316H226" />
      </g>
      <g className="ub-plan-labels" fill="currentColor" fontFamily="monospace" fontSize="8" letterSpacing="1">
        <text x="116" y="36">HISTORICAL PLAN</text><text x="71" y="160">CHAMBER</text><text x="199" y="164">KITCHEN</text><text x="156" y="268">LIVING ROOM</text><text x="73" y="269">CHAMBER</text><text x="146" y="337">PORCH</text>
      </g>
    </svg>
  )
}
