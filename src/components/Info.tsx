export function Info({ header, list, children }) {
  return (
    <div>
      <h3 className="info font-ark-es-dense text-4xl">{header}</h3>
      {list && (
        <ul>
          {list.map((listItem, index) => (
            <li key={index} className="info text-l">
              {listItem}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  )
}
