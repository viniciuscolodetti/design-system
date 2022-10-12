import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  hasGraph?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  hasGraph = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {hasGraph && <th></th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
              {hasGraph && (
                <td>
                  <div
                    style={{
                      backgroundColor: '#00B37E',
                      width: value,
                      color: '#00B37E',
                      height: '1rem',
                    }}
                  />
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
