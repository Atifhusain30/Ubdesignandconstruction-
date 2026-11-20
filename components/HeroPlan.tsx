// Original illustrative tenant layout; no customer drawing or construction dimensions.
const exteriorWalls = 'M150 323H91V77h477v246H206 M150 315H99V85h461v230H206 M150 315v8m56-8v8 M91 127h8m-8 113h8 M99 116h75m-75 6h75'
const interiorWalls = 'M290 85v58m6-58v58m-6 44v128m6-128v128 M290 143h6m-6 44h6 M296 205h41m44 0h179m-264 6h41m44 0h179 M337 205v6m44-6v6 M464 211v30m6-30v30m-6 44v30m6-30v30 M464 241h6m-6 44h6'
const fixtures = [
  'M151 143h104v31H151z m0 46h104v31H151z M158 174v9h22v-9m17 0v9h22v-9m17 0v9h12v-9 M158 220v-9h22v9m17 0v-9h22v9m17 0v-9h12v9',
  'M339 147h128v28H339z M353 175v10h17v-10m21 0v10h17v-10m21 0v10h17v-10 M486 143h65v43h-65z M512 151v27m-17-14h45',
  'M330 247h70v37h-70z M327 257h-10v17h10m73-17h10v17h-10m-48-27v-10h25v10m-25 37v10h25v-10',
  'M486 238h60v27h-60z M526 270h20v39h-20z M493 244h20v15h-20z M530 289h12v14h-12z',
]

export default function HeroPlan() {
  return (
    <svg className="ub-plan" viewBox="0 0 640 390" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="ub-sheet-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeWidth=".55" />
        </pattern>
        <pattern id="ub-sheet-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0v5" stroke="currentColor" strokeWidth=".8" />
        </pattern>
      </defs>
      <rect className="ub-plan__grid" x="8" y="9" width="621" height="369" fill="url(#ub-sheet-grid)" />
      <g className="ub-plan__guides" fill="none" stroke="currentColor">
        <path d="M35 77H607M35 205H607M35 323H607M91 44V344M290 44V344M464 44V344M568 44V344" strokeDasharray="10 5 2 5" />
        <path d="M18 29V17h12m577 0h12v12M18 355v12h12m577 0h12v-12" />
      </g>
      <path className="ub-plan__underprint" d={`${exteriorWalls} ${interiorWalls}`} fill="none" stroke="currentColor" strokeWidth="1.3" />
      <g className="ub-plan__walls" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path className="ub-plan__trace" pathLength="1" d={exteriorWalls} />
        <path className="ub-plan__trace" pathLength="1" d={interiorWalls} />
        <path className="ub-plan__trace" pathLength="1" d="M150 315v-56a56 56 0 0 1 56 56 M296 143h44a44 44 0 0 1-44 44 M337 211v44a44 44 0 0 0 44-44 M470 241h44a44 44 0 0 1-44 44" strokeWidth=".9" />
      </g>
      <g className="ub-plan__fixtures" fill="none" stroke="currentColor" strokeWidth=".95">
        {fixtures.map((d) => <path className="ub-plan__trace" pathLength="1" d={d} key={d} />)}
        <path className="ub-plan__trace" pathLength="1" d="M104 94h70v22h-70z M111 100h28v10h-28z M472 94h80v22h-80z M475 98h70m-65 4h65m-65 4h65m-65 4h65" />
        <rect x="106" y="124" width="22" height="184" fill="url(#ub-sheet-hatch)" stroke="none" />
      </g>
      <g className="ub-plan__dimensions" fill="none" stroke="currentColor" strokeWidth=".85">
        <path className="ub-plan__trace" pathLength="1" d="M91 69V27m477 42V27M290 70V48m174 22V48 M85 35h489M85 59h489 M87 39l8-8m469 8l8-8M87 63l8-8m191 8l8-8m166 8l8-8m96 8l8-8 M82 77H47m35 128H47m35 118H47 M55 71v258 M51 81l8-8m-8 136l8-8m-8 126l8-8" />
        <path className="ub-plan__trace" pathLength="1" d="M520 293h58l22-18h24 M172 348h31l23-18 M570 340h33m-16-16v32m-6-25 6-9 6 9 M26 112h16m-8-8v16" />
      </g>
      <g className="ub-plan__notes" fill="currentColor" fontFamily="Consolas, monospace" fontSize="10" letterSpacing="1">
        <text x="330" y="29" textAnchor="middle">48′–0″</text>
        <text x="191" y="54" textAnchor="middle">20′–0″</text><text x="377" y="54" textAnchor="middle">17′–6″</text><text x="517" y="54" textAnchor="middle">10′–6″</text>
        <text x="44" y="202" transform="rotate(-90 44 202)" textAnchor="middle">25′–0″</text>
        <text x="200" y="105" textAnchor="middle">01 / SALES FLOOR</text><text x="408" y="107" textAnchor="middle">02 / COUNTER</text>
        <text x="367" y="306" textAnchor="middle">03 / WORKROOM</text><text x="519" y="231" textAnchor="middle">04 / SERVICE</text>
        <text x="586" y="269">M–01</text><text x="140" y="352">ENTRY</text><text x="586" y="319" textAnchor="middle">N</text>
      </g>
      <g className="ub-plan__stamp" fill="currentColor" fontFamily="Consolas, monospace" fontSize="10" letterSpacing="1.25">
        <path d="M249 342h354m-354 24h354m-354-24v24m75-24v24m279-24v24" fill="none" stroke="currentColor" strokeWidth=".75" />
        <text x="259" y="357" fontWeight="bold">UB / A–01</text>
        <text x="333" y="357">CONCEPT STUDY</text><text x="592" y="357" textAnchor="end">NOT FOR CONSTRUCTION</text>
      </g>
    </svg>
  )
}
