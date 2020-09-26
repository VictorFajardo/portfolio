import React from "react"

const Emoji = ({ childRef, query }) => {
  return (
    <div
      ref={childRef}
      className="svg"
      dangerouslySetInnerHTML={{ __html: query.svg.content }}
    />
  )
}

export default Emoji
